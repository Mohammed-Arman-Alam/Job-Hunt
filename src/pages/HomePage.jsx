import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import CompaniesSection from '../components/Companies';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <HowItWorks></HowItWorks>
            <CompaniesSection></CompaniesSection>
        </div>
    );
};

export default HomePage;