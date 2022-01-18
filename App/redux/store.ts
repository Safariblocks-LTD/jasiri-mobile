import { configureStore } from '@reduxjs/toolkit'


import {token, scanned} from './reducers';






export const store = configureStore({
    reducer: {
        token: token.reducer,
        scanned: scanned.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>