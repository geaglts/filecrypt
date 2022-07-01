import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { clearError, setError, toggleLoading } = uiSlice.actions

export default uiSlice.reducer
