import axiosConfig from './http'
import algosdk from 'algosdk'


const algodToken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const algodServer = 'http://172.20.71.80';
const algodPort = 4001;
let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
const mnemonic = 'tell dwarf occur chest case menu scheme hybrid car replace pen mouse punch universe biology volume trust woman orient trend economy visual detail above effort'
let sender = 'DQRHSRZMBFJ6P6SFE54XOTHEDRZOFXHE6LQT3YHAIWKKRYFPAYIGOCE6AY'

export const getAccountInfo = async()=> {
    return await axiosConfig.get({}, 'accounts/DQRHSRZMBFJ6P6SFE54XOTHEDRZOFXHE6LQT3YHAIWKKRYFPAYIGOCE6AY', {})
}

export const getAssetInfo = async(assetId: number)=> {
    return await axiosConfig.get({}, `assets/${assetId}`, {})
}


export const createAccount=()=> {
    try {  
        const myaccount = algosdk.generateAccount();
        let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
        console.log("Account Mnemonic = "+ account_mnemonic);
        console.log(myaccount.sk)
        return myaccount;
    }
    catch (err) {
        console.log("err", err);
    }
}

// (async()=>createAccount())()


export const accountInfo= async (accountAddr: string)=>{
    try{
        
    
        //Check your balance
        let accountInfo = await algodClient.accountInformation(accountAddr).do();
       
        return accountInfo
    }
    catch(e){
        throw e
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

export const sendAsset=async (desc: string, amount: number, assetIndex: number, receiver: string)=>{
        

        let accountInfo = await algodClient.accountInformation(sender).do();
        console.log("Account balance: %d microAlgos", accountInfo.amount);
        let startingAmount = accountInfo.amount;


        let params = await algodClient.getTransactionParams().do();
        // comment out the next two lines to use suggested fee
        
        const enc = new TextEncoder();
        const note = enc.encode(desc);
        
        let closeout = receiver; //closeRemainderTo
        // let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, receiver, undefined, undefined, amount, note, assetIndex, params)
        let txn = algosdk.makePaymentTxnWithSuggestedParams(sender, receiver, amount, undefined, note, params);
        const account = algosdk.mnemonicToSecretKey(mnemonic)

        // Sign the transaction
        let signedTxn = txn.signTxn(account.sk);
        let txId = txn.txID().toString();
        console.log("Signed transaction with txID: %s", txId);

        // Submit the transaction
        await algodClient.sendRawTransaction(signedTxn).do();

        // Wait for confirmation
        let confirmedTxn = await waitForConfirmation(algodClient, txId, 4);       
        console.log("Transaction " + txId + " confirmed in round " + confirmedTxn["confirmed-round"]);        
        var string = new TextDecoder().decode(confirmedTxn.txn.txn.note);
        console.log("Note field: ", string);
        accountInfo = await algodClient.accountInformation(sender).do();
        console.log("Transaction Amount: %d microAlgos", confirmedTxn.txn.txn.amt);        
        console.log("Transaction Fee: %d microAlgos", confirmedTxn.txn.txn.fee);
        let closeoutamt = startingAmount - confirmedTxn.txn.txn.amt - confirmedTxn.txn.txn.fee;        
        console.log("Close To Amount: %d microAlgos", closeoutamt);
        console.log("Account balance: %d microAlgos", accountInfo.amount);
}


// (async()=>await sendAsset('transaction', 10, 58648674))()