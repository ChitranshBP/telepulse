import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';
import { Link } from 'react-router-dom';
import { Heart, Users, Building2, Globe, TrendingUp, Award, Download, Play } from 'lucide-react';

const Impact: React.FC = () => {
  const keyNumbers = [
    { value: '15,000+', label: 'Lives Saved', description: 'Critical interventions preventing mortality', icon: Heart },
    { value: '250+', label: 'Healthcare Partners', description: 'Hospitals and medical centers worldwide', icon: Building2 },
    { value: '50,000+', label: 'Patients Monitored', description: 'Continuous care through our platform', icon: Users },
    { value: '35%', label: 'Outcome Improvement', description: 'Better patient outcomes on average', icon: TrendingUp },
  ];

  const caseStudies = [
    {
      title: 'Regional Medical Center NICU Transformation',
      location: 'Texas, USA',
      challenge: 'Level II NICU lacking specialized neonatal expertise',
      solution: 'Deployed Telepulse Tele NICU with 24/7 neonatologist support',
      results: [
        '40% reduction in neonatal mortality',
        '25% decrease in average length of stay',
        '$1.2M annual cost savings',
        'Elevated to Level III NICU status'
      ],
      image: 'https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadUrl: '#'
    },
    {
      title: 'Children\'s Hospital Network Expansion',
      location: 'Ontario, Canada',
      challenge: 'Rural hospitals lacking pediatric critical care access',
      solution: 'Multi-site Tele PICU implementation across 8 facilities',
      results: [
        '50% faster response to critical events',
        '30% reduction in patient transfers',
        '95% staff satisfaction rate',
        'Improved rural healthcare access'
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadUrl: '#'
    },
    {
      title: 'International Education Initiative',
      location: 'Southeast Asia',
      challenge: 'Limited access to specialized pediatric training',
      solution: 'Comprehensive Tele-Education program for 500+ healthcare professionals',
      results: [
        '95% course completion rate',
        '80% improvement in competency scores',
        'Accredited training for 12 countries',
        'Sustainable knowledge transfer'
      ],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      downloadUrl: '#'
    }
  ];

  const testimonials = [
    {
      quote: "Telepulse has revolutionized our approach to neonatal care. The 24/7 access to specialists has directly resulted in saving lives we might have lost before.",
      author: "Dr. Maria Rodriguez",
      title: "Chief of Neonatology, Children's Medical Center",
      image: 'https://images.pexels.com/photos/559827/pexels-photo-559827.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      quote: "The predictive analytics and early warning systems have transformed our ability to intervene before critical events occur. It's truly game-changing technology.",
      author: "Dr. James Chen",
      title: "Pediatric Intensivist, Regional Hospital",
      image: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      quote: "Our nursing staff confidence has increased dramatically with the continuous support from Telepulse specialists. Patient outcomes have never been better.",
      author: "Sarah Thompson, RN",
      title: "NICU Nurse Manager, Community Hospital",
      image: 'https://images.pexels.com/photos/1068352/pexels-photo-1068352.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <>
      <SEO
        title={seoConfig.impact.title}
        description={seoConfig.impact.description}
        keywords={seoConfig.impact.keywords}
      />
      
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386439/pexels-photo-4386439.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Healthcare Impact"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Our Impact</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming pediatric critical care worldwide through innovative telemedicine solutions 
            that save lives and improve outcomes
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Making a Difference</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Every number represents lives touched, outcomes improved, and healthcare transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyNumbers.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-3xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-semibold text-[#001F5B] mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-[#B22222] mb-2">{stat.label}</div>
                <div className="text-gray-600 max-w-xs mx-auto">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Success Stories</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Real-world implementations demonstrating the transformative power of telemedicine 
              in pediatric critical care
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-[#00CFE6] mr-2" />
                    <span className="text-[#00CFE6] font-medium">{study.location}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#001F5B] mb-4">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-[#B22222] mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-[#B22222] mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#B22222] mb-3">Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2 bg-white p-2.5 rounded-lg shadow">
                          <Award className="w-5 h-5 text-[#00CFE6] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={study.downloadUrl}
                      className="bg-[#B22222] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#001F5B] transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Case Study</span>
                    </a>
                    <button className="text-[#00CFE6] font-medium hover:text-[#B22222] transition-colors duration-200 flex items-center space-x-2 text-sm">
                      <Play className="w-4 h-4" />
                      <span>Watch Video</span>
                    </button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="feature-image shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Healthcare Professional Voices</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Hear from the clinicians who are experiencing firsthand the impact of Telepulse solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <blockquote className="text-base mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="profile-image"
                  />
                  <div>
                    <div className="font-medium text-[#00CFE6]">{testimonial.author}</div>
                    <div className="text-gray-300 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Global Reach</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our impact spans continents, bringing world-class pediatric expertise to every corner of the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-full flex items-center justify-center">
                <span className="text-3xl font-semibold text-white">25+</span>
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-2">Countries Served</h3>
              <p className="text-gray-600">Delivering critical care expertise across North America, Europe, Asia, and beyond</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-full flex items-center justify-center">
                <span className="text-3xl font-semibold text-white">12</span>
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-2">Languages Supported</h3>
              <p className="text-gray-600">Breaking down language barriers to provide care in local languages and cultural contexts</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#001F5B] to-[#00CFE6] rounded-full flex items-center justify-center">
                <span className="text-3xl font-semibold text-white">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-[#001F5B] mb-2">Always Available</h3>
              <p className="text-gray-600">Round-the-clock coverage ensuring expert care is available whenever and wherever needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Be Part of Our Impact</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Join hundreds of healthcare institutions already using Telepulse to transform pediatric care 
            and save lives in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Impact Story
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  
    </>);
};

export default Impact;