import React from 'react'
import ReactDOM from 'react-dom/client'

import { MessagesProvider } from 'providers'

import { App } from 'App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MessagesProvider>
      <App />
    </MessagesProvider>
  </React.StrictMode>
)
