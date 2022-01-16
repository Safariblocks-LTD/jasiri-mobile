import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: {amount: '', unitName: ''},
    visible: {visible: false}
  },
  reducers: {
    setToken(state, action: PayloadAction<{amount: string, unitName: string} >) {
      state.token = action.payload
    },
    setVisible(state, action: PayloadAction<{visible: boolean} >) {
      state.visible = action.payload
    },
  }
})

export const { setToken, setVisible } = tokenSlice.actions
export const token = tokenSlice


