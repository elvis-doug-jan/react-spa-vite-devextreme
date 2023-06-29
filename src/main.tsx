import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import '@utils/extensions'

import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import i18n from './i18n'
import { persistor, store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
