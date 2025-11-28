import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';

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
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                <p className="font-medium text-[#001F5B] mt-3 text-sm">Technical Support</p>
                <p className="text-gray-600 text-sm">+1 (555) 234-5678</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#001F5B] rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Email Contact</h3>
              <p className="text-gray-600 mb-3 text-sm">Send us a message anytime</p>
              <div className="space-y-2">
                <p className="font-medium text-[#001F5B] text-sm">General Inquiries</p>
                <p className="text-gray-600 text-sm">info@telepulse.com</p>
                <p className="font-medium text-[#001F5B] mt-3 text-sm">Partnership Opportunities</p>
                <p className="text-gray-600 text-sm">partnerships@telepulse.com</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#00CFE6] rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-3">Our Headquarters</h3>
              <p className="text-gray-600 mb-3 text-sm">Visit us in person</p>
              <div className="space-y-2">
                <p className="font-medium text-[#001F5B] text-sm">Telepulse Inc.</p>
                <p className="text-gray-600 text-sm">123 Medical Innovation Drive<br />Healthcare City, HC 12345<br />United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Send Us a Message</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                    placeholder="Hospital or organization name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-[#001F5B] mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select your role</option>
                    <option value="physician">Physician</option>
                    <option value="nurse">Nurse</option>
                    <option value="administrator">Administrator</option>
                    <option value="it-director">IT Director</option>
                    <option value="ceo-cmo">CEO/CMO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                    placeholder="+1 (555) 123-4567"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
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
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#001F5B] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your needs, challenges, and how we can help..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#B22222] text-white px-8 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll respond within 24 hours during business days
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Demo Booking */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Schedule a Personalized Demo</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              See Telepulse in action with a customized demonstration tailored to your institution's needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 bg-[#00CFE6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#001F5B] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-1">Discovery Call</h3>
                    <p className="text-gray-300 text-sm">Understand your current challenges and specific needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 bg-[#00CFE6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#001F5B] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-1">Live Platform Demo</h3>
                    <p className="text-gray-300 text-sm">Interactive walkthrough of relevant features and capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 bg-[#00CFE6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#001F5B] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-1">Custom Implementation Plan</h3>
                    <p className="text-gray-300 text-sm">Tailored roadmap for deployment at your institution</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-[#00CFE6] mr-3" />
                  <h4 className="text-base font-medium">Typical Demo Schedule</h4>
                </div>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Duration: 45-60 minutes</li>
                  <li>• Available: Monday-Friday, 9 AM - 6 PM EST</li>
                  <li>• Format: Video conference or in-person</li>
                  <li>• Attendees: Your key stakeholders welcome</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-gray-800">
              <h3 className="text-lg font-semibold text-[#001F5B] mb-4 text-center">Book Your Demo</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#001F5B] mb-2">Preferred Date Range</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6]"
                    placeholder="Next week, specific dates, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#001F5B] mb-2">Time Preference</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6]">
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#001F5B] mb-2">Number of Attendees</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6]">
                    <option>1-2 people</option>
                    <option>3-5 people</option>
                    <option>6+ people</option>
                  </select>
                </div>
                <button className="w-full bg-gradient-to-r from-[#B22222] to-[#00CFE6] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Visit Our Headquarters</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Located in the heart of the medical district with easy access to major hospitals and research institutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#B22222] mx-auto mb-3" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-gray-500 text-sm">123 Medical Innovation Drive<br />Healthcare City, HC 12345</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-base font-semibold text-[#001F5B] mb-3">Directions</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p><strong>From Airport:</strong> 25 minutes via Highway 101</p>
                  <p><strong>Public Transit:</strong> Metro Line A, Medical Center stop</p>
                  <p><strong>Parking:</strong> Visitor parking available in Garage B</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-base font-semibold text-[#001F5B] mb-3">Office Hours</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-xs text-gray-500 mt-2">Emergency support available 24/7</p>
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