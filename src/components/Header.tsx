import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    {
      name: 'Solutions',
      path: '/solutions',
      submenu: [
        { name: 'Tele NICU', path: '/nicu' },
        { name: 'Tele PICU', path: '/picu' },
        { name: 'Tele-Education', path: '/education' },
        // { name: 'Research & Innovation', path: '/research' }
      ]
    },
    { name: 'Technology', path: '/technology' },
    // { name: 'Impact', path: '/impact' },
    // { name: 'Partners', path: '/partners' },
    { name: 'Resources', path: '/resources' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/WhatsApp Image 2025-09-16 at 13.37.39_d96be5ef.webp"
              alt="Telepulse Logo"
              className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-[#001F5B]">Telepulse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                        location.pathname === item.path || item.submenu.some(sub => location.pathname === sub.path)
                          ? 'text-[#B22222]'
                          : 'text-gray-700 hover:text-[#B22222]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    
                    {isSolutionsOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50">
                        <Link
                          to={item.path}
                          className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-[#B22222] hover:bg-gray-50 transition-colors duration-200"
                        >
                          All Solutions
                        </Link>
                        <div className="border-t border-gray-100 my-2"></div>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                              location.pathname === subItem.path
                                ? 'text-[#B22222] bg-gray-50'
                                : 'text-gray-700 hover:text-[#B22222] hover:bg-gray-50'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-[#B22222]'
                        : 'text-gray-700 hover:text-[#B22222]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-[#B22222] text-white px-6 py-2 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#B22222] transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                        className={`flex items-center justify-between w-full text-sm font-medium transition-colors duration-200 py-2 ${
                          location.pathname === item.path || item.submenu.some(sub => location.pathname === sub.path)
                            ? 'text-[#B22222]'
                            : 'text-gray-700 hover:text-[#B22222]'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileSolutionsOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-sm font-medium text-gray-700 hover:text-[#B22222] transition-colors duration-200 py-1"
                          >
                            All Solutions
                          </Link>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block text-sm transition-colors duration-200 py-1 ${
                                location.pathname === subItem.path
                                  ? 'text-[#B22222] font-medium'
                                  : 'text-gray-600 hover:text-[#B22222]'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-sm font-medium transition-colors duration-200 py-2 ${
                        location.pathname === item.path
                          ? 'text-[#B22222]'
                          : 'text-gray-700 hover:text-[#B22222]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-[#B22222] text-white px-6 py-2 rounded-full font-medium text-center mt-4 hover:bg-[#001F5B] transition-colors duration-300"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;