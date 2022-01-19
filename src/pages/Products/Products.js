import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import useCartApi from '../../ContextApi/useCartApi';

const Products = () => {

    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch("https://mysterious-badlands-68709.herokuapp.com/pizza")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])



    return (
        <div>
            <div className='lg:container md:container w-11/12 mx-auto pb-24'>
                <h1 className="text-lg font-bold my-8">Products</h1>
                <div className="grid lg:grid-cols-5 md:gird-cols-3 gird-cols-1 my-8 gap-24">
                    {
                        food.map(fd => <Product key={fd._id} product={fd}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;