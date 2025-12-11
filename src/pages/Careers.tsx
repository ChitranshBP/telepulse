import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, MapPin, Clock, ArrowRight, Building, Briefcase, GraduationCap, Coffee,Send, CheckCircle } from 'lucide-react';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

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
      title: 'HR Manager',
      department: 'Human Resources',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '5+ years',
      description: 'An experienced HR Manager specializing in healthcare and telemedicine environments, responsible for building and sustaining high-performance teams at Tele Pulse Pediatrics. Skilled in talent acquisition, onboarding, performance management, staff training, compliance, and employee engagement. Plays a key role in aligning workforce strategies with organizational goals, fostering a positive workplace culture, and ensuring efficient HR operations to support high-quality pediatric healthcare delivery in a digital-first environment.',
      requirements: [
        'Expertise in talent acquisition and onboarding',
        'Experience in healthcare and telemedicine environments',
        'Strong performance management and training skills',
        'Knowledge of compliance and employee engagement',
        'Ability to align workforce strategies with organizational goals'
      ]
    },
    {
      title: 'Virtual Nurse Assistant',
      department: 'Clinical Care',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'A dedicated Virtual Nurse Assistant supporting remote pediatric care delivery through Telepulse Paediatrics, with strong expertise in patient triage, virtual consultations support, care coordination, and family education. Skilled in monitoring patient symptoms, documenting clinical data, assisting pediatric specialists during teleconsultations, and ensuring continuity of care through digital platforms. Committed to delivering compassionate, timely, and high-quality support to children and their families in a virtual healthcare environment.',
      requirements: [
        'Experience in patient triage and virtual consultations',
        'Strong care coordination and family education skills',
        'Proficiency in monitoring patient symptoms and clinical documentation',
        'Ability to assist pediatric specialists during teleconsultations',
        'Commitment to compassionate and high-quality virtual care'
      ]
    },
    {
      title: 'Biomedical Engineer',
      department: 'Technology & Infrastructure',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'A skilled Biomedical Engineer supporting the technological backbone of Telepulse Paediatrics, specializing in the maintenance, calibration, and optimization of medical and telehealth equipment. Experienced in managing remote monitoring systems, medical devices, and digital healthcare infrastructure to ensure seamless and reliable virtual pediatric care. Plays a vital role in equipment safety, troubleshooting, compliance, and innovation, enabling high-quality, technology-driven healthcare delivery for pediatric patients.',
      requirements: [
        'Expertise in maintenance and calibration of medical equipment',
        'Experience with remote monitoring systems and telehealth devices',
        'Strong troubleshooting and equipment safety knowledge',
        'Understanding of healthcare compliance and regulations',
        'Ability to support digital healthcare infrastructure'
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
            src="/assets/Join Our Mission/Join-Our-Mission.png"
            alt="Join Our Mission - Healthcare Careers"
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
                src="assets/Join Our Mission/Why Join Telepulse.png"
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
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#B22222] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1 flex items-center">
                    <a
                      href="#application-form"
                      className="w-full bg-[#B22222] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#001F5B] transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see a role that fits? We're always looking for exceptional talent.</p>
            <a
              href="#application-form"
              className="inline-block bg-[#001F5B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#B22222] transition-colors duration-200"
            >
              Send Us Your Resume
            </a>
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

      {/* Application Form */}
      <section id="application-form" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Apply for a Position</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Submit your application and join our mission to revolutionize pediatric critical care
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B22222] rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001F5B] mb-3">Application Submitted Successfully!</h3>
              <p className="text-base text-gray-600 mb-6">
                Thank you for your interest in joining Telepulse. Our HR team will review your application and get back to you within 5-7 business days.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#B22222] text-white px-8 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#001F5B] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#001F5B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#001F5B] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-[#001F5B] mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a position</option>
                    <option value="hr-manager">HR Manager</option>
                    <option value="virtual-nurse">Virtual Nurse Assistant</option>
                    <option value="biomedical-engineer">Biomedical Engineer</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-[#001F5B] mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-[#001F5B] mb-2">
                  Upload Resume/CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00CFE6] file:text-[#001F5B] hover:file:bg-[#001F5B] hover:file:text-white"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div className="mb-6">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-[#001F5B] mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  rows={6}
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00CFE6] focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit for Telepulse..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#B22222] text-white px-8 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll review your application and respond within 5-7 business days
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;