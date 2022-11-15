import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Api from './api/Api';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Catalog from './pages/Catalog';
import HomePage from './pages/HomePage';

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
            <Routes>
                <Route path='/' element={<HomePage products={products} query={query} />} />
                <Route path='/catalog' element={<Catalog products={products} query={query} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
