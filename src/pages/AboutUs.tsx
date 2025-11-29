import React from 'react';
import { Link } from 'react-router-dom';
import {
  // Heart,
  Target,
   Eye,
  //  Award,
   Users,
    ArrowRight,
    Video,
    Database,
    Monitor,
    Shield
   } from 'lucide-react';

const AboutUs: React.FC = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Executive Officer',
      bio: 'Pediatric intensivist with 20+ years of experience. Former director of PICU at Johns Hopkins Children\'s Center.',
      image: 'https://images.pexels.com/photos/559827/pexels-photo-559827.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MD - Harvard Medical School, MBA - Wharton'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Chief Medical Officer',
      bio: 'Leading neonatologist and researcher in telemedicine applications for critical care with 100+ publications.',
      image: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MD/PhD - Stanford University, Fellowship - Boston Children\'s'
    },
    {
      name: 'Rebecca Martinez',
      title: 'Chief Technology Officer',
      bio: 'Former VP of Healthcare Technology at Philips. Expert in medical device integration and healthcare IT.',
      image: 'https://images.pexels.com/photos/1068352/pexels-photo-1068352.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MS - MIT, BS Computer Science - Carnegie Mellon'
    },
    {
      name: 'Dr. James Wilson',
      title: 'Chief Innovation Officer',
      bio: 'Pioneering researcher in AI applications for pediatric medicine. Former head of innovation at Mayo Clinic.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MD/PhD - Johns Hopkins, MS Biomedical Engineering - Duke'
    }
  ];

  // const timeline = [
  //   {
  //     year: '2018',
  //     title: 'Company Founded',
  //     description: 'Telepulse was founded by a team of pediatric specialists and technologists with a vision to revolutionize critical care.'
  //   },
  //   {
  //     year: '2019',
  //     title: 'Philips Partnership',
  //     description: 'Strategic partnership with Philips Healthcare to integrate advanced monitoring technology with telemedicine platforms.'
  //   },
  //   {
  //     year: '2020',
  //     title: 'First Deployment',
  //     description: 'Successful pilot program at Children\'s Hospital of Philadelphia, demonstrating significant improvement in patient outcomes.'
  //   },
  //   {
  //     year: '2021',
  //     title: 'Scale & Expansion',
  //     description: 'Expanded to serve 50+ hospitals across North America, monitoring thousands of critical care patients daily.'
  //   },
  //   {
  //     year: '2022',
  //     title: 'AI Integration',
  //     description: 'Launched advanced AI-powered predictive analytics for early intervention and improved clinical decision-making.'
  //   },
  //   {
  //     year: '2023',
  //     title: 'Global Reach',
  //     description: 'International expansion to Europe and Asia, serving over 200 healthcare institutions worldwide.'
  //   },
  //   {
  //     year: '2024',
  //     title: 'Research Innovation',
  //     description: 'Established dedicated research division, publishing groundbreaking studies on telemedicine effectiveness in pediatric care.'
  //   }
  // ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/About-Telepulse-1.png"
            alt="About Telepulse Medical Team"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4">About Telepulse</h1>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of pediatric critical care through innovative telemedicine solutions 
              that connect world-class expertise with patients who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-[#B22222] mr-3" />
                <h2 className="text-2xl font-semibold text-[#001F5B]">Our Vision</h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                A world where every critically ill child has access to the highest quality pediatric 
                expertise, regardless of their geographic location or local resources.
              </p>
              
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-[#00CFE6] mr-3" />
                <h2 className="text-2xl font-semibold text-[#001F5B]">Our Mission</h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                To revolutionize pediatric critical care by delivering innovative telemedicine 
                solutions that enhance clinical outcomes, reduce costs, and save lives through 
                seamless collaboration between specialists and bedside caregivers.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="random/Transform-Pediatric-critical-care.png"
                alt="Healthcare Technology"
                className="feature-image shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Telepulse Story & Philips Collaboration */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Our Story</h2>
            <p className="text-base text-gray-600 max-w-4xl mx-auto">
              Born from the urgent need to extend world-class pediatric expertise beyond hospital walls
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h3 className="text-xl font-semibold text-[#001F5B] mb-4">The Genesis</h3>
              <p className="text-base text-gray-600 mb-4">
                Telepulse was founded in 2018 by a team of pediatric intensivists who witnessed 
                firsthand the disparities in critical care access. Too many children were suffering 
                or dying simply because expert care wasn't available when and where it was needed most.
              </p>
              <p className="text-base text-gray-600 mb-4">
                Our founders recognized that technology could bridge this gap, connecting the world's 
                best pediatric specialists with patients in real-time, regardless of distance.
              </p>
              <div className="flex items-center text-[#B22222] font-medium">
                <Heart className="w-5 h-5 mr-2" />
                <span>Every child deserves expert care</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Collaboration"
                className="feature-image shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="lg:order-2">
              <h3 className="text-xl font-semibold text-[#001F5B] mb-4">Philips Partnership</h3>
              <p className="text-base text-gray-600 mb-4">
                Our strategic partnership with Philips Healthcare has been transformative, combining 
                their world-leading medical monitoring technology with our telemedicine expertise. 
                Together, we've created the most advanced pediatric tele-critical care platform 
                available today.
              </p>
              <p className="text-base text-gray-600 mb-4">
                This collaboration enables seamless integration with existing hospital systems, 
                providing clinicians with comprehensive patient data and advanced analytics to 
                make informed decisions quickly and confidently.
              </p>
              <div className="flex items-center text-[#00CFE6] font-medium">
                <Award className="w-5 h-5 mr-2" />
                <span>Innovation through partnership</span>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <img
                src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Philips Technology"
                className="feature-image shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Profiles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Leadership Team</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation in pediatric telemedicine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-16 h-16 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#001F5B] mb-1">{leader.name}</h3>
                      <div className="text-[#B22222] font-medium mb-3 text-sm">{leader.title}</div>
                      <p className="text-gray-600 mb-3 text-sm">{leader.bio}</p>
                      <div className="text-sm text-gray-500 italic">{leader.education}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Our Journey</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Milestones in our mission to revolutionize pediatric critical care
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#B22222] to-[#00CFE6]"></div>
            
            {timeline.slice(0, 5).map((event, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                    <div className="text-[#00CFE6] font-semibold text-lg mb-1">{event.year}</div>
                    <h3 className="text-base font-medium mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#B22222] to-[#00CFE6] rounded-full border-2 border-[#001F5B]"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technology Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F5B] mb-4">Strategic Technology Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading technology partners to deliver world-class
              telemedicine solutions for pediatric critical care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* RTWO Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00CFE6]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001F5B] mb-3">RTWO</h3>
              <p className="text-sm text-[#00CFE6] font-semibold mb-4">
                Real-Time Streaming & Tele-ICU Connectivity Partner
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ultra-low latency video streaming technology that enables seamless real-time communication
                between Telepulse command centers and hospital ICU floors, ensuring uninterrupted 24/7 connectivity.
              </p>
            </div>

            {/* Aishan Technologies Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00CFE6]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001F5B] mb-3">Aishan Technologies</h3>
              <p className="text-sm text-[#00CFE6] font-semibold mb-4">
                Medical Data & Device Integration Partner
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Intelligent data pipelines that connect ICU devices and vitals monitoring systems directly
                to Telepulse, enabling real-time display, alerts, and clinical decision support.
              </p>
            </div>

            {/* Philips Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00CFE6]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#001F5B] mb-3">Philips IntelliVue</h3>
              <p className="text-sm text-[#00CFE6] font-semibold mb-4">
                ICU Medical Device & Monitoring Partner
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless integration with Philips IntelliVue monitoring systems, providing clinically
                validated patient data, real-time waveforms, and multi-parameter monitoring.
              </p>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-br from-[#001F5B] to-[#003875] rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">Partnership Excellence</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our technology partnerships ensure reliability, security, and clinical accuracy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00CFE6]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-[#00CFE6]" />
                </div>
                <h4 className="font-semibold mb-2">Secure & Compliant</h4>
                <p className="text-sm text-white/70">HIPAA-compliant infrastructure with end-to-end encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00CFE6]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-6 h-6 text-[#00CFE6]" />
                </div>
                <h4 className="font-semibold mb-2">Clinically Validated</h4>
                <p className="text-sm text-white/70">Gold-standard monitoring with proven accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00CFE6]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Video className="w-6 h-6 text-[#00CFE6]" />
                </div>
                <h4 className="font-semibold mb-2">Real-Time Connectivity</h4>
                <p className="text-sm text-white/70">Ultra-low latency for instant clinical decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Join Our Mission</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            Be part of the revolution in pediatric critical care. Explore career opportunities 
            and partnership possibilities with Telepulse.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/careers"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Explore Careers</span>
            </Link>
            <Link
              to="/partners"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;