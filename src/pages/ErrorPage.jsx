import React from 'react';
import errorimg from './../assets/error.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='my-10'>
            <img className='mx-auto' src={errorimg} alt="Error404" />
            <h1 className="text-4xl text-center mt-8 mb-4  font-bold">Error(404)</h1>
            <div className='text-center font-semibold text-[#00000050]'>we can’t find the page you’re looking for</div>
            <div className='text-center font-bold'>Click link below </div>
            <div className='text-center my-4'>
                <Link to ='/' className='text-2xl font-bold text-[#87CEEF]'>home</Link>
            </div> 
        </div>
    );
};

export default ErrorPage;