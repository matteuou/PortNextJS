// src/components/AboutSection.tsx
import Link from 'next/link';
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                   Hi, I'm Mateus Martini, a passionate full stack developer from Brazil, São Paulo. I'm currently in my final year studying Computer Science <span className="highlight">Fatec Jundiaí, São Paulo</span>. Over the past 2 years, I've immersed myself in web
                    development, gaining solid proficiency in <span className="highlight">HTML, CSS, JavaScript, React.js, Python and Java</span>. I enjoy crafting seamless user experiences as much as I enjoy building efficient and scalable back-end systems. I’ve worked on multiple personal projects that reflect my interest in creating complete, user-focused applications. I’m always eager to learn and grow, and I look forward to contributing to impactful projects in the future.
                    to apply my skills to new opportunities in the future.
                </p>
                
                <Link href="#contact" className="btn primary-btn">CONTACT</Link>
            </div>
        </section>
    );
};

export default AboutSection;
