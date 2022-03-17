import { configureStore } from '@reduxjs/toolkit'


import {token, scanned, newAccount, account
,walletConnectScanner,
walletConnectURI, error, success,
routes, accountInfo
} from './reducers';







export const store = configureStore({
    reducer: {
        token: token.reducer,
        scanned: scanned.reducer,
        newAccount: newAccount.reducer,
        account: account.reducer,
        error: error.reducer,
        walletConnectScanner: walletConnectScanner.reducer,
        walletConnectURI: walletConnectURI.reducer,
        success: success.reducer,
        routes: routes.reducer,
        accountInfo: accountInfo.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>