import React, { useState, useEffect } from 'react';

import useCartApi from '../../ContextApi/useCartApi';

const Cart = () => {

    const [products, setProduct] = useState([]);
    const { cart, setCart } = useCartApi();

    const [food, setFood] = useState([]);
    // console.log(cart.items);



    useEffect(() => {
        if (!cart?.items) {
            return;
        }

        fetch('https://mysterious-badlands-68709.herokuapp.com/pizza/cart', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.log(error.message)
            })

    }, [cart])


    const quantity = (productId) => {
        return cart.items[productId];
    }

    const increment = (productId) => {
        const existQut = cart.items[productId];
        const _cart = { ...cart };
        _cart.items[productId] = existQut + 1;
        _cart.totalItems += 1;
        setCart(_cart);
    }

    const decrement = (productId) => {
        const existQut = cart.items[productId];
        if (existQut === 1) {
            return;
        }
        const _cart = { ...cart };
        _cart.items[productId] = existQut - 1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }

    let total = 0;

    const sum = (productId, price) => {
        const sumation = price * quantity(productId);
        total += sumation;
        return sumation;

    }

    const handleDelete = (productId) => {
        const _cart = { ...cart };
        const qut = _cart.items[productId];
        delete _cart.items[productId];
        _cart.totalItems -= qut;
        setCart(_cart);
        setProduct(products.filter(product => product._id !== productId))

    }

    const handleOrder = () => {
        alert("Order successfully");
        setProduct([]);
        setCart({});
    }

    return (
        products.length ?
            <div>
                <div className="container mx-auto lg:w-1/2 w-full pb-24">
                    <h1 className="my-12 font-bold">Cart items</h1>
                    <ul>
                        {

                            products.map(product => {
                                return (
                                    <li key={product._id} className="mb-12">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img className="h-16" src={product.image} alt="" />
                                                <span className="font-bold ml-4 w-48">{product.name}</span>
                                            </div>
                                            <div>
                                                <button onClick={() => decrement(product._id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                                                <b className="px-4"> {quantity(product._id)}</b>
                                                <button onClick={() => increment(product._id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                                            </div>
                                            <span>₹ {sum(product._id, product.price)}</span>
                                            <button onClick={() => handleDelete(product._id)} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <hr className="my-6" />
                    <div className="text-right">
                        <b>Grand Total:</b> ₹{total}
                    </div>
                    <div className="text-right mt-6">
                        <button onClick={() => handleOrder()} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
                    </div>
                </div>
            </div>
            :
            <img src="/images/empty-cart.png" className='mt-10 mb-5 w-1/2 mx-auto' alt="" />
    );
};

export default Cart;