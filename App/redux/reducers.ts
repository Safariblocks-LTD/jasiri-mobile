import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Asset } from "../types"

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: {
      amount: 0,
      "asset-id": 0,
      "creator": '',
      "deleted": false,
      "is-frozen": true,
      "opted-in-at-round": 0,
      unitName: ''
    }
    
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
    showScanner: true
  },
  reducers: {
    setData(state, action: PayloadAction<string | null >) {
      state.data = action.payload
    },
    setShowScanner(state, action: PayloadAction<boolean >) {
      state.showScanner = action.payload
    },
  }
})

export const { setData, setShowScanner } = scannedSlice.actions
export const scanned = scannedSlice




