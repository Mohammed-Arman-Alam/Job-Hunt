import React from 'react';
import heroimg from '../assets/hero-img.png'

const HeroSection = () => {
    return (
        <div
      className="bg-base-100 my-8 rounded-2xl relative bg-cover bg-center bg-[url('https://i.ibb.co.com/B5ft40s0/bg-img.png')]">
      <div className='py-18 p-5 sm:pl-20'>
        <div className='z-10'>
            <h1 className='text-5xl font-bold sm:pt-10 text-center sm:text-start'>Find Your Dream <br />Job With JobHunt
            </h1>
            <p className='sm:w-2/3 py-4 text-[#00000060] font-semibold text-center sm:text-start'>Looking for your next opportunity? JobHunt connects skilled professionals with thousands of companies worldwide. Register today and discover jobs that truly match your skills and passion.
            </p>
            <form className='sm:w-1/2 flex '>
                <input type="text" className="input border-[#87CEFF]" placeholder="Search for job"/><button type='submit' className="btn bg-[#87CEFF] font-bold text-white text-lg border-[#87CEFF]">Search</button>
            </form>
            
        </div>
        <img
          src={heroimg}
          alt="Hero"
          className="absolute -right-20 -bottom-6 w-[500px] hidden sm:inline"
        />
      </div>
    </div>
    );
};

export default HeroSection;