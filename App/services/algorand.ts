import axiosConfig from './http'
import algosdk from 'algosdk'

const clawBackAddress = 'NMSMT3FUFNT5H4HEWZLVGHBFOETWUJPMUOQLGRGN6VM63QTHI6D4JJHYOU'

// const algodToken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
// const algodServer = 'http://localhost';


// client
// const algodPort = 4001;


// client
const algodToken = {
    'X-API-Key': '7ghDyOxiGX2spbgEoIHJ04hsn8ZClPuy6SY6d0ri'
}
const algodServer = 'https://testnet-algorand.api.purestake.io/ps2';
const algoIServer = 'https://testnet-algorand.api.purestake.io/idx2'
const algodPort = '';
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort); 
const indexerClient = new algosdk.Indexer(algodToken, algoIServer, algodPort);



// const kmdport = 4002;

// const kmdtoken = algodToken;
// const kmdserver = algodServer;


// const kmdclient = new algosdk.Kmd(kmdtoken, kmdserver, kmdport);

// console.log(kmdclient)

// let walletid = null;
// let wallethandle = null;

export  async function transactionHistory(acct: string){
    // indexer/javascript/AccountInfoBlock.js
  try{       
        let round = 5;
        let accountInfo = await indexerClient.searchForTransactions()
           .address(acct).do()
        // console.log("Information for Account at block: " + JSON.stringify(accountInfo, undefined, 2));
        return accountInfo
    }catch(e) {
        console.log(e);
        console.trace();
    }
   
}

export const assetInfo=async()=>{
    (async () => {
        let assetIndex = 67513364;
        let assetInfo = await indexerClient.searchForAssets()
            .index(assetIndex).do();
        return JSON.stringify(assetInfo, undefined, 2)
    })().catch(e => {
        console.log(e);
        console.trace();
    });
}






export const createAccount= ()=> {
    try {  
        
        

        const myaccount = algosdk.generateAccount();
        
        const addr = myaccount.addr
        const mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk)
      

        return {address: addr, mnemonic};
    }
    catch (err) {
        
        console.log("err", err);
        return {error: JSON.stringify(err)}
    }
}

// (async()=>createAccount())()


export const accountInfo= async (accountAddr: string)=>{
    try{
        let accountInfo = await algodClient.accountInformation(accountAddr).do();
        return accountInfo
    }
    catch(e){
        return {error: e}
    }
}


// (async()=>console.log(await accountInfo(sender)))()


const waitForConfirmation = async function (algodClient, txId, timeout) {
    if (algodClient == null || txId == null || timeout < 0) {
        throw new Error("Bad arguments");
    }

    const status = (await algodClient.status().do());
    if (status === undefined) {
        throw new Error("Unable to get node status");
    }

    const startround = status["last-round"] + 1;
    let currentround = startround;

    while (currentround < (startround + timeout)) {
        const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
        if (pendingInfo !== undefined) {
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
                //Got the completed Transaction
                return pendingInfo;
            } else {
                if (pendingInfo["pool-error"] != null && pendingInfo["pool-error"].length > 0) {
                    // If there was a pool error, then the transaction has been rejected!
                    throw new Error("Transaction " + txId + " rejected - pool error: " + pendingInfo["pool-error"]);
                }
            }
        }
        await algodClient.statusAfterBlock(currentround).do();
        currentround++;
    }
    return {error: JSON.stringify(new Error("Transaction " + txId + " not confirmed after " + timeout + " rounds!"))};
};

// createAccount()

export const sendJSR=async (
    desc: string, 
    amount: number, 
    assetIndex: number, 
    receiver: string, 
    sender:string, 
    mnemonic: string
    )=>{
    
    const addrr = receiver.split('//')
    
    let stripped = addrr.length > 1?addrr[1]:addrr[0]

    try{
        let accountInfo = await algodClient.accountInformation(sender).do();
        
        let startingAmount = accountInfo.amount;

        console.log(assetIndex)


        let params = await algodClient.getTransactionParams().do();
        // comment out the next two lines to use suggested fee
        
        const enc = new TextEncoder();
        const note = enc.encode(desc);
        

        // algosdk.makeAssetTxn(sender=clawBackAddress, amt=0.1JSR(fee), receiver=feecollect_address),
        
        // and group it with the ```algosdk.makeAssetTxn(sender=accountA, receiver=accountB, amt=providedBySender)
        
        let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
            sender, 
            stripped,
            undefined,  
            clawBackAddress, 
           
            amount, 
            note, 
            67513364, 
            params
            )
        
        
        
        const account = algosdk.mnemonicToSecretKey(mnemonic.trim())

        console.log(addrr)

        // Sign the transaction
        let signedTxn = txn.signTxn(account.sk);
        let txId = txn.txID().toString();

        // Submit the transaction
        await algodClient.sendRawTransaction(signedTxn).do();

        // Wait for confirmation
        let confirmedTxn = await waitForConfirmation(algodClient, txId, 4);       
        accountInfo = await algodClient.accountInformation(sender).do();
        return accountInfo

    }catch(e){
        return e
    }
}

export const recoverAccount=async(mn: string)=>{
    try{
        let account =  algosdk.mnemonicToSecretKey(mn);
        const address = account.addr
        const mnemonic = algosdk.secretKeyToMnemonic(account.sk)
        return {address, mnemonic}
   
    }catch(e){
        console.log(e)
        throw(e)
    }
   
}

export async function optIn(mnemonic: string, assetId: number) {
    try{
        console.log("");
        console.log("==> OPTS IN");
    
        const sk = algosdk.mnemonicToSecretKey(mnemonic).sk
        const addr = algosdk.mnemonicToSecretKey(mnemonic).addr
        
        const params = await algodClient.getTransactionParams().do();
        
    
        const sender = addr;
        const recipient = addr;
        
        
        const amount = 0;
        const note = undefined; // arbitrary data to be stored in the transaction; here, none is stored
        // signing and sending "txn" allows sender to begin accepting asset specified by creator and index
        const opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
            sender, 
            recipient,
            undefined,  
            clawBackAddress,            
            amount, 
            note, 
            67513364, //hardcoded asset id
            params
           );
        
        const rawSignedTxn = opttxn.signTxn(sk);
        const tx = (await algodClient.sendRawTransaction(rawSignedTxn).do());
        const confirmedTxn = await algosdk.waitForConfirmation(algodClient, tx.txId, 4);
      
        return confirmedTxn;
    
    }catch(e){
        return {error: JSON.stringify(e.message)}
    }
    
}



