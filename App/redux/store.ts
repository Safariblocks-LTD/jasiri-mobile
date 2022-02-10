import { configureStore } from '@reduxjs/toolkit'


import {token, scanned, newAccount} from './reducers';






export const store = configureStore({
    reducer: {
        token: token.reducer,
        scanned: scanned.reducer,
        newAccount: newAccount.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>