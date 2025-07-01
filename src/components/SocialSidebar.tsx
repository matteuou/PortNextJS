
import Link from 'next/link';
import React from 'react';

const SocialSidebar: React.FC = () => {
    return (
        <aside className="social-sidebar">
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
                <i className="fab fa-github"></i>
            </Link>
            <Link href="mailto:youremail@example.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
            </Link>
        </aside>
    );
};

export default SocialSidebar;

