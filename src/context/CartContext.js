import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([
    { id: 1, name: 'latte mockup', price: 34, sweet: 50, quantity: 2 },
  ])
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
