import React from 'react';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
        </div>
    );
};

export default HomeLayout;