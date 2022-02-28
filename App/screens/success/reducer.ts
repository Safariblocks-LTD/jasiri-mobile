import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const successMessageSlice = createSlice({
    name: "successMessageSlice",
    initialState: {
      message: '',
    },
    reducers: {
      setErrorMessage(state, action: PayloadAction<string>) {
        state.message = action.payload
      },
      
    }
  })
  
  export const { setErrorMessage } = successMessageSlice.actions
  export const error = successMessageSlice