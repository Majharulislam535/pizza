import React from 'react';
import Hero from '../../components/HeroSection/Hero';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Products />
            <Footer></Footer>
        </>
    );
};

export default Home;