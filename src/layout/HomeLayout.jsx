import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;