import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    { name: 'Budget Friendly', path: '/budget-friendly' },
    { name: 'No.1 in Europe', path: '/no-1-europe' },
    { name: 'On your first order', path: '/first-order' },
    { name: 'For all products buy now get offer', path: '/special-offer' },
    { name: 'User Friendly', path: '/user-friendly' },
    { name: '24/7 Service', path: '/24-7-service' },
];

const Navbar = () => {
    return (
        <div>
            <nav className="px-20 py-4 bg-gradient-to-r from-[#2b286c] to-[#150928] text-white">
                <ul className="flex gap-20 list-disc list-inside">
                    {links.map((link, index) => (
                        <li key={index} className="hover:underline">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

