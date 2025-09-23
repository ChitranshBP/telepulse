import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, GraduationCap, Search, ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 'nicu',
      icon: Heart,
      title: 'NICU Tele-care',
      subtitle: 'Specialized Neonatal Intensive Care',
      description: 'Advanced telemedicine solutions specifically designed for the unique challenges of neonatal critical care.',
      image: 'https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg?auto=compress&cs=tinysrgb&w=800',
      problem: 'Many hospitals lack specialized neonatal expertise, leading to suboptimal outcomes for critically ill newborns.',
      model: '24/7 remote monitoring and consultation with board-certified neonatologists and NICU specialists.',
      benefits: [
        'Improved survival rates for premature and critically ill newborns',
        'Reduced length of stay in NICU',
        '24/7 access to specialized neonatal expertise',
        'Enhanced family communication and support',
        'Standardized evidence-based care protocols'
      ],
      caseStudy: {
        title: 'Regional Medical Center NICU Program',
        outcome: '40% reduction in mortality rates and 25% decrease in average length of stay within the first year of implementation.'
      }
    },
    {
      id: 'picu',
      icon: Stethoscope,
      title: 'Pediatric Tele-ICU',
      subtitle: 'Comprehensive Critical Care',
      description: 'Real-time monitoring and intervention for pediatric patients in intensive care units across all age groups.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      problem: 'Shortage of pediatric intensivists and uneven distribution of expertise leads to care gaps.',
      model: 'Continuous remote monitoring with immediate intervention capabilities and collaborative care planning.',
      benefits: [
        'Enhanced patient safety through continuous monitoring',
        'Rapid response to critical changes in patient condition',
        'Improved clinical decision-making with expert consultation',
        'Reduced complications and readmission rates',
        'Optimized resource utilization'
      ],
      caseStudy: {
        title: 'Children\'s Hospital Network Implementation',
        outcome: '35% improvement in patient outcomes and 50% faster response times to critical events.'
      }
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Tele-Education',
      subtitle: 'Professional Development & Training',
      description: 'Comprehensive education and training programs for healthcare professionals in pediatric critical care.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      problem: 'Limited access to specialized pediatric training programs and continuing education opportunities.',
      model: 'Interactive online learning platform with accredited courses, simulation training, and mentorship programs.',
      benefits: [
        'Accredited continuing education credits',
        'Interactive simulation-based training',
        'Mentorship from leading pediatric specialists',
        'Flexible learning schedules',
        'Global access to expert knowledge'
      ],
      caseStudy: {
        title: 'International Nursing Education Program',
        outcome: '95% completion rate with significant improvement in clinical competency scores across participating institutions.'
      }
    },
    {
      id: 'research',
      icon: Search,
      title: 'Research & Innovation',
      subtitle: 'Evidence-Based Advancement',
      description: 'Cutting-edge research initiatives driving innovation in pediatric telemedicine and clinical outcomes.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      problem: 'Limited research data on telemedicine effectiveness in pediatric critical care settings.',
      model: 'Collaborative research network conducting multi-center studies on telemedicine outcomes and best practices.',
      benefits: [
        'Evidence-based clinical protocols',
        'Continuous improvement through data analysis',
        'Publication of research findings',
        'Innovation in pediatric telemedicine',
        'Contribution to medical knowledge'
      ],
      caseStudy: {
        title: 'Multi-Center Outcomes Study',
        outcome: 'Published landmark study in NEJM showing 30% improvement in pediatric critical care outcomes with telemedicine.'
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386439/pexels-photo-4386439.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Medical Solutions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Our Solutions</h1>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive telemedicine solutions designed to transform pediatric critical care 
            and save lives around the world
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Complete Care Ecosystem</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              From neonatal intensive care to continuing education, our integrated solutions 
              cover every aspect of pediatric critical care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {solutions.slice(0, 2).map((solution, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center mb-2">
                        <solution.icon className="w-6 h-6 text-[#00CFE6] mr-2" />
                        <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                      </div>
                      <p className="text-[#00CFE6] font-medium text-sm">{solution.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">{solution.description}</p>
                    <Link
                      to={`/${solution.id}`}
                      className="text-[#B22222] font-medium hover:text-[#00CFE6] transition-colors duration-200 flex items-center space-x-2 text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.slice(2, 4).map((solution, index) => (
              <div key={index + 2} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center mb-2">
                        <solution.icon className="w-6 h-6 text-[#00CFE6] mr-2" />
                        <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                      </div>
                      <p className="text-[#00CFE6] font-medium text-sm">{solution.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm">{solution.description}</p>
                    <Link
                      to={`/${solution.id}`}
                      className="text-[#B22222] font-medium hover:text-[#00CFE6] transition-colors duration-200 flex items-center space-x-2 text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solution Sections */}
      {solutions.map((solution, index) => (
        <section key={index} id={solution.id} className={`py-12 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="flex items-center mb-4">
                  <solution.icon className="w-8 h-8 text-[#B22222] mr-3" />
                  <h2 className="text-2xl font-semibold text-[#001F5B]">{solution.title}</h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#001F5B] mb-3">The Problem</h3>
                  <p className="text-base text-gray-600 mb-4">{solution.problem}</p>
                  
                  <h3 className="text-lg font-medium text-[#001F5B] mb-3">Our Model</h3>
                  <p className="text-base text-gray-600 mb-4">{solution.model}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#001F5B] mb-3">Key Benefits</h3>
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#00CFE6] mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#001F5B] text-white p-4 rounded-xl">
                  <h4 className="text-base font-medium mb-2">{solution.caseStudy.title}</h4>
                  <p className="text-gray-200 text-sm">{solution.caseStudy.outcome}</p>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Proven Results</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver measurable improvements in patient outcomes and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B22222] rounded-xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-2xl font-semibold mb-1">35%</div>
              <div className="text-[#00CFE6] font-medium text-sm">Improvement in Patient Outcomes</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#00CFE6] rounded-xl flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="text-2xl font-semibold mb-1">50%</div>
              <div className="text-[#00CFE6] font-medium text-sm">Faster Response Times</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#001F5B] rounded-xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-2xl font-semibold mb-1">25%</div>
              <div className="text-[#00CFE6] font-medium text-sm">Reduction in Complications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Ready to Transform Your Care?</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Discover how Telepulse solutions can enhance your pediatric critical care capabilities 
            and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/technology"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;