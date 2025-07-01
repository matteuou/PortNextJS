
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <h1>Martini</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#tech-stack">Tech Stack</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

