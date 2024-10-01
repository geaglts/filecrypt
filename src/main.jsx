import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from '@pages/Home'
import Fileshare from '@pages/Fileshare'
import { store } from '@redux/store'

import '@styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fs" element={<Fileshare />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
