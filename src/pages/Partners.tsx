import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';
import { Link } from 'react-router-dom';
import { Building2, Users, Award, Handshake, CheckCircle, ArrowRight, Globe, Heart } from 'lucide-react';

const Partners: React.FC = () => {
  const hospitalPartners = [
    {
      name: 'Children\'s Hospital of Philadelphia',
      type: 'Academic Medical Center',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=CHOP',
      description: 'Leading pediatric research and clinical care institution'
    },
    {
      name: 'Texas Children\'s Hospital',
      type: 'Pediatric Specialty Hospital',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=TEXAS+CHILDRENS',
      description: 'Largest pediatric hospital in the United States'
    },
    {
      name: 'Boston Children\'s Hospital',
      type: 'Academic Medical Center',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=BOSTON+CHILDRENS',
      description: 'Harvard Medical School teaching hospital and research institute'
    },
    {
      name: 'SickKids Toronto',
      type: 'Research Hospital',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=SICKKIDS',
      description: 'Canada\'s most research-intensive hospital'
    },
    {
      name: 'Great Ormond Street Hospital',
      type: 'Specialty Children\'s Hospital',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=GOSH',
      description: 'World-renowned children\'s hospital in London'
    },
    {
      name: 'Cincinnati Children\'s',
      type: 'Academic Medical Center',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=CINCINNATI',
      description: 'Top-ranked pediatric hospital and research center'
    }
  ];

  const governmentPartners = [
    {
      name: 'U.S. Department of Health',
      type: 'Federal Agency',
      description: 'Collaborating on national telemedicine initiatives'
    },
    {
      name: 'Health Canada',
      type: 'Government Agency',
      description: 'Supporting rural healthcare access programs'
    },
    {
      name: 'NHS England',
      type: 'National Health Service',
      description: 'Implementing telemedicine across pediatric units'
    },
    {
      name: 'WHO Global Health',
      type: 'International Organization',
      description: 'Advancing global pediatric telemedicine standards'
    }
  ];

  const technologyPartners = [
    {
      name: 'Philips Healthcare',
      type: 'Strategic Technology Partner',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=PHILIPS',
      description: 'Integration with IntelliVue monitoring systems and healthcare IT platform'
    },
    {
      name: 'Microsoft Azure',
      type: 'Cloud Infrastructure',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=MICROSOFT',
      description: 'Secure, scalable cloud computing and AI services'
    },
    {
      name: 'Amazon Web Services',
      type: 'Cloud Platform',
      logo: 'https://via.placeholder.com/200x80/001F5B/FFFFFF?text=AWS',
      description: 'HIPAA-compliant infrastructure and data analytics'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Heart,
      title: 'Improved Patient Outcomes',
      description: 'Access to specialized expertise leading to better clinical results and reduced mortality rates.'
    },
    {
      icon: Users,
      title: 'Enhanced Care Team',
      description: 'Extend your clinical capabilities with 24/7 access to pediatric specialists and intensivists.'
    },
    {
      icon: Award,
      title: 'Quality Recognition',
      description: 'Achieve higher quality ratings and accreditation standards through evidence-based care protocols.'
    },
    {
      icon: Globe,
      title: 'Network Access',
      description: 'Join a global network of leading healthcare institutions sharing best practices and knowledge.'
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discuss your needs, challenges, and goals with our partnership team'
    },
    {
      step: 2,
      title: 'Needs Assessment',
      description: 'Comprehensive evaluation of your current capabilities and integration requirements'
    },
    {
      step: 3,
      title: 'Custom Solution Design',
      description: 'Tailored implementation plan designed specifically for your institution'
    },
    {
      step: 4,
      title: 'Implementation & Training',
      description: 'Seamless deployment with comprehensive staff training and support'
    },
    {
      step: 5,
      title: 'Ongoing Partnership',
      description: 'Continuous support, updates, and collaborative improvement initiatives'
    }
  ];

  return (
    <>
      <SEO
        title={seoConfig.partners.title}
        description={seoConfig.partners.description}
        keywords={seoConfig.partners.keywords}
      />
      
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Healthcare Partnership"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Our Partners</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Collaborating with world-class healthcare institutions, government agencies, 
            and technology leaders to advance pediatric critical care globally
          </p>
        </div>
      </section>

      {/* Hospital Partners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Healthcare Institution Partners</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Leading pediatric hospitals and medical centers trust Telepulse to enhance their critical care capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalPartners.map((partner, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#001F5B] mb-2">{partner.name}</h3>
                <div className="text-[#B22222] font-medium mb-4">{partner.type}</div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Collaborations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Government Collaborations</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Working with government agencies to improve healthcare access and establish telemedicine standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B22222] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#001F5B] mb-2">{partner.name}</h3>
                    <div className="text-[#00CFE6] font-medium mb-3">{partner.type}</div>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Technology Partners</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies enable our innovative solutions
            </p>
          </div>

          <div className="space-y-6">
            {technologyPartners.map((partner, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <Handshake className="w-8 h-8 text-[#B22222] mr-3" />
                    <span className="text-[#00CFE6] font-medium">{partner.type}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#001F5B] mb-3">{partner.name}</h3>
                  <p className="text-base text-gray-600 mb-4">{partner.description}</p>
                  <div className="flex items-center text-[#B22222] font-medium">
                    <Award className="w-5 h-5 mr-2" />
                    <span>Strategic Partnership</span>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} text-center`}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Partnership Benefits</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Discover how partnering with Telepulse can transform your healthcare delivery and patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Partner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">How to Partner</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our proven partnership process ensures successful implementation and long-term collaboration
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#B22222] to-[#00CFE6] hidden lg:block"></div>
            
            {partnershipProcess.map((step, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="text-[#00CFE6] font-bold text-lg mb-2">Step {step.step}</div>
                    <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#B22222] rounded-full border-4 border-white hidden lg:flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Become a Partner</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Join our network of world-class healthcare institutions and technology leaders. 
            Together, we can transform pediatric critical care globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#B22222] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Handshake className="w-5 h-5" />
              <span>Start Partnership Discussion</span>
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  
    </>);
};

export default Partners;