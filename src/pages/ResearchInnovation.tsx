import React from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle, ArrowRight, Users, Clock, Award, BarChart3 } from 'lucide-react';

const ResearchInnovation: React.FC = () => {
  const benefits = [
    'Evidence-based clinical protocols',
    'Continuous improvement through data analysis',
    'Publication of research findings',
    'Innovation in pediatric telemedicine',
    'Contribution to medical knowledge',
    'Multi-center collaborative studies',
    'Real-world evidence generation',
    'Regulatory compliance support'
  ];

  const features = [
    {
      icon: BarChart3,
      title: 'Data Analytics Platform',
      description: 'Advanced analytics tools for processing large-scale clinical data and generating actionable insights for research.'
    },
    {
      icon: Users,
      title: 'Collaborative Network',
      description: 'Global network of research institutions and healthcare providers contributing to multi-center studies.'
    },
    {
      icon: Award,
      title: 'Publication Support',
      description: 'Comprehensive support for research publication in peer-reviewed journals and medical conferences.'
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Continuous data collection and monitoring systems for longitudinal studies and outcome tracking.'
    }
  ];

  // const stats = [
  //   { value: '50+', label: 'Research Studies', icon: Search },
  //   { value: '25', label: 'Publications', icon: Award },
  //   { value: '200+', label: 'Participating Sites', icon: Users },
  //   { value: '100K+', label: 'Patient Records', icon: BarChart3 }
  // ];

  // const researchAreas = [
  //   {
  //     title: 'Telemedicine Effectiveness',
  //     description: 'Comprehensive studies on clinical outcomes, cost-effectiveness, and quality improvements through telemedicine implementation.',
  //     publications: 8,
  //     status: 'Ongoing'
  //   },
  //   {
  //     title: 'AI in Pediatric Care',
  //     description: 'Research on artificial intelligence applications for predictive analytics, early warning systems, and clinical decision support.',
  //     publications: 6,
  //     status: 'Active'
  //   },
  //   {
  //     title: 'Quality Improvement',
  //     description: 'Studies on quality metrics, patient safety improvements, and standardization of care protocols in telemedicine settings.',
  //     publications: 5,
  //     status: 'Ongoing'
  //   },
  //   {
  //     title: 'Healthcare Access',
  //     description: 'Research on improving healthcare access in rural and underserved communities through telemedicine solutions.',
  //     publications: 6,
  //     status: 'Active'
  //   }
  // ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Medical Research"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Search className="w-16 h-16 text-[#00CFE6] mr-4" />
              <h1 className="text-3xl lg:text-4xl font-semibold">Research & Innovation</h1>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge research initiatives driving innovation in pediatric telemedicine and clinical outcomes, 
              advancing the science of remote healthcare delivery.
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
                Limited research data on telemedicine effectiveness in pediatric critical care settings creates 
                uncertainty about best practices, optimal implementation strategies, and long-term outcomes. 
                Healthcare providers need evidence-based guidance for successful telemedicine programs.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Our Approach</h2>
              <p className="text-base text-gray-600 mb-6">
                Collaborative research network conducting multi-center studies on telemedicine outcomes and best practices. 
                Our comprehensive research program generates real-world evidence, develops clinical protocols, 
                and advances the field of pediatric telemedicine through rigorous scientific investigation.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Research Technology"
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
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Research Capabilities</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Advanced research infrastructure and collaborative networks for conducting high-quality clinical studies
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

      {/* Research Areas */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Research Focus Areas</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Key areas of investigation driving innovation in pediatric telemedicine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-3">{area.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{area.publications} Publications</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{area.status}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#001F5B] text-white py-2.5 rounded-lg font-medium hover:bg-[#B22222] transition-colors duration-200">
                  View Research
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Research Impact</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              How our research initiatives contribute to advancing pediatric telemedicine and improving patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow">
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
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Research Portfolio</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Scale and scope of our research initiatives in pediatric telemedicine
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
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Landmark Study</h2>
              <h3 className="text-lg font-medium text-[#B22222] mb-3">Multi-Center Outcomes Study</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Study Overview</h4>
                <p className="text-gray-600 mb-4">
                  Comprehensive multi-center study involving 200+ hospitals across North America and Europe, 
                  analyzing the impact of telemedicine on pediatric critical care outcomes over a 3-year period. 
                  The largest study of its kind in pediatric telemedicine.
                </p>
                
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Methodology</h4>
                <p className="text-gray-600 mb-4">
                  Randomized controlled trial comparing traditional care with telemedicine-enhanced care, 
                  measuring mortality rates, length of stay, complications, and cost-effectiveness across 
                  diverse patient populations and hospital settings.
                </p>
              </div>
              
              <div className="bg-[#001F5B] text-white p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-4">Key Findings</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>30% improvement in pediatric critical care outcomes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>Published in New England Journal of Medicine</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>Influenced international telemedicine guidelines</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>Established new standards of care</span>
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
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Join Our Research Network</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Collaborate with leading researchers and contribute to advancing pediatric telemedicine. 
            Participate in groundbreaking studies that shape the future of healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Collaborate With Us
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
  );
};

export default ResearchInnovation;