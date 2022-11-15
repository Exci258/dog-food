import React from 'react';
import Logo from './Logo';
import { BsWhatsapp, BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#ffe44d]'>
            <footer className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center justify-items-center py-8 gap-3'>
                <div className='flex flex-col justify-between'>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <span className='text-sm'>
                        &copy;{new Date().getFullYear()} Интернет-магазин DogFood.ru
                    </span>
                </div>
                <div className='flex flex-col  gap-2'>
                    <Link to={'/catalog'} className='hover:underline'>
                        Каталог
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Акции
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Новости
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Отзывы
                    </Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link to={'/'} className='hover:underline'>
                        Оплата и доставка
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Часто спрашивают
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Обратная связь
                    </Link>
                    <Link to={'/'} className='hover:underline'>
                        Контакты
                    </Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-xl'>Мы на связи</h4>
                    <a href='tel:+7999000000' className='font-bold text-md'>
                        8 (999) 00-00-00
                    </a>
                    <a href='mailto:dogfood.ru@gmail.com'>dogfood.ru@gmail.com</a>
                    <div className='flex gap-2 mt-2'>
                        <a href='/'>
                            <BsTelegram size={25} />
                        </a>
                        <a href='/'>
                            <BsWhatsapp size={25} />
                        </a>
                        <a href='/'>
                            <FaViber size={25} />
                        </a>
                        <a href='/'>
                            <BsInstagram size={25} />
                        </a>
                        <a href='/'>
                            <BsFacebook size={25} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
