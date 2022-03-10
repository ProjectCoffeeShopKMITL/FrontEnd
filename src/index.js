import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.less'
import { NavbarProvider } from './context/NavbarContext'

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
