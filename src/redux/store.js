import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '@redux/reducers/uiSlice'
import fileReducer from '@redux/reducers/fileSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    files: fileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
