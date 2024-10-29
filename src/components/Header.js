import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/wazaratypeshmarga.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold"> 
          <img 
            src={logo} 
            alt="Ministry of Peshmerga" 
            className="mb-4 w-20 h-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/home" className="hover:text-gray-400">Home</Link>
         
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-emerald-400 to-cyan-400 p-4">
          <nav className="flex flex-col space-y-2 items-center">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
