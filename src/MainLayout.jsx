import React from 'react';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';

const MainLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <BrandMarquee></BrandMarquee>
        </div>
    );
};

export default MainLayout;