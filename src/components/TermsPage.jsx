import { motion } from 'framer-motion';

const TermsPage = () => (
  <div className="min-h-screen bg-black text-white px-4 py-16">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <p className="text-lg mb-4">
        Welcome to Wusla! Please read these Terms and Conditions carefully before using our website and services.
        By accessing or using our services, you agree to be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="text-lg mb-4">
        These Terms and Conditions govern your use of Wusla's website and services. By accessing our website, you acknowledge and agree to these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
      <p className="text-lg mb-4">
        By accessing or using the website or by registering for an account with Wusla, you agree to comply with these Terms and Conditions. If you do not agree to these terms, please refrain from using our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
      <p className="text-lg mb-4">
        Wusla provides various services, including but not limited to:
        <ul className="list-disc ml-8">
          <li>Software development</li>
          <li>Consumer electronics sales</li>
          <li>Cloud services</li>
          <li>Project management and CRM software</li>
          <li>Payment processing through Razorpay</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Account Registration</h2>
      <p className="text-lg mb-4">
        To use certain features of the website or services, you may be required to register for an account. You agree to provide accurate and complete information during registration, and to keep this information up to date.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Payments and Billing</h2>
      <p className="text-lg mb-4">
        Wusla uses <strong>Razorpay</strong> as a third-party payment gateway for processing all transactions. By making a payment through our website, you agree to comply with Razorpay's Terms and Conditions, which govern your use of their services.
      </p>

      <h3 className="text-xl font-semibold mb-4">Razorpay Payment Policy</h3>
      <ul className="list-disc ml-8 text-lg mb-4">
        <li><strong>Payment Methods:</strong> Razorpay accepts payments through a variety of methods including credit/debit cards, net banking, UPI, wallets, and more.</li>
        <li><strong>Payment Authorization:</strong> By entering your payment information, you authorize Wusla to charge the specified amount for the products or services provided.</li>
        <li><strong>Refunds and Cancellations:</strong> Refunds for payments made via Razorpay will be processed as per Razorpay's refund policy. Wusla follows the guidelines set by Razorpay, which can be found on their website.</li>
        <li><strong>Security and Data Privacy:</strong> Razorpay uses secure encryption and complies with PCI-DSS standards to protect your payment information. Wusla does not store any sensitive payment details on its servers.</li>
      </ul>
      <p className="text-lg mb-4">
        For detailed information, please review Razorpay's <a href="https://razorpay.com/terms/" target="_blank" className="text-teal-400">Terms of Service</a>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. User Responsibilities</h2>
      <p className="text-lg mb-4">
        You agree to use our services in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
      <p className="text-lg mb-4">
        All content on the Wusla website, including text, graphics, logos, images, and software, is the property of Wusla or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without express permission.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Privacy Policy</h2>
      <p className="text-lg mb-4">
        Wusla respects your privacy and is committed to protecting your personal data. Our Privacy Policy, which outlines how we collect, use, and protect your information, is available on our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Limitations of Liability</h2>
      <p className="text-lg mb-4">
        To the extent permitted by law, Wusla will not be liable for any indirect, incidental, or consequential damages arising out of your use of the website or services. This includes any loss of data, revenue, or business opportunities.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
      <p className="text-lg mb-4">
        These Terms and Conditions will be governed by and construed in accordance with the laws of [your country/region]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [your city/country].
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
      <p className="text-lg mb-4">
        Wusla reserves the right to modify or update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. We encourage you to review this page periodically.
      </p>

      <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
      <p className="text-lg mb-4">
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
      </p>
      <p className="text-lg mb-4">
        <strong>Wusla Inc.</strong><br />
        Email: <a href="mailto:contact@wusla.com" className="text-teal-400">contact@wusla.com</a><br />
        Phone: +1 (XXX) XXX-XXXX
      </p>
    </motion.div>
  </div>
);

export default TermsPage;
