import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, } from 'lucide-react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import Home from './components/Home';

// Navigation Component
const Navbar = ({ isMenuOpen, toggleMenu, toggleDarkMode }) => {
  return (
    <Router>
      <nav className="fixed w-full bg-white/90 dark:bg-gray-900 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/wuslaweb" className="text-2xl font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors">
                Wusla
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* <NavLink to="/">Home</NavLink> */}
              {/* <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink> */}
              <NavLink to="/terms">Terms & Conditions</NavLink>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full transform transition-all hover:scale-125 hover:rotate-180 focus:outline-none"
                title="Toggle Dark Mode"
              >
                {isMenuOpen ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <MobileNavLink to="/">Home</MobileNavLink> */}
              {/* <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/services">Services</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink> */}
              <MobileNavLink to="/terms">Terms & Conditions</MobileNavLink>
              <button className="w-full text-left px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/terms" element={<TermsAndPrivacy />} />
        <Route path='/wuslaweb' element={<Home />} />
        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
};

// Navigation Link Component for both Desktop and Mobile
const NavLink = ({ to, children }) => (
  <Link to={to} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link to={to} className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium">
    {children}
  </Link>
);




// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleDarkMode={toggleDarkMode} />
      {/* <Footer /> */}
      
    </div>
  );
};

// Custom animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .animate-fade-in-delay {
    animation: fadeIn 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-delay-2 {
    animation: fadeIn 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;



