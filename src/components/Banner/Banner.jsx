import React from 'react';

const Banner = ({ img }) => {
    return (
        <div className='my-5'>
            <a href='/'>
                <img src={img} alt='Banner' className='rounded-3xl' />
            </a>
        </div>
    );
};

export default Banner;
