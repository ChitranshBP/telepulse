import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle, ArrowRight, Users, Clock, Award, BookOpen } from 'lucide-react';

const TeleEducation: React.FC = () => {
  const benefits = [
    'Accredited continuing education credits',
    'Interactive simulation-based training',
    'Mentorship from leading pediatric specialists',
    'Flexible learning schedules',
    'Global access to expert knowledge',
    'Competency-based assessment programs',
    'Multi-language support and localization',
    'Cost-effective professional development'
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Extensive library of courses covering all aspects of pediatric critical care, from basic principles to advanced procedures.'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from world-renowned pediatric specialists and intensivists from leading medical institutions globally.'
    },
    {
      icon: Award,
      title: 'Accredited Programs',
      description: 'Earn continuing education credits and certifications recognized by major medical associations and licensing boards.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Self-paced learning modules with 24/7 access, allowing professionals to learn on their own schedule.'
    }
  ];

  // const stats = [
  //   { value: '95%', label: 'Completion Rate', icon: Award },
  //   { value: '80%', label: 'Competency Improvement', icon: BookOpen },
  //   { value: '12', label: 'Countries Served', icon: Users },
  //   { value: '500+', label: 'Healthcare Professionals', icon: GraduationCap }
  // ];

  // const programs = [
  //   {
  //     title: 'Neonatal Critical Care Certification',
  //     duration: '40 hours',
  //     credits: '40 CME',
  //     description: 'Comprehensive program covering advanced neonatal care, ventilation strategies, and emergency interventions.'
  //   },
  //   {
  //     title: 'Pediatric Emergency Medicine',
  //     duration: '30 hours',
  //     credits: '30 CME',
  //     description: 'Essential skills for pediatric emergency situations, including trauma care and critical procedures.'
  //   },
  //   {
  //     title: 'Telemedicine Best Practices',
  //     duration: '20 hours',
  //     credits: '20 CME',
  //     description: 'Training on effective telemedicine delivery, technology use, and patient communication strategies.'
  //   },
  //   {
  //     title: 'Quality Improvement in Pediatric Care',
  //     duration: '25 hours',
  //     credits: '25 CME',
  //     description: 'Methods for implementing quality improvement initiatives and measuring outcomes in pediatric settings.'
  //   }
  // ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="assets/Our Solutions-page/Our-Solutions-banner.png"
            alt="Medical Education"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-[#00CFE6] mr-4" />
              <h1 className="text-3xl lg:text-4xl font-semibold">Tele-Education</h1>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive education and training programs for healthcare professionals in pediatric critical care, 
              delivering world-class expertise through innovative online learning platforms.
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
                Limited access to specialized pediatric training programs and continuing education opportunities 
                creates significant knowledge gaps among healthcare professionals. Geographic barriers, cost 
                constraints, and scheduling conflicts prevent many from accessing high-quality education.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#001F5B] mb-4">Our Solution</h2>
              <p className="text-base text-gray-600 mb-6">
                Interactive online learning platform with accredited courses, simulation training, and mentorship 
                programs. Our comprehensive curriculum provides flexible, accessible education that fits into 
                busy healthcare schedules while maintaining the highest standards of medical education.
              </p>
            </div>
            <div>
              <img
                src="assets/Our Solutions-page/Tele-Education.png"
                alt="Medical Education Technology"
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
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Learning Platform Features</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Advanced educational technology designed specifically for healthcare professional development
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

      {/* Training Programs */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Training Programs</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Specialized certification programs designed for different aspects of pediatric critical care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{program.credits}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#001F5B] text-white py-2.5 rounded-lg font-medium hover:bg-[#B22222] transition-colors duration-200">
                  Learn More
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
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Educational Benefits</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Comprehensive professional development opportunities that advance careers and improve patient care
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
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Educational Impact</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes from our global education initiatives
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
              <h3 className="text-lg font-medium text-[#B22222] mb-3">International Nursing Education Program</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Challenge</h4>
                <p className="text-gray-600 mb-4">
                  Healthcare professionals in Southeast Asia needed access to specialized pediatric training 
                  but faced barriers including cost, travel restrictions, and language differences. 
                  Local training programs were limited and outdated.
                </p>
                
                <h4 className="text-lg font-medium text-[#001F5B] mb-3">Implementation</h4>
                <p className="text-gray-600 mb-4">
                  Launched comprehensive Tele-Education program with localized content, multi-language support, 
                  and culturally appropriate case studies. Provided mentorship and ongoing support for 
                  500+ healthcare professionals across 12 countries.
                </p>
              </div>
              
              <div className="bg-[#001F5B] text-white p-6 rounded-xl">
                <h4 className="text-lg font-medium mb-4">Results After 24 Months</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>95% course completion rate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>80% improvement in competency scores</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>Accredited training for 12 countries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00CFE6] rounded-full flex items-center justify-center">
                      <span className="text-[#001F5B] font-bold text-sm">✓</span>
                    </div>
                    <span>Sustainable knowledge transfer</span>
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
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Advance Your Expertise</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Ready to enhance your pediatric critical care knowledge and skills? Explore our 
            comprehensive education programs and start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Enroll Now
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

export default TeleEducation;