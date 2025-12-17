import React from 'react';
import { Link } from 'react-router-dom';
import {  Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001F5B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/WhatsApp Image 2025-09-16 at 13.37.39_d96be5ef.webp"
                alt="Telepulse Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl font-bold">Telepulse</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing pediatric critical care through innovative telemedicine solutions. 
              Saving lives, one connection at a time.
            </p>
            <Link
              to="/contact"
              className="bg-[#B22222] text-white px-8 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              Request a Demo
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">Solutions</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">Technology</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">Impact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00CFE6]" />
                <a href="mailto:info@telepulse.in" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">
                  info@telepulse.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00CFE6]" />
                <a href="tel:+919108080000" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">
                  +91-9108080000
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00CFE6] mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=13.008248287310485,77.54426197507706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200"
                >
                  AKSHAYA, 22 (270), 4th Main Road<br />Mahalakshmi Layout, Bangalore 560086<br />India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.430289104064!2d77.54426197507706!3d13.008248287310485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzI5LjciTiA3N8KwMzInNDguNiJF!5e0!3m2!1sen!2sin!4v1764398866985!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Telepulse Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/legal" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/legal" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
            <Link to="/legal" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200 text-sm">
              Telemedicine Disclaimer
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00CFE6] transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div> */}
            <p className="text-gray-400 text-sm">
              © 2025 Telepulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;