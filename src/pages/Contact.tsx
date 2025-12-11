import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-[#001F5B] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact Us"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your pediatric critical care capabilities? Let's discuss how 
            Telepulse can help improve outcomes at your institution
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#B22222] rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-3 text-sm">Speak with our team directly</p>
              <div className="space-y-2">
                <p className="font-medium text-[#001F5B] text-sm">Sales & Partnerships</p>
                <a href="tel:+919108080000" className="text-gray-600 text-sm hover:text-[#B22222] transition-colors duration-200 block">+91-9108080000</a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#001F5B] rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Email Contact</h3>
              <p className="text-gray-600 mb-3 text-sm">Send us a message anytime</p>
              <div className="space-y-2">
                <p className="font-medium text-[#001F5B] text-sm">For Inquiries</p>
                <a href="mailto:info@telepulse.in" className="text-gray-600 text-sm hover:text-[#B22222] transition-colors duration-200 block">info@telepulse.in</a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#00CFE6] rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Our Headquarters</h3>
              <p className="text-gray-600 mb-3 text-sm">Visit us in person</p>
              <div className="space-y-2">
                <p className="font-medium text-[#001F5B] text-sm">Telepulse</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13.008248287310485,77.54426197507706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-[#B22222] transition-colors duration-200 block"
                >
                  AKSHAYA, 22 (270), 4th Main Road<br />Mahalakshmi Layout<br />Bangalore 560086, India
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Side by Side */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Get In Touch With Us</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Fill out the form or visit our office. We're here to help transform your pediatric critical care capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#B22222] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#001F5B] mb-3">Message Sent Successfully!</h3>
                  <p className="text-base text-gray-600 mb-6">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#B22222] text-white px-8 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 h-full">
                  <h3 className="text-xl font-semibold text-[#001F5B] mb-6">Send Us a Message</h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#001F5B] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#001F5B] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#001F5B] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-[#001F5B] mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                        placeholder="Hospital or organization name"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-medium text-[#001F5B] mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        required
                        value={formData.inquiry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="demo">Request a Demo</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="implementation">Implementation Support</option>
                        <option value="training">Training & Education</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#001F5B] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Tell us about your needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#B22222] text-white px-8 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                      We'll respond within 24 hours during business days
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Map and Address */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.430289104064!2d77.54426197507706!3d13.008248287310485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzI5LjciTiA3N8KwMzInNDguNiJF!5e0!3m2!1sen!2sin!4v1764398866985!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Telepulse Headquarters Location"
                ></iframe>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-[#001F5B] mb-4">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#B22222] mt-1 flex-shrink-0" />
                    <div className="text-gray-600 text-sm">
                      <p className="font-medium text-[#001F5B] mb-1">Telepulse</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=13.008248287310485,77.54426197507706"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#B22222] transition-colors duration-200 block"
                      >
                        AKSHAYA, 22 (270)<br />4th Main Road<br />Mahalakshmi Layout<br />Bangalore 560086<br />India
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#B22222] mt-1 flex-shrink-0" />
                    <div className="text-gray-600 text-sm">
                      <p className="font-medium text-[#001F5B] mb-1">Email</p>
                      <a href="mailto:info@telepulse.in" className="hover:text-[#B22222] transition-colors duration-200 block">
                        info@telepulse.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#B22222] mt-1 flex-shrink-0" />
                    <div className="text-gray-600 text-sm">
                      <p className="font-medium text-[#001F5B] mb-1">Phone</p>
                      <a href="tel:+919108080000" className="hover:text-[#B22222] transition-colors duration-200 block">
                        +91-9108080000
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;