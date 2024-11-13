import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RegistrationInfo from './RegistrationInfo.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RegistrationInfo />
    </Provider>
  </StrictMode>,
)
