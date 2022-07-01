import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  registered: [],
  toDownload: [],
}

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.registered = action.payload
    },
    clearFiles: (state) => {
      state.registered = []
    },
    setFileToDownload: (state, action) => {
      state.toDownload = [...state.toDownload, action.payload]
    },
  },
})

export const { clearFiles, setFiles } = fileSlice.actions

export default fileSlice.reducer
