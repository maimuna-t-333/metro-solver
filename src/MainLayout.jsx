import React from 'react';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import OurServices from './components/OurServices';
import LatestWork from './components/LatestWork';
import WhyChooseUs from './components/WhyChooseUs';
import VideoSection from './components/VideoSection';
import HowItWorks from './components/HowItWorks';
import StatsSection from './components/StatsSection';
import ReviewSection from './components/ReviewSection';
import SuccessStories from './components/SuccessStories';
import PodcastSection from './components/PodcastSection';

const MainLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <BrandMarquee></BrandMarquee>
            <OurServices></OurServices>
            <LatestWork></LatestWork>
            <WhyChooseUs></WhyChooseUs>
            <VideoSection></VideoSection>
            <HowItWorks></HowItWorks>
            <StatsSection></StatsSection>
            <ReviewSection></ReviewSection>
            <SuccessStories></SuccessStories>
            <PodcastSection></PodcastSection>
        </div>
    );
};

export default MainLayout;