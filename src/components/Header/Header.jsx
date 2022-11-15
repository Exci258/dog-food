import React from 'react';
import Logo from './Logo';
import { BsHeart, BsCart2 } from 'react-icons/bs';
import ProfileIcon from './ProfileIcon';

const Header = ({ query, setQuery }) => {
    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className='bg-[#ffe44d]'>
            <header className='container mx-auto flex justify-between items-center py-4'>
                <a href='/'>
                    <Logo />
                </a>
                <input
                    value={query}
                    onChange={handleQuery}
                    type='search'
                    className='w-1/2 rounded-3xl outline-none border-none py-2 px-3 hidden lg:block md:block sm:block'
                    placeholder='Поиск'
                />
                <nav className='flex gap-5 items-center'>
                    <BsHeart size={24} />
                    <BsCart2 size={24} />
                    <ProfileIcon />
                </nav>
            </header>
        </div>
    );
};

export default Header;
