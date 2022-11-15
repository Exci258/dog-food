import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

const Hero = () => {
    return (
        <section className='bg-[#ffe44d] pt-10'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-col content-start gap-6'>
                    <h1 className='font-extrabold text-5xl'>
                        Крафтовые
                        <br />
                        лакомства для
                        <br />
                        собак
                    </h1>
                    <p className='text-xl'>
                        Всегда свежие лакомства ручной
                        <br />
                        работы с доставкой по России и Миру
                    </p>
                </div>
                <Link to={'/catalog'}>
                    <button className='bg-white py-3 px-5 my-10 rounded-full text-lg font-bold shadow-xl hover:scale-105 flex items-center gap-4'>
                        Каталог <MdArrowForwardIos />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
