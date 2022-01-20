import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../Firebase/useFirebase';

export const CartContext = createContext();

const ContextApi = ({ children }) => {

    const [cart, setCart] = useState({});

    useEffect(() => {
        const cart = window.localStorage.getItem("cart");
        setCart(JSON.parse(cart))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const firebase = useFirebase();

    return (
        <CartContext.Provider value={{ cart, setCart, firebase }}>
            {children}
        </CartContext.Provider>
    );
};

export default ContextApi;