
import Image from 'next/image';
import React from 'react';

const TechStackSection: React.FC = () => {
    const techIcons = [
        { src: '/icons/html5-original.svg', alt: 'HTML5' },
        { src: '/icons/css3-original.svg', alt: 'CSS3' },
        { src: '/icons/javascript-original.svg', alt: 'JavaScript' },
        { src: '/icons/typescript-original.svg', alt: 'TypeScript' },
                 { src: '/icons/tailwindcss-original.svg', alt: 'Tailwindcss' },
        { src: '/icons/nodejs-original.svg', alt: 'Node JS' },
        { src: '/icons/python-original.svg', alt: 'Python' },
        { src: '/icons/java-original.svg', alt: 'Java' },
         { src: '/icons/spring-original.svg', alt: 'Spring' },
        { src: '/icons/docker-original.svg', alt: 'Docker' },
        { src: '/icons/mongodb-original.svg', alt: 'MongoDB' },
         { src: '/icons/selenium-original.svg', alt: 'Selenium' },
        
    ];

    return (
        <section id="tech-stack" className="tech-stack-section">
            <h2>My Tech Stack</h2>
            <p className="section-subtitle">Technologies I've been working with currently</p>
            <div className="tech-icons">
                {techIcons.map((tech, index) => (
                    <Image key={index} src={tech.src} alt={tech.alt} width={80} height={80} />
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;