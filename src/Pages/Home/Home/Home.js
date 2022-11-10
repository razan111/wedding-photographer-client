import React from 'react';
import Carusel from '../Carusel/Carusel';
import Gallery from '../Gallery/Gallery';
import HomeService from '../HomeService/HomeService';
import Rate from './Rate';

const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <h2 className='my-6 text-5xl font-bold text-center'>This is our Service</h2>
            <HomeService></HomeService>
            <Gallery></Gallery>
            <Rate></Rate>
        </div>
    );
};

export default Home;