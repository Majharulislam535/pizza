import React, { createContext, useEffect, useState } from 'react';

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

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default ContextApi;