import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  registered: [],
  toDownload: [],
  selected_action: null,
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
    clearFileToDownload: (state) => {
      state.toDownload = []
    },
    setSelectedAction: (state, action) => {
      state.selected_action = action.payload
    },
  },
})

export const {
  clearFiles,
  setFiles,
  setFileToDownload,
  clearFileToDownload,
  setSelectedAction,
} = fileSlice.actions

export default fileSlice.reducer
