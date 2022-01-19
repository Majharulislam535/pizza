import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className='lg:container md:container w-11/12 mx-auto flex justify-between items-center' >
                <div className='lg:w-1/2 md:w-1/2 w-full '>
                    <h6 className='lg:text-3xl md:text-3xl text-xl'><em>Are you hungry ?</em></h6>
                    <h1 className='lg:text-6xl md:text-6xl font-bold text-3xl'>Don't wait !</h1>
                    <Link to='/products'>
                        <button className='text-white bg-yellow-500 hover:bg-yellow-600 rounded-full mt-4 px-4 py-1'>Order Now</button>
                    </Link>
                </div>
                <div className='lg:w-1/2 md:w-1/2 w-full '>
                    <img className='w-fit' src="/images/pizza.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;