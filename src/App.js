import React, { useState, useEffect } from 'react';
import Api from './api/Api';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductsList from './components/ProductsList';
import BannerLogo from '../src/img/Banner.png';
import Advertising from './components/Advertising/Advertising';
import AdvertisingLeft from '../src/img/Advertising-1.png';
import AdvertisingRight from '../src/img/Advertising-2.png';
import AdvertisingLeftSecond from '../src/img/Advertising-3.png';
import AdvertisingRightSecond from '../src/img/Advertising-4.png';

function App() {
    const [products, setProducts] = useState([]);

    const [query, setQuery] = useState('');

    useEffect(() => {
        const api = new Api(process.env.REACT_APP_TOKEN);
        api.getProducts()
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    return (
        <div className='flex flex-col min-h-screen'>
            <Header query={query} setQuery={setQuery} />
            <Hero />
            <div className='grow max-w-5xl container mx-auto'>
                <Banner img={BannerLogo} />
                <ProductsList products={products} title='Хиты' query={query} />
                <Advertising imgLeft={AdvertisingLeft} imgRight={AdvertisingRight} />
                <ProductsList products={products} title='Лакомства' query={query} />
                <Advertising imgLeft={AdvertisingLeftSecond} imgRight={AdvertisingRightSecond} />
                <ProductsList products={products} title='Вкусное' query={query} />
                <Banner img={BannerLogo} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
