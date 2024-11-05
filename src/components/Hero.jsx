import React from 'react'
import Button from './Button'
import { ChevronRight } from 'lucide-react';


function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-20 pb-8 sm:pt-24 sm:pb-16 md:pb-20 lg:pt-32 lg:pb-28 xl:pt-36 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl animate-fade-in">
                <span className="block">Transform Your Business</span>
                <span className="block text-teal-600 dark:text-teal-400 mt-2">With Innovative Software</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-delay">
                We create cutting-edge software solutions that help businesses thrive in the digital age. Our focus on exceptional user experiences sets us apart.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in-delay-2">
                <Button primary>
                  Get Started <ChevronRight className="ml-2" size={20} />
                </Button>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button secondary>Learn More</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Hero