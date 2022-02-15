import { configureStore } from '@reduxjs/toolkit'


import {token, scanned, newAccount, account} from './reducers';
import { error } from '../screens/error/reducer';






export const store = configureStore({
    reducer: {
        token: token.reducer,
        scanned: scanned.reducer,
        newAccount: newAccount.reducer,
        account: account.reducer,
        error: error.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>