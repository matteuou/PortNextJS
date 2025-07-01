
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-text">
                <p>Hello,</p>
                <h1>My name is <span className="highlight">Mateus Martini</span></h1>
                <h2>I develop things for web!</h2>
                <Link href="#contact" className="btn primary-btn">CONTACT ME</Link>
            </div>
            <div className="hero-image">
                <Image src="/undraw_hello_ccwj.svg" alt="Developer illustration" width={500} height={400} />
            </div>
        </section>
    );
};

export default HeroSection;

