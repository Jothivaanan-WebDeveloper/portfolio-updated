import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
import { Link } from 'react-scroll';

const Footer = () => {

    const footerIcons = [<FaFacebook />, <FaWhatsapp />, <FaInstagram />, <FaLinkedin />];

    return (
        <footer className="w-full bg-gray-900 text-gray-400 py-8 mt-5 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo or Website Name */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold text-gray-300">Jothivaanan</h1>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <p className='text-sm'>Contact me at : &nbsp;
                            <a href="mailto:jothivaananwebdeveloper@gmail.com"
                                className="text-gray-300 hover:text-gray-200">
                                jothivaananwebdeveloper@gmail.com</a>
                        </p>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mb-4 md:mb-0 text-sm">
                        {
                            footerIcons.map((el, index) => (
                                <div key={index}>{el}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
