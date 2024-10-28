import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Ministry Of Peshmerge</h2>
            <p className="text-sm"> description here.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ICT DATABSE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
