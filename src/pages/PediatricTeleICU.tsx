import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, CheckCircle, ArrowRight, Users, Clock, Shield, Activity } from 'lucide-react';

const PediatricTeleICU: React.FC = () => {
  const benefits = [
    'Enhanced patient safety through continuous monitoring',
    'Rapid response to critical changes in patient condition',
    'Improved clinical decision-making with expert consultation',
    'Reduced complications and readmission rates',
    'Optimized resource utilization',
    'Standardized evidence-based care protocols',
    'Enhanced family communication and support',
    'Cost-effective critical care delivery'
  ];

  const features = [
    {
      icon: Activity,
      title: 'Continuous Monitoring',
      description: 'Real-time monitoring of all critical parameters with intelligent alerting systems that prioritize urgent interventions.'
    },
    {
      icon: Users,
      title: 'Expert Collaboration',
      description: 'Immediate access to pediatric intensivists and specialists for collaborative care planning and decision-making.'
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Advanced safety systems with multiple layers of monitoring and intervention to prevent adverse events.'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Immediate intervention capabilities with protocols for emergency situations and critical care escalation.'
    }
  ];

  const stats = [
    { value: '35%', label: 'Improved Outcomes', icon: Activity },
    { value: '50%', label: 'Faster Response', icon: Clock },
    { value: '30%', label: 'Fewer Transfers', icon: Shield },
    { value: '24/7', label: 'Expert Coverage', icon: Users }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Pediatric ICU"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Stethoscope className="w-16 h-16 text-[#00CFE6] mr-4" />
              <h1 className="text-3xl lg:text-4xl font-semibold">Pediatric Tele-ICU</h1>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring and intervention for pediatric patients in intensive care units 
              across all age groups, delivering expert critical care when and where it's needed most.
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
                The shortage of pediatric intensivists and uneven distribution of expertise leads to significant 
                care gaps in pediatric critical care. Many hospitals struggle to provide 24/7 specialized coverage, 
                resulting in delayed interventions and suboptimal outcomes for critically ill children.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Our Solution</h2>
              <p className="text-base text-gray-600 mb-6">
                Continuous remote monitoring with immediate intervention capabilities and collaborative care planning. 
                Our platform connects bedside teams with pediatric intensivists, providing real-time oversight, 
                expert consultation, and evidence-based protocols for optimal patient care.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pediatric ICU Technology"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Advanced Capabilities</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Comprehensive pediatric critical care monitoring and intervention systems designed for all age groups
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
              Measurable improvements in patient safety, outcomes, and operational efficiency
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
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Proven Impact</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Real results from pediatric ICUs using our Tele-ICU solution
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
      </section>

      {/* Case Study */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Success Story</h2>
              <h3 className="text-lg font-medium text-[#B22222] mb-3">Children's Hospital Network Implementation</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Challenge</h4>
                <p className="text-gray-600 mb-4">
                  A network of 8 rural hospitals in Ontario needed pediatric critical care expertise but lacked 
                  on-site pediatric intensivists. Patient transfers were frequent and costly, with delayed 
                  interventions affecting outcomes.
                </p>
                
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Implementation</h4>
                <p className="text-gray-600 mb-4">
                  Deployed multi-site Pediatric Tele-ICU with centralized monitoring, expert consultation, 
                  and standardized protocols. Comprehensive training program for nursing staff and physicians 
                  across all locations.
                </p>
              </div>
              
              <div className="bg-[#001F5B] text-white p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-4">Results After 18 Months</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>35% improvement in patient outcomes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>50% faster response to critical events</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>30% reduction in patient transfers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>95% staff satisfaction rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Enhance Your PICU</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Ready to provide expert pediatric critical care at your institution? Discover how 
            Pediatric Tele-ICU can transform your critical care capabilities.
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
  );
};

export default PediatricTeleICU;