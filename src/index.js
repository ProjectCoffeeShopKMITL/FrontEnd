import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.less'
import { NavbarProvider } from './context/NavbarContext'
import { CartProvider } from './context/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
