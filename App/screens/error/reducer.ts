import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const errorMessageSlice = createSlice({
    name: "errorMessageSlice",
    initialState: {
      message: '',
    },
    reducers: {
      setErrorMessage(state, action: PayloadAction<string>) {
        state.message = action.payload
      },
      
    }
  })
  
  export const { setErrorMessage } = errorMessageSlice.actions
  export const error = errorMessageSlice