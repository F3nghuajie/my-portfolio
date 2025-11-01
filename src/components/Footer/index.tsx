import React from 'react';
import { LinkedInIcon, GitHubIcon } from '../icons';

const Footer = () => (
    <footer className="scroll-mt-20 border-t border-solid border-white/10 px-4 py-8 text-center" id="contact">
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            <p className="max-w-lg text-gray-300">I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.</p>
            <a className="text-primary text-lg font-semibold hover:underline" href="mailto:hello@johndoe.com">hello@johndoe.com</a>
            <div className="flex gap-4 pt-2">
                <a aria-label="LinkedIn Profile" className="text-gray-300 hover:text-primary" href="#">
                    <LinkedInIcon className="h-6 w-6"/>
                </a>
                <a aria-label="GitHub Profile" className="text-gray-300 hover:text-primary" href="#">
                    <GitHubIcon className="h-6 w-6" />
                </a>
            </div>
            <p className="text-sm text-gray-500 pt-4">© 2024 Leo Zhang. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
