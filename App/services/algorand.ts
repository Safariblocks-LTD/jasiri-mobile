import axiosConfig from './http'
import algosdk from 'algosdk'

const algodToken = {
    'X-API-Key': '7ghDyOxiGX2spbgEoIHJ04hsn8ZClPuy6SY6d0ri'
}

const algodServer = 'https://testnet-algorand.api.purestake.io/ps2';



// client
const algodPort = '';
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);


export const createAccount=()=> {
    try {  
        const myaccount = algosdk.generateAccount();
        
        const addr = myaccount.addr
        const mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk)

        return {address: addr, mnemonic};
    }
    catch (err) {
        
        console.log("err", err);
        return({error: err})
    }
}

// (async()=>createAccount())()


export const accountInfo= async (accountAddr: string)=>{
    try{
        let accountInfo = await algodClient.accountInformation(accountAddr).do();
        return accountInfo
    }
    catch(e){
        return({error: e})
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
    throw new Error("Transaction " + txId + " not confirmed after " + timeout + " rounds!");
};

// createAccount()

export const sendAsset=async (
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


        let params = await algodClient.getTransactionParams().do();
        // comment out the next two lines to use suggested fee
        
        const enc = new TextEncoder();
        const note = enc.encode(desc);
        
        let closeout = stripped; //closeRemainderTo
        let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, stripped, undefined, undefined, amount, note, assetIndex, params)
        // let txn = algosdk.makePaymentTxnWithSuggestedParams(sender, receiver, amount, undefined, note, params);
        const account = algosdk.mnemonicToSecretKey(mnemonic)

        // Sign the transaction
        let signedTxn = txn.signTxn(account.sk);
        let txId = txn.txID().toString();

        // Submit the transaction
        await algodClient.sendRawTransaction(signedTxn).do();

        // Wait for confirmation
        let confirmedTxn = await waitForConfirmation(algodClient, txId, 4);       
        var string = new TextDecoder().decode(confirmedTxn.txn.txn.note);
        accountInfo = await algodClient.accountInformation(sender).do();
        let closeoutamt = startingAmount - confirmedTxn.txn.txn.amt - confirmedTxn.txn.txn.fee;        
        return 0

    }catch(e){
        console.log(e)
        return({error: e})
    }
        

      
}


// (async()=>await sendAsset('transaction', 10, 58648674))()