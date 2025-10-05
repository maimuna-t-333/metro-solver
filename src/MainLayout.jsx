import React from 'react';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import OurServices from './components/OurServices';
import LatestWork from './components/LatestWork';
import WhyChooseUs from './components/WhyChooseUs';

const MainLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <BrandMarquee></BrandMarquee>
            <OurServices></OurServices>
            <LatestWork></LatestWork>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default MainLayout;