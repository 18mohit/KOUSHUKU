import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-m7no0kuvdlc1khdc.us.auth0.com"
    clientId="woyPZIl5wObriwa6K9x6zmSeOJPyfp2M"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={Store}>
    <App />
    </Provider>
  </Auth0Provider>
)
