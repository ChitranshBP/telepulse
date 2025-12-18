import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Mail, Phone } from 'lucide-react';

const ThankYou: React.FC = () => {
  useEffect(() => {
    document.title = 'Thank You - Telepulse';
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-full shadow-2xl animate-bounce">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#001F5B] mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We've received your message and appreciate you reaching out to us.
          </p>

          {/* Info Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#001F5B] mb-1">Review</h3>
                  <p className="text-gray-600 text-sm">Our team will carefully review your message and gather any necessary information.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#001F5B] mb-1">Response</h3>
                  <p className="text-gray-600 text-sm">We'll get back to you within 24 hours during business days with a detailed response.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#001F5B] mb-1">Follow-Up</h3>
                  <p className="text-gray-600 text-sm">If needed, we'll schedule a call or meeting to discuss your inquiry in detail.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-[#B22222] text-white px-8 py-4 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/solutions"
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#001F5B] border-2 border-[#001F5B] px-8 py-4 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Explore Solutions</span>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-2xl shadow-xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Need Immediate Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:info@telepulse.in"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-200">Email Us</p>
                  <p className="font-medium">info@telepulse.in</p>
                </div>
              </a>

              <a
                href="tel:+919108080000"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-200">Call Us</p>
                  <p className="font-medium">+91-9108080000</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
