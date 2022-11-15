import React from 'react';
import { BsHeart } from 'react-icons/bs';

const ProductCard = ({ product }) => {
    const imgStyle = {
        backgroundImage: `url(${product.pictures})`,
    };

    return (
        <div className='flex flex-col relative justify-between p-3 rounded-xl w-64 h-80'>
            <div className='h-32 bg-no-repeat bg-center bg-contain' style={imgStyle}></div>
            <div>
                <div className='font-bold text-xl'>
                    {product.discount ? (
                        <div>
                            <span className='line-through decoration-red-600'>{product.price}</span>
                            &#8381;
                            <span className='pl-2'>
                                {Math.floor(
                                    product.price - product.price * (product.discount / 100)
                                )}
                                &#8381;
                            </span>
                        </div>
                    ) : (
                        <span>{product.price}&#8381;</span>
                    )}
                </div>
                <div className='text-md text-slate-400'>{product.wight}</div>
                <div className='font-semibold text-md'>{product.name}</div>
                {product.discount ? (
                    <div className='absolute top-1 left-1 bg-red-500 text-white font-bold  px-3 rounded-2xl'>
                        -{product.discount}%
                    </div>
                ) : null}
                <div className='absolute top-1 right-1'>
                    <button>
                        <BsHeart size={25} fill='grey' />
                    </button>
                </div>
            </div>
            <div>
                <button className='bg-[#ffe44d] py-2 px-4 mt-4 font-bold rounded-3xl'>
                    В корзину
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
