import { combineReducers, configureStore } from '@reduxjs/toolkit'


import {action} from './reducers'



const rootReducer = combineReducers({action})


export const store = configureStore({
    reducer: rootReducer
})



export type RootState = ReturnType<typeof store.getState>