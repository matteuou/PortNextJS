
import Image from 'next/image';
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Get in Touch</h2>
            <p className="section-subtitle">I'd love to hear from you!</p>
            <div className="contact-container">
                <div className="contact-form">
                    {}
                    <form action="https://formspree.io/f/yourformid" method="POST"> {}
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email ID" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows={6} placeholder="Your Message...." required></textarea>
                        </div>
                        <button type="submit" className="btn primary-btn">SUBMIT</button>
                    </form>
                </div>
                <div className="contact-illustration">
                     <Image src="/undraw_personal-text_090t.svg" alt="Developer illustration" width={500} height={400} />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

