import React from 'react';
import ProductCard from '../components/ProductCard';

const Catalog = ({ products, query }) => {
    return (
        <div className='grow max-w-5xl container mx-auto grid grid-cols-4 my-5'>
            {products
                .filter((product) => {
                    return product.name.toLowerCase().includes(query.toLowerCase());
                })
                .map((product) => {
                    return <ProductCard key={product._id} product={product} />;
                })}
        </div>
    );
};

export default Catalog;
