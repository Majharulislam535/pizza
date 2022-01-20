import React from 'react';


const Footer = () => {
    return (
        <>
            <div className="bg-slate-700 mt-16 p-4">
                <div className='w-4/5 mx-auto'>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4 ">
                        <div>
                            <img src='/images/footer.png' width="300px" alt="" />
                        </div>
                        <div></div>
                        <div>
                            <a href='#' className='text-white hover:text-yellow-500 '>About online Food</a><br />
                            <a href='#' className='text-white hover:text-yellow-500 '>Read Our Blog</a><br />
                            <a href='#' className='text-white hover:text-yellow-500 '>Sign Up to delivery</a><br />
                            <a href='#' className='text-white hover:text-yellow-500 '>About your Restaurant</a>
                        </div>
                        <div>
                            <a href='#' className='text-white hover:text-yellow-500 '>Get Help</a><br />
                            <a href='#' className='text-white hover:text-yellow-500 '>Read FAQ</a><br />
                            <a href='#' className='text-white hover:text-yellow-500 '>View All cities</a><br />
                            <a href='#' className='text-white hover:text-yellow-500 '>Restaurant near me</a>
                        </div>
                    </div>
                    <div className='flex justify-between mt-16'>
                        <p className='text-sm text-gray-500'>Copyright © 2020 Online Food</p>
                        <div className='flex justify-around'>
                            <a href='#' className='mx-2 text-white hover:text-yellow-500'>Privacy Policy</a>
                            <a href='#' className='mx-2 text-white hover:text-yellow-500'>Terms of Use</a>
                            <a href='#' className='mx-2 text-white hover:text-yellow-500'>Pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;