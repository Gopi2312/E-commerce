import React from 'react'
import { createContext,useState,useMemo } from 'react';

export const UserContext = createContext();

const Provider = (props) => {
    const [cartItems, setCartItems] = useState('');
    const [selectedSize, setSelectedSize] = useState([]);
    const value = useMemo(() => ({
        selectedSize, setSelectedSize, cartItems, setCartItems
      }), [selectedSize, cartItems])

  return (
    <UserContext.Provider value={value}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Provider;
