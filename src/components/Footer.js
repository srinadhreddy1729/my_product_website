import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold border-b-2 border-indigo-500 pb-2 mb-2">Contact Us</h3>
                        <p>Email: <a href="mailto:info@example.com" className="text-indigo-400 hover:underline">pvenkatasrinadhreddy@gmail.com</a></p>
                        <p>Phone: <a href="tel:+11234567890" className="text-indigo-400 hover:underline">+91 6304594290</a></p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold border-b-2 border-indigo-500 pb-2 mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition"><FaFacebookF /></a>
                            <a href="https://github.com/srinadhreddy1729" className="text-gray-400 hover:text-indigo-400 transition"><FaGithub /></a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/syntax_hacker?igsh=Z2d4YXd2ZXp2eDNt
" className="text-gray-400 hover:text-indigo-400 transition"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-center md:text-right text-sm">© 2024 syntax hacker. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
