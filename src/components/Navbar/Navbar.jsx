import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logo from '../../assets/mainLogo.png'

const Navbar = ({ isDarkMode,setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  


  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Me', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className={`flex items-center gap-1 ${isDarkMode ? 'text-[#FFFFFF]' : 'text-black'}`}>
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                 <img
              src={logo}
              alt="Mumair Logo"
              className="h-8"
            />
              </div>
              <span className="font-semibold text-2xl"><span className={`${isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} font-bold text-3xl pl-2`}>M</span>umair</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Download CV Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
              Download CV
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-md ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-md ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;