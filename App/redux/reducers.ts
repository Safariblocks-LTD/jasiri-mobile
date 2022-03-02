import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Asset } from "../types"

const tokenSlice = createSlice({
  name: "ttokenSliceoken",
  initialState: {
    token: {
      amount: 0,
      unitName: ''
    }
    
  },
  reducers: {
    setToken(state, action: PayloadAction<any>) {
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
      state.data = action.payload || ''
    },
    setShowScanner(state, action: PayloadAction<boolean >) {
      state.showScanner = action.payload
    },
  }
})

export const { setData, setShowScanner } = scannedSlice.actions
export const scanned = scannedSlice


const newAccountSlice = createSlice({
  name: "scanned",
  initialState: {
    address: '',
    mnemonic: ''
  },
  reducers: {
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload
    },
    setMnemonic(state, action: PayloadAction<string >) {
      state.mnemonic = action.payload
    },
  }
})

export const { setAddress, setMnemonic } = newAccountSlice.actions
export const newAccount = newAccountSlice

const accountSlice = createSlice({
  name: "account",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload
    },
    
  }
})

export const { setIsLoggedIn } = accountSlice.actions
export const account = accountSlice


const walletConnectScannerSlice = createSlice({
  name: "walletConnectScanner",
  initialState: {
    walletConnect: false,
  },
  reducers: {
    setWalletConnect(state, action: PayloadAction<boolean>) {
      state.walletConnect = action.payload
    },
    
  }
})

export const { setWalletConnect } = walletConnectScannerSlice.actions
export const walletConnectScanner = walletConnectScannerSlice


const walletConnectURISlice = createSlice({
  name: "walletConnectURI",
  initialState: {
    URI: '',
  },
  reducers: {
    setWalletConnectURI(state, action: PayloadAction<string>) {
      state.URI = action.payload
    },
    
  }
})

export const { setWalletConnectURI } = walletConnectURISlice.actions
export const walletConnectURI = walletConnectURISlice


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


const successMessageSlice = createSlice({
  name: "errorMessageSlice",
  initialState: {
    message: '',
  },
  reducers: {
    setSuccessMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
    },
    
  }
})

export const { setSuccessMessage } = successMessageSlice.actions
export const success = successMessageSlice





