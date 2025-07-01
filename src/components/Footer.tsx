
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>mateusrmartini@gmail.com | (11) 99942-5287 </p>
                <p>Peace Out.. 👋</p>
            </div>
            <div className="footer-social">
                <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </Link>
                <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

