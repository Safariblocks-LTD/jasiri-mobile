import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Asset } from "../types"

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: {}
    
  },
  reducers: {
    setToken(state, action: PayloadAction<Asset >) {
      state.token = action.payload
    },
    
  }
})

export const { setToken } = tokenSlice.actions
export const token = tokenSlice




const scannedSlice = createSlice({
  name: "scanned",
  initialState: {
    data: '',
  },
  reducers: {
    setData(state, action: PayloadAction<string >) {
      state.data = action.payload
    },
  }
})

export const { setData } = scannedSlice.actions
export const scanned = scannedSlice




