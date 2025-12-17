import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';

const NICUTeleCare: React.FC = () => {
  const benefits = [
    'Improved survival rates for premature and critically ill newborns',
    'Reduced length of stay in NICU',
    '24/7 access to specialized neonatal expertise',
    'Enhanced family communication and support',
    'Standardized evidence-based care protocols',
    'Real-time monitoring and intervention capabilities',
    'Reduced complications through early detection',
    'Cost-effective specialized care delivery'
  ];

  const features = [
    {
      icon: Heart,
      title: 'Specialized Neonatal Monitoring',
      description: 'Advanced monitoring systems specifically designed for the unique physiological needs of newborns and premature infants.'
    },
    {
      icon: Users,
      title: '24/7 Expert Consultation',
      description: 'Round-the-clock access to board-certified neonatologists and NICU specialists for immediate consultation and guidance.'
    },
    {
      icon: Clock,
      title: 'Rapid Response System',
      description: 'Immediate alerts and intervention protocols for critical changes in neonatal patient conditions.'
    },
    {
      icon: Award,
      title: 'Evidence-Based Protocols',
      description: 'Standardized care protocols based on the latest neonatal research and best practices from leading institutions.'
    }
  ];

  // const stats = [
  //   { value: '40%', label: 'Reduction in Mortality', icon: TrendingUp },
  //   { value: '25%', label: 'Shorter Length of Stay', icon: Clock },
  //   { value: '95%', label: 'Family Satisfaction', icon: Heart },
  //   { value: '24/7', label: 'Expert Availability', icon: Users }
  // ];

  return (
    <>
      <SEO
        title={seoConfig.nicu.title}
        description={seoConfig.nicu.description}
        keywords={seoConfig.nicu.keywords}
      />
      
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="assets/new/nicu-f.webp"
            alt="Tele NICU"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-[#00CFE6] mr-4" />
              <h1 className="text-3xl lg:text-4xl font-semibold">Tele NICU</h1>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Specialized neonatal intensive care monitoring and support through advanced telemedicine technology, 
              bringing world-class expertise to every NICU bedside.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">The Challenge</h2>
              <p className="text-base text-gray-600 mb-6">
                Many hospitals lack specialized neonatal expertise, leading to suboptimal outcomes for critically ill newborns. 
                The shortage of neonatologists and uneven distribution of expertise creates significant gaps in care quality, 
                particularly in rural and community hospitals.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Our Solution</h2>
              <p className="text-base text-gray-600 mb-6">
                24/7 remote monitoring and consultation with board-certified neonatologists and NICU specialists. 
                Our platform provides continuous oversight, immediate intervention capabilities, and collaborative 
                care planning to ensure every newborn receives expert-level care.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/new/nicu-f.webp"
                alt="NICU Technology"
                className="feature-image shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Key Features</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Comprehensive neonatal care capabilities designed specifically for the unique needs of critically ill newborns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Clinical Benefits</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Proven improvements in patient outcomes and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-[#00CFE6] mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      {/* <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Proven Results</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Real outcomes from hospitals using our Tele NICU solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#B22222] rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-semibold mb-2">{stat.value}</div>
                <div className="text-[#00CFE6] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Case Study */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Success Story</h2>
              <h3 className="text-lg font-medium text-[#B22222] mb-3">Regional Medical Center NICU Program</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Challenge</h4>
                <p className="text-gray-600 mb-4">
                  A Level II NICU in rural Texas was struggling with high mortality rates and long lengths of stay 
                  due to lack of specialized neonatal expertise. They needed immediate access to neonatologists 
                  for critical decision-making.
                </p>
                
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Implementation</h4>
                <p className="text-gray-600 mb-4">
                  Deployed Telepulse Tele NICU with 24/7 neonatologist coverage, integrated monitoring systems,
                  and standardized care protocols. Staff received comprehensive training and ongoing support.
                </p>
              </div>
              
              <div className="bg-[#001F5B] text-white p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-4">Results After 12 Months</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>40% reduction in neonatal mortality rates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>25% decrease in average length of stay</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>$1.2M annual cost savings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>Elevated to Level III NICU status</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Transform Your NICU</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Ready to provide world-class neonatal care at your institution? Let's discuss how
            Tele NICU can improve outcomes for your smallest patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  
    </>);
};

export default NICUTeleCare;