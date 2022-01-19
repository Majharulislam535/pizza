import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCartApi from '../../ContextApi/useCartApi';

const Product = (props) => {
    const { product } = props;
    const { image, size, price, name, _id } = props.product;
    const [isAdding, setAdding] = useState(false);
    const { cart, setCart } = useCartApi();

    const addToCart = (e, product) => {
        e.preventDefault();
        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {};
        }

        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        }
        else {
            _cart.items[product._id] = 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }

        _cart.totalItems += 1;
        setCart(_cart);

        setAdding(true);

        setTimeout(() => {
            setAdding(false);
        }, 1000)

    }


    return (
        <>
            <Link to={`/products/${_id}`}>
                <div>
                    <img className='mx-auto' src={image} alt="" />
                    <div className="text-center">
                        <h2 className="text-lg font-bold py-2">{name}</h2>
                        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{size}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className='text-lg'><i className="fas fa-lira-sign"></i>{price}</span>
                        <button disabled={isAdding} onClick={(e) => addToCart(e, product)} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} bg-yellow-500 py-1 px-4 rounded-full font-bold`} >ADD{isAdding ? "ED" : ""}</button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Product;