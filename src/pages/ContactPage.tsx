import React, { useState } from 'react';
import { Mail, Twitter, MessageCircle, Github, MapPin, Phone, Send, Instagram, Facebook } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import SEO from '../components/SEO';
import { breadcrumbSchema, organizationSchema } from '../utils/structuredData';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjectOptions = [
    'General Inquiry',
    'Technical Support',
    'Partnership Opportunity',
    'Business Inquiry',
    'Developer Support',
    'Validator Support',
    'Media & Press',
    'Bug Report',
    'Feature Request',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:support@ramestta.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      setIsSubmitting(false);
      setCountdown(30);
      clearInterval(timer);
    }, 30000);
  };


  // Cube background component
  const CubeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/40 rounded-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
  const injectGlobalStyles = () => {
    const style = document.createElement('style');
    style.setAttribute('data-float-animation', 'true');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) translateX(10px) rotate(90deg);
        }
        50% {
          transform: translateY(0) translateX(20px) rotate(180deg);
        }
        75% {
          transform: translateY(20px) translateX(10px) rotate(270deg);
        }
        100% {
          transform: translateY(0) translateX(0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  };

  // Call this once when the component mounts
  if (typeof document !== 'undefined' && !document.querySelector('style[data-float-animation]')) {
    injectGlobalStyles();
  }


  const contactBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://ramestta.com/' },
    { name: 'Contact', url: 'https://ramestta.com/contact' }
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, contactBreadcrumb]
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Contact Ramestta - Get Support & Connect With Our Team"
        description="Get in touch with the Ramestta team. Contact us for technical support, partnerships, business inquiries, or general questions about our Layer-3 blockchain platform."
        keywords="Ramestta contact, blockchain support, technical support, business inquiries, partnership opportunities, contact Ramestta team"
        canonical="https://ramestta.com/contact"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <FloatingParticles />
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect with
            <span className="block text-gradient">
              Ramestta
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Join our growing community of developers, validators, and blockchain enthusiasts.
            We're here to help you build the future of Web3.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-950">
        <CubeBackground />
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-xl text-gray-300">Have a question or want to collaborate? We'd love to hear from you.</p>
            </div>
            <div className="card p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option} className="bg-gray-800 text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none" placeholder="Tell us more about your inquiry..." required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      `Please wait... (${countdown}s)`
                    ) : (
                      <><Send className="mr-2" size={20} />Send Message</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
