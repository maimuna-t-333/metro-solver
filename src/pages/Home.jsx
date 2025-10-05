import React from 'react';
import Navbar_1 from '../Shared/Navbar_1';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className='w-8xl mx-auto '>
            <Navbar></Navbar>
            <Navbar_1></Navbar_1>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;