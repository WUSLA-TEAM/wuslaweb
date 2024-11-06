import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Menu, X, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Import Route here
import TermsPage from './components/TermsPage';
import HeroSection from './components/HeroSection';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          mass: 0.5
        }}
      />
      <motion.div
        className="fixed w-12 h-12 border-2 border-gradient-to-r from-purple-500 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.4
        }}
      />
    </>
  );
};


// // 3D Animation Component
// const ThreeDAnimation = () => {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div className="relative w-64 h-64">
//         {/* Animated cube */}
//         <motion.div
//           animate={{
//             rotateY: [0, 360],
//             rotateX: [0, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute inset-0"
//         >
//           <div className="absolute w-full h-full border-2 border-purple-500/30 rounded-lg transform rotate-45 animate-pulse" />
//           <div className="absolute w-full h-full border-2 border-blue-500/30 rounded-lg transform -rotate-45 animate-pulse" />
//           <div className="absolute w-4/5 h-4/5 top-1/10 left-1/10 border-2 border-cyan-500/30 rounded-lg animate-spin-slow" style={{ animationDuration: '15s' }} />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// // Rest of the components remain the same
// const RotatingText = () => {
//   const words = ["Innovation", "Security", "User Experience", "Technology"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-8 overflow-hidden">
//       <motion.div
//         key={currentIndex}
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -40, opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
//       >
//         {words[currentIndex]}
//       </motion.div>
//     </div>
//   );
// };


// //Hero Section
// const HeroSection = () => (
//   <div className="relative min-h-screen bg-black overflow-hidden">
//     <div className="absolute inset-0">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.15),rgba(0,0,0,0))]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
//     </div>

//     <ThreeDAnimation />

//     <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 transform transition-transform duration-500 ease-in-out">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Empowering the Future of
//             <br />
//             Tech Solutions
//           </h1>
//           <div className="flex justify-center mb-8">
//             <RotatingText />
//           </div>
//           <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
//             Leading the way in consumer electronics, software, and online services.
//             We're building tomorrow's technology today.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center mx-auto"
//           >
//             Get Started
//             <ArrowRight className="ml-2" />
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   </div>
// );


// NavBar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-black/50 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Wusla
          </motion.div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink to="/terms">Terms</NavLink>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#products">Products</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
              <MobileNavLink href="/terms">Terms</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <motion.div
    className="text-gray-300 hover:text-white transition-colors duration-200"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to}>{children}</Link>
  </motion.div>
);

const MobileNavLink = ({ to, children }) => (
  <motion.div
    className="text-gray-300 hover:text-white transition-colors duration-200"
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to}>{children}</Link>
  </motion.div>
);


// Footer Component
const Footer = () => (
  <footer className="bg-black/80 backdrop-blur-md text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Wusla</h3>
          <p className="text-gray-400">Building the future of technology</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#twitter" className="hover:text-white transition-colors">
              <Twitter />
            </a>
            <a href="#github" className="hover:text-white transition-colors">
              <Github />
            </a>
            <a href="#linkedin" className="hover:text-white transition-colors">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Wusla. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <Router basename="/wuslaweb"> {/* Use basename for GitHub Pages subfolder */}
    <div className="min-h-screen bg-black text-white cursor-none">
      <CustomCursor />
      <NavBar />
      <Routes>
  <Route path="/" element={<HeroSection />} />
  <Route path="terms" element={<TermsPage />} />
</Routes>

      <Footer />
    </div>
  </Router>
);

export default App;
