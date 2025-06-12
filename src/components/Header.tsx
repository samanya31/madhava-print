import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 9667063132</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@madhavaprint.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Quality Printing Solutions Since 2015</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // Make sure to place your logo image in the public folder or update the path accordingly
              alt="Madhava Print Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Madhav Print
              </h1>
              <p className="text-sm text-slate-600">
                Professional Printing Services
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
