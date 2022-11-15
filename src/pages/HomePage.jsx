import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import BannerLogo from '../img/Banner.png';
import ProductsList from '../components/ProductsList';
import Advertising from '../components/Advertising/Advertising';
import AdvertisingLeft from '../img/Advertising-1.png';
import AdvertisingRight from '../img/Advertising-2.png';
import AdvertisingLeftSecond from '../img/Advertising-3.png';
import AdvertisingRightSecond from '../img/Advertising-4.png';

const HomePage = ({ products, query }) => {
    return (
        <>
            <Hero />
            <div className='grow max-w-5xl container mx-auto'>
                <Banner img={BannerLogo} />
                <ProductsList title='Хиты' products={products} query={query} />
                <Advertising imgLeft={AdvertisingLeft} imgRight={AdvertisingRight} />
                <ProductsList title='Лакомства' products={products} query={query} />
                <Advertising imgLeft={AdvertisingLeftSecond} imgRight={AdvertisingRightSecond} />
                <ProductsList products={products} title='Вкусное' query={query} />
                <Banner img={BannerLogo} />
            </div>
        </>
    );
};

export default HomePage;
