import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'


import {token, scanned, newAccount, account
,walletConnectScanner,
walletConnectURI, error, success,
routes, accountInfo,
assetInfo, activeAsset
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
        accountInfo: accountInfo.reducer,
        assetInfo: assetInfo.reducer,
        activeAsset: activeAsset.reducer
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
      
    
})



export type RootState = ReturnType<typeof store.getState>