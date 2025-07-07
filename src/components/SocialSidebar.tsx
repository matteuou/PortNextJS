
import Link from 'next/link';
import React from 'react';

const SocialSidebar: React.FC = () => {
    return (
        <aside className="social-sidebar">
            <Link href="https://www.linkedin.com/in/mateus-martini-19128b359/" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="#" target="_blank" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://github.com/matteuou" target="_blank" aria-label="GitHub">
                <i className="fab fa-github"></i>
            </Link>
            <Link href="mailto:mateusrmartini@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
            </Link>
        </aside>
    );
};

export default SocialSidebar;

