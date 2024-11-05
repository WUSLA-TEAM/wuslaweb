import React from 'react'

// Testimonial Card Component
const TestimonialCard = ({ author, role, title, quote, darkMode }) => (
  <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
    <div className={`flex-1 p-6 flex flex-col justify-between ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
      <div className="flex-1">
        <p className={`text-sm font-medium ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>{author}</p>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{role}</p>
        <div className="block mt-2">
          <p className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{title}</p>
          <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>"{quote}"</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      title: "Exceptional Results",
      quote: "Wusla transformed our digital presence with their innovative solutions. The results exceeded our expectations."
    },
    {
      author: "Michael Chen",
      role: "CTO, InnovateCo",
      title: "Outstanding Support",
      quote: "The team at Wusla provided exceptional support throughout our project. Their expertise made all the difference."
    },
    {
      author: "Emma Davis",
      role: "Director, FutureScale",
      title: "Innovative Solutions",
      quote: "Working with Wusla has been transformative for our business. Their innovative approach set them apart."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className={`text-3xl tracking-tight font-extrabold sm:text-4xl ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              Trusted by Industry Leaders
            </h2>
            <p className={`mt-3 max-w-2xl mx-auto text-xl sm:mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              See what our clients say about working with Wusla
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;