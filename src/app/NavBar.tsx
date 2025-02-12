'use client';
import React from 'react';
import Link  from 'next/link';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/">GolfApp</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;