
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>mateusrmartini@gmail.com | (11) 99942-5287 </p>
                <p>Se você quer saber mais sobre mim ou meu trabalho, ou se gostaria apenas de dizer olá, sinta-se à vontade para enviar uma mensagem. Adoraria ouvir de você.</p>
            </div>
            <div className="footer-social">
                <Link href="https://github.com/matteuou" target="_blank" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/mateus-martini-19128b359/" target="_blank" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </Link>
                <Link href="#" target="_blank" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

