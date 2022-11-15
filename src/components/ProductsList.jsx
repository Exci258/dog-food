import React from 'react';
import ProductCard from './ProductCard';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },

    { width: 900, itemsToShow: 4 },
];

const ProductsList = ({ products, title, query }) => {
    return (
        <div className='relative mt-5'>
            <h2 className='font-extrabold text-2xl mb-2'>{title}</h2>
            <Carousel
                itemsToShow={4}
                itemsToScroll={4}
                pagination={false}
                breakPoints={breakPoints}
            >
                {products
                    .filter((product) => {
                        return product.name.toLowerCase().includes(query.toLowerCase());
                    })
                    .map((product) => {
                        return <ProductCard key={product._id} product={product} />;
                    })}
            </Carousel>
        </div>
    );
};

export default ProductsList;
