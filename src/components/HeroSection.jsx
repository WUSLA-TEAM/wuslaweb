import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WuslaText3D = () => {
  const letters = "WUSLA".split("");
  
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            textShadow: [
              "0 0 0 rgba(255,255,255,0)",
              "0 0 20px rgba(138,43,226,0.5)",
              "0 0 40px rgba(0,191,255,0.5)",
              "0 0 0 rgba(255,255,255,0)"
            ]
          }}
          transition={{ 
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transform-gpu"
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

const ThreeDAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-96 h-96"
      >
        {/* Outer rotating rings */}
        <motion.div 
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-full h-full border-4 border-purple-500/20 rounded-full" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-8"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-full h-full border-4 border-blue-500/20 rounded-full" />
        </motion.div>
        
        {/* Inner geometric shapes */}
        <motion.div
          className="absolute inset-16"
          animate={{ rotate: 180 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-full h-full border-4 border-cyan-500/20 rotate-45" />
          <div className="absolute w-full h-full border-4 border-purple-500/20 -rotate-45" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const RotatingText = () => {
  const words = ["Innovation", "Security", "User Experience", "Technology"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        {words[currentIndex]}
      </motion.div>
    </div>
  );
};

const HeroSection = () => (
  <div className="relative min-h-screen bg-black overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.15),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
    </div>

    <ThreeDAnimation />

    <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 transform transition-transform duration-500 ease-in-out">
          <WuslaText3D />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empowering the Future of
            <br />
            Tech Solutions
          </h2>
          <div className="flex justify-center mb-8">
            <RotatingText />
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Leading the way in consumer electronics, software, and online services.
            We're building tomorrow's technology today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center mx-auto"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;