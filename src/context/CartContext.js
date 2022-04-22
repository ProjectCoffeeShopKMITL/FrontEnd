import { createContext, useContext, useState } from 'react'
import { nanoid } from 'nanoid'

const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([
    // {
    //   __id: nanoid(10),
    //   id: 1,
    //   name: 'latte mockup1',
    //   price: 50,
    //   sweet: '50%',
    //   quantity: 2,
    //   totalPrice: 100,
    //   note: 'testttt',
    // },
    // {
    //   __id: nanoid(10),
    //   id: 2,
    //   name: 'latte mockup2',
    //   price: 50,
    //   sweet: '50%',
    //   quantity: 2,
    //   totalPrice: 100,
    //   note: 'testttt',
    // },
    // {
    //   __id: nanoid(10),
    //   id: 3,
    //   name: 'latte mockup3',
    //   price: 50,
    //   sweet: '50%',
    //   quantity: 2,
    //   totalPrice: 100,
    //   note: 'testttt',
    // },
    // {
    //   __id: nanoid(10),
    //   id: 4,
    //   name: 'latte mockup4',
    //   price: 50,
    //   sweet: '50%',
    //   quantity: 2,
    //   totalPrice: 100,
    //   note: 'testttt',
    // },
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
