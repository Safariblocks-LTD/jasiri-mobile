import { configureStore } from '@reduxjs/toolkit'


import {token, scanned, newAccount, account} from './reducers';






export const store = configureStore({
    reducer: {
        token: token.reducer,
        scanned: scanned.reducer,
        newAccount: newAccount.reducer,
        account: account.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>