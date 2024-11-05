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
              Wusla Terms and Conditions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Last updated: November 5, 2024
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="1. Acceptance of Terms" id="acceptance" />
              {activeSection === 'acceptance' && (
                <SectionContent>
                  By accessing or using Wusla's products, services, or website, you agree to be bound by these Terms and Conditions. 
                  Wusla reserves the right to update or change these Terms at any time without prior notice. Continued use of the service constitutes acceptance of any updates or modifications.
                </SectionContent>
              )}
            </motion.div>

            {/* Description of Services */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="2. Description of Services" id="description" />
              {activeSection === 'description' && (
                <SectionContent>
                  Wusla provides a range of technology services, including software development, UX design, and customer support. These services are 
                  designed to be accessible online through our website and Wusla Stores. Any additional services will be governed by specific terms relevant to that service.
                </SectionContent>
              )}
            </motion.div>

            {/* User Responsibilities */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="3. User Responsibilities" id="responsibilities" />
              {activeSection === 'responsibilities' && (
                <SectionContent>
                  Users agree to provide accurate information when creating an account, comply with all applicable laws, and use our Services in a manner 
                  that does not infringe or violate the rights of others. Users are responsible for securing their account credentials and notifying Wusla 
                  of any unauthorized access.
                </SectionContent>
              )}
            </motion.div>

            {/* Payment Terms */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="4. Payment Terms" id="payment" />
              {activeSection === 'payment' && (
                <SectionContent>
                  Payments for Wusla services are processed through Razorpay. Users agree to abide by Razorpay’s terms and policies for secure transactions. 
                  Payments must be completed before access to paid services is granted. Refunds and cancellations are subject to specific terms, if applicable, 
                  as detailed during the purchasing process.
                </SectionContent>
              )}
            </motion.div>

            {/* Data Privacy */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="5. Data Privacy" id="privacy" />
              {activeSection === 'privacy' && (
                <SectionContent>
                  Wusla is committed to protecting user privacy. All personal data collected, including but not limited to name, contact information, 
                  and usage data, is stored securely and used only for enhancing the user experience or providing support. Users may refer to our Privacy Policy 
                  for further details on data protection practices.
                </SectionContent>
              )}
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="6. Limitation of Liability" id="liability" />
              {activeSection === 'liability' && (
                <SectionContent>
                  Wusla will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. 
                  This limitation applies to all claims, including but not limited to loss of profits, data, or business. Users assume full responsibility for 
                  any use of third-party services or products linked through Wusla's platform.
                </SectionContent>
              )}
            </motion.div>

            {/* Intellectual Property */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="7. Intellectual Property" id="intellectual-property" />
              {activeSection === 'intellectual-property' && (
                <SectionContent>
                  All content on the Wusla website, including text, images, software, and logos, is the intellectual property of Wusla or its licensors. 
                  Unauthorized use, reproduction, or distribution of any Wusla content is strictly prohibited.
                </SectionContent>
              )}
            </motion.div>

            {/* Termination */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="8. Termination" id="termination" />
              {activeSection === 'termination' && (
                <SectionContent>
                  Wusla reserves the right to suspend or terminate user accounts at its discretion, including but not limited to cases of policy violation, 
                  illegal activity, or any behavior that could harm the company or its users. In cases of termination, users may lose access to paid services 
                  without entitlement to a refund.
                </SectionContent>
              )}
            </motion.div>

            {/* Governing Law */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <SectionHeader title="9. Governing Law" id="governing-law" />
              {activeSection === 'governing-law' && (
                <SectionContent>
                  These Terms and Conditions shall be governed by the laws of [insert relevant jurisdiction]. Any disputes arising from these Terms shall 
                  be resolved in the appropriate courts of [insert location], without regard to conflicts of law principles.
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
              These terms and conditions were last updated on November 5, 2024.
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
                Our legal team is here to help you understand any details. Please contact us at support@wusla.com for further assistance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndPrivacy;
