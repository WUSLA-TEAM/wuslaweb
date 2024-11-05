import React from 'react'
import { Users, Code, Zap } from 'lucide-react';

function Features({ darkMode }) {
    const features = [
        {
          title: "Custom Software Solutions",
          description: "Tailored applications that solve your unique business challenges",
          Icon: Code
        },
        {
          title: "User Experience Design",
          description: "Creating intuitive interfaces that delight your users",
          Icon: Users
        },
        {
          title: "Performance Optimization",
          description: "Maximizing speed and efficiency of your digital products",
          Icon: Zap
        }
      ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-teal-600 dark:text-teal-400 font-semibold tracking-wide uppercase">
          Our Services
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 
                      sm:text-4xl">
          Solutions that drive success
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
          We specialize in creating innovative software solutions that help businesses grow 
          and succeed in today's digital landscape.
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}


// Feature Card Component
const FeatureCard = ({ title, description, Icon, darkMode }) => (
    <div className={`relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                    transition-shadow duration-300 transform hover:-translate-y-1 ${darkMode ? 'dark' : ''}`}>
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md 
                      bg-teal-600 dark:bg-teal-400 text-white dark:text-gray-800">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{title}</p>
      <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );

export default Features;