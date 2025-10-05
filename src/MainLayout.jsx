import React from 'react';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import OurServices from './components/OurServices';

const MainLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <BrandMarquee></BrandMarquee>
            <OurServices></OurServices>
        </div>
    );
};

export default MainLayout;