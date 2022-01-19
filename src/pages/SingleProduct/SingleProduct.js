import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    const url = `https://mysterious-badlands-68709.herokuapp.com/pizza/${id}`

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })

    }, [product._id])


    return (
        <div>
            <div className='container mx-auto mt-12'>
                <button onClick={() => navigate(-1)} className='text-lg font-bold mb-12'>Beck</button>
                <div className='flex'>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='ml-8'>
                        <h1 className='text-2xl mb-2 font-bold'>{product.name}</h1>
                        <p className='mb-2'>{product.size}</p>
                        <h2 className='text-lg font-bold'><i className="fas fa-lira-sign"></i>{product.price}</h2>
                        <button className='font-bold bg-yellow-500 mt-4 hover:bg-yellow-600 py-1 px-8 rounded-full'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;