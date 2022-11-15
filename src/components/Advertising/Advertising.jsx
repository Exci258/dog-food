import React from 'react';

const Advertising = ({ imgLeft, imgRight }) => {
    return (
        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-rowgap-5 my-5 gap-2 items-center'>
            <a href='/'>
                <img src={imgLeft} alt='Advertising' className='rounded-3xl' />
            </a>
            <a href='/'>
                <img src={imgRight} alt='Advertising' className='rounded-3xl' />
            </a>
        </div>
    );
};

export default Advertising;
