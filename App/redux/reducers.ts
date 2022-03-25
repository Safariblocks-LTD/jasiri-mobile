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
    showScanner: true,
    URI: ''
  },
  reducers: {
    setData(state, action: PayloadAction<string | null >) {
      state.data = action.payload || ''
    },
    setShowScanner(state, action: PayloadAction<boolean >) {
      state.showScanner = action.payload
    },
    setURI(state, action: PayloadAction<string >) {
      state.URI = action.payload
    },
  }
})

export const { setData, setShowScanner, setURI } = scannedSlice.actions
export const scanned = scannedSlice


const newAccountSlice = createSlice({
  name: "newAccountSlice",
  initialState: {
    address: '',
    mnemonic: '',
    account: {}
  },
  reducers: {
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload
    },
    setMnemonic(state, action: PayloadAction<string >) {
      state.mnemonic = action.payload
    },
    setAccount(state, action: PayloadAction<any >) {
      state.account = action.payload
    },
  }
})

export const { setAddress, setMnemonic, setAccount } = newAccountSlice.actions
export const newAccount = newAccountSlice

const accountSlice = createSlice({
  name: "accountSlice",
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

const routesSlice = createSlice({
  name: "routesSlice",
  initialState: {
    back: '',
  },
  reducers: {
    setroutes(state, action: PayloadAction<string>) {
      state.back = action.payload
    },
    
  }
})

export const { setroutes } = routesSlice.actions
export const routes = routesSlice


const accountInfoSlice = createSlice({
  name: "routesSlice",
  initialState: {
    info: {},
  },
  reducers: {
    setAccountInfo(state, action: PayloadAction<object>) {
      state.info = action.payload
    },
    
  }
})

export const { setAccountInfo } = accountInfoSlice.actions
export const accountInfo = accountInfoSlice







