import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from '@pages/Home'
import { store } from '@redux/store'

import '@styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
