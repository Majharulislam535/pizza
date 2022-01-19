import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

import useCartApi from '../../ContextApi/useCartApi';

const Navigation = () => {

    const { cart } = useCartApi();
    return (
        <div>
            <nav className='lg:container md:container lg:mx-auto md:mx-auto w-11/12  mx-auto  flex items-center py-4 justify-between'>
                <div>
                    <NavLink className='active' to='/'>
                        <img style={{ height: 45 }} src="/images/logo.png" alt="" />
                    </NavLink>
                </div>
                <div>
                    <ul className='flex items-center'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='ml-6'>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        <li className='ml-6'>
                            <NavLink to="/cart" >
                                <div className='bg-yellow-500 flex px-2 py-1 rounded-full'>
                                    <span className='font-bold text-black'>{cart?.totalItems ? cart?.totalItems : "0"}</span>
                                    <img className='ml-2' src='/images/cart.png' alt='' />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;