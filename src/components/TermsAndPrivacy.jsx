import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsAndPrivacy = () => {
  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  const SectionHeader = ({ title, id }) => (
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={() => toggleSection(id)}
    >
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      {activeSection === id ? (
        <ChevronUp className="text-teal-600 h-6 w-6" />
      ) : (
        <ChevronDown className="text-teal-200 h-6 w-6" />
      )}
    </div>
  );

  const SectionContent = ({ children }) => (
    <motion.div
      className="mt-4 prose prose-teal max-w-none"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <motion.div
        className="bg-white shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              Terms and Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Last updated: November 4, 2024
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="space-y-8">
            {/* Terms of Service */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="1. Terms of Service" id="terms" />
              {activeSection === 'terms' && (
                <SectionContent>
                  {/* Content here */}
                </SectionContent>
              )}
            </motion.div>

            {/* Privacy Policy */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="2. Privacy Policy" id="privacy" />
              {activeSection === 'privacy' && (
                <SectionContent>
                  {/* Content here */}
                </SectionContent>
              )}
            </motion.div>

            {/* Data Storage and Security */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="3. Data Storage and Security" id="security" />
              {activeSection === 'security' && (
                <SectionContent>
                  {/* Content here */}
                </SectionContent>
              )}
            </motion.div>

            {/* User Rights */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="4. User Rights" id="rights" />
              {activeSection === 'rights' && (
                <SectionContent>
                  {/* Content here */}
                </SectionContent>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="5. Contact Information" id="contact" />
              {activeSection === 'contact' && (
                <SectionContent>
                  {/* Content here */}
                </SectionContent>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm text-gray-500">
              These terms and conditions were last updated on November 4, 2024.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-teal-600 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="text-center">
              <p className="mt-2 text-2xl leading-8 font-extrabold text-white sm:text-3xl">
                Have questions about our terms?
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100">
                Our legal team is here to help you understand our policies.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <motion.button
                className="bg-white text-teal-600 px-6 py-3 rounded-md font-medium hover:bg-teal-50 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Contact Legal Team
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndPrivacy;
