import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400">Wusla</Link>
      
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full transition-all hover:scale-125"
        title="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
