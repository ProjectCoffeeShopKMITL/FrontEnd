import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
