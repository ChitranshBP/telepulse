import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, MapPin, Clock, ArrowRight, Building, Briefcase, GraduationCap, Coffee } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Healthcare Coverage',
      description: 'Comprehensive medical, dental, and vision insurance for you and your family'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuing education support, conference attendance, and skill development programs'
    },
    {
      icon: Award,
      title: 'Equity & Bonuses',
      description: 'Competitive salary, performance bonuses, and equity participation'
    },
    {
      icon: Coffee,
      title: 'Wellness Programs',
      description: 'Mental health support, fitness reimbursement, and wellness initiatives'
    },
    {
      icon: Building,
      title: 'Modern Workspace',
      description: 'State-of-the-art facilities with latest technology and collaborative spaces'
    }
  ];

  const openRoles = [
    {
      title: 'Senior Pediatric Telemedicine Physician',
      department: 'Clinical',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead clinical operations and provide expert consultation for our NICU and PICU telemedicine programs.',
      requirements: [
        'Board certification in Pediatrics or Neonatology',
        'Experience in critical care medicine',
        'Telemedicine experience preferred',
        'Strong communication and technology skills'
      ]
    },
    {
      title: 'Healthcare Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and maintain HIPAA-compliant healthcare applications and integration systems.',
      requirements: [
        'BS/MS in Computer Science or related field',
        'Experience with healthcare IT systems',
        'Knowledge of HIPAA and healthcare regulations',
        'Proficiency in modern web technologies'
      ]
    },
    {
      title: 'Clinical Implementation Specialist',
      department: 'Operations',
      location: 'Multiple locations',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Support hospital partners in implementing and optimizing telemedicine programs.',
      requirements: [
        'Clinical background (RN, RT, or similar)',
        'Project management experience',
        'Travel availability (50%)',
        'Strong interpersonal and training skills'
      ]
    },
    {
      title: 'Data Scientist - Healthcare Analytics',
      department: 'Technology',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop machine learning models for predictive analytics in pediatric critical care.',
      requirements: [
        'PhD/MS in Data Science, Statistics, or related field',
        'Experience with healthcare data',
        'Machine learning and statistical modeling expertise',
        'Python, R, and SQL proficiency'
      ]
    },
    {
      title: 'Partnership Development Manager',
      department: 'Business Development',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build strategic partnerships with hospitals, health systems, and technology companies.',
      requirements: [
        'MBA or equivalent business experience',
        'Healthcare industry background',
        'Strong negotiation and relationship building skills',
        'Experience with partnership agreements'
      ]
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Clinical Quality',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure clinical quality standards and regulatory compliance across all telemedicine programs.',
      requirements: [
        'Clinical background with quality improvement experience',
        'Knowledge of healthcare regulations and accreditation',
        'Data analysis and reporting skills',
        'Attention to detail and process improvement mindset'
      ]
    }
  ];

  const values = [
    {
      title: 'Patient First',
      description: 'Every decision we make prioritizes patient outcomes and safety above all else.'
    },
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in healthcare technology.'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.'
    },
    {
      title: 'Excellence',
      description: 'We set the highest standards for ourselves and our work.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386439/pexels-photo-4386439.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Healthcare Careers"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Join Our Mission</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6">
            Be part of a team that's revolutionizing pediatric critical care and saving lives 
            through innovative telemedicine solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#open-positions"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </Link>
            <a
              href="#why-telepulse"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300"
            >
              Why Telepulse?
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Telepulse */}
      <section id="why-telepulse" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Why Join Telepulse?</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Work with world-class talent to make a meaningful impact in healthcare while building your career
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#001F5B] mb-4">Make a Real Difference</h3>
              <p className="text-base text-gray-600 mb-4">
                Every line of code, every clinical consultation, every partnership you help build directly 
                contributes to saving lives and improving outcomes for critically ill children. Your work 
                has immediate, measurable impact on patients around the world.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#00CFE6] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-600 text-sm">Direct impact on patient outcomes and lives saved</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#00CFE6] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-600 text-sm">Work with cutting-edge medical technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#00CFE6] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-600 text-sm">Collaborate with leading healthcare institutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#00CFE6] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-600 text-sm">Shape the future of pediatric telemedicine</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Collaboration"
                className="feature-image shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Comprehensive Benefits</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can focus on taking care of patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Open Positions</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help us revolutionize pediatric critical care
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#001F5B] mb-2">{role.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm">{role.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{role.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{role.type}</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-[#00CFE6] text-[#001F5B] px-3 py-1 rounded-full text-sm font-medium">
                        {role.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{role.description}</p>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <h4 className="font-medium text-[#001F5B] mb-3">Key Requirements:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {role.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#B22222] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                      {role.requirements.length > 3 && (
                        <li className="text-[#00CFE6] text-sm">+{role.requirements.length - 3} more requirements</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="lg:col-span-1 flex flex-col space-y-3">
                    <button className="bg-[#B22222] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#001F5B] transition-colors duration-200 flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see a role that fits? We're always looking for exceptional talent.</p>
            <button className="bg-[#001F5B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#B22222] transition-colors duration-200">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Culture & Team */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Our Culture</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              We foster an inclusive, collaborative environment where innovation thrives and every team member can grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Diverse & Inclusive</h3>
              <p className="text-gray-300">
                We believe diverse perspectives lead to better solutions and outcomes. Our team represents 
                various backgrounds, experiences, and expertise areas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#001F5B] to-[#00CFE6] rounded-full flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Growth Focused</h3>
              <p className="text-gray-300">
                We invest in our people through continuous learning opportunities, mentorship programs, 
                and career development paths.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#B22222] to-[#001F5B] rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Results Driven</h3>
              <p className="text-gray-300">
                We celebrate achievements, learn from setbacks, and maintain a relentless focus on 
                delivering exceptional results for our patients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Ready to Make an Impact?</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Join our mission to revolutionize pediatric critical care and help save lives around the world. 
            Your next career move could change everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <a
              href="#open-positions"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300"
            >
              View All Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;