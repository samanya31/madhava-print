import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-stone-50 shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 text-amber-100 py-2">
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
            <span>Quality Printing & Event Solutions Since 2015</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="/logo.png"
              alt="Madhava Print and Events Logo"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
                Madhava Print & Events
              </h1>
              <p className="text-sm text-stone-600">
                Professional Printing & Event Services
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 transform hover:scale-105"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 transform hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 transform hover:scale-105"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 transform hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-stone-700" />
            ) : (
              <Menu className="w-6 h-6 text-stone-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-stone-700 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent font-medium transition-all duration-300 text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;