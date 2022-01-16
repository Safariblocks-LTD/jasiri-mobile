import { configureStore } from '@reduxjs/toolkit'


import {token} from './reducers';






export const store = configureStore({
    reducer: {
        token: token.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>