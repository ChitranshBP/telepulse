import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  // Brain, 
  Shield, 
  // Zap,
  // Activity,
  BarChart3,
  Bell,
  Workflow,
  Lock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Technology: React.FC = () => {
  const platformFeatures = [
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring with instant alerts and comprehensive dashboards for critical parameters.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Sophisticated data analysis tools providing actionable insights for improved clinical decision-making.'
    },
    {
      icon: Bell,
      title: 'Intelligent Alerts',
      description: 'Smart notification system that prioritizes critical events and reduces alert fatigue.'
    },
    {
      icon: Workflow,
      title: 'Streamlined Workflow',
      description: 'Integrated workflow management optimizing care coordination and communication between teams.'
    }
  ];

  // const aiFeatures = [
  //   {
  //     title: 'Predictive Analytics',
  //     description: 'Machine learning algorithms that identify potential complications before they occur, enabling proactive interventions.',
  //     icon: Brain
  //   },
  //   {
  //     title: 'Clinical Decision Support',
  //     description: 'AI-powered recommendations based on evidence-based protocols and patient-specific data analysis.',
  //     icon: Zap
  //   },
  //   {
  //     title: 'Automated Documentation',
  //     description: 'Intelligent documentation assistance that reduces administrative burden while ensuring compliance.',
  //     icon: Activity
  //   }
  // ];

  const securityFeatures = [
    'HIPAA Compliant Architecture',
    'End-to-End Encryption',
    'Multi-Factor Authentication',
    'Role-Based Access Control',
    'Audit Trail Logging',
    'Data Loss Prevention',
    'Regular Security Audits',
    'Compliance Monitoring'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Medical Technology"
            className="hero-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Advanced Technology</h1>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge telemedicine platform powered by AI, integrated with world-class medical devices, 
            and secured with enterprise-grade protection
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Platform Overview</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our comprehensive telemedicine platform integrates seamlessly with existing hospital systems 
              while providing advanced monitoring and analytics capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h3 className="text-xl font-semibold text-[#001F5B] mb-4">Philips Healthcare Integration</h3>
              <p className="text-base text-gray-600 mb-4">
                Our platform is built on Philips' world-leading patient monitoring technology, providing 
                seamless integration with IntelliVue monitors, IntelliSpace Critical Care and Anesthesia, 
                and other essential medical devices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#00CFE6] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Native integration with Philips IntelliVue monitors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#00CFE6] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Compatible with existing hospital IT infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#00CFE6] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Real-time data synchronization and backup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#00CFE6] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Scalable cloud-based architecture</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Philips Integration"
                className="feature-image shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#B22222] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-base font-semibold text-[#001F5B] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Automation */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">AI & Automation</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Artificial intelligence that learns from millions of data points to provide predictive insights 
              and clinical decision support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#001F5B] rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#001F5B] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#001F5B] mb-4">Machine Learning Capabilities</h3>
              <p className="text-base text-gray-600 mb-4">
                Our AI algorithms continuously learn from patient data across our network, improving 
                prediction accuracy and treatment recommendations over time. The system identifies 
                patterns that might be missed by human observation alone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#001F5B] rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">95%</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#001F5B] text-sm">Prediction Accuracy</div>
                    <div className="text-gray-600 text-sm">For early sepsis detection</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#B22222] rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">30%</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#001F5B] text-sm">Faster Interventions</div>
                    <div className="text-gray-600 text-sm">Through predictive alerts</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#00CFE6] rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">60%</span>
                  </div>
                  <div>
                    <div className="font-medium text-[#001F5B] text-sm">Reduced False Alarms</div>
                    <div className="text-gray-600 text-sm">Smart filtering algorithms</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Technology"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Data Security */}
      <section className="py-12 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Enterprise Security</h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Bank-level security with comprehensive compliance to protect sensitive patient data 
              and ensure regulatory adherence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#00CFE6] mr-3" />
                <h3 className="text-xl font-semibold">HIPAA Compliant Platform</h3>
              </div>
              <p className="text-base text-gray-300 mb-6">
                Our platform exceeds HIPAA requirements and maintains compliance with international 
                healthcare data protection standards including GDPR, PIPEDA, and local telemedicine 
                regulations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg backdrop-blur-lg">
                    <Lock className="w-5 h-5 text-[#00CFE6] flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Security Technology"
                className="feature-image shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001F5B]/40 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-2xl font-semibold text-[#00CFE6] mb-1">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-2xl font-semibold text-[#00CFE6] mb-1">256-bit</div>
              <div className="text-gray-300 text-sm">AES Encryption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-2xl font-semibold text-[#00CFE6] mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#001F5B] mb-4">Seamless Integration</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Built to work with your existing systems, our platform integrates with leading 
              healthcare technologies and EHR systems
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B22222] rounded-xl flex items-center justify-center mb-3">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">Philips IntelliVue</h4>
              </div>
              {/* <div className="text-center">
                <div className="w-16 h-16 bg-[#001F5B] rounded-xl flex items-center justify-center mb-3">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">Epic EHR</h4>
              </div> */}
              {/* <div className="text-center">
                <div className="w-16 h-16 bg-[#B22222] rounded-xl flex items-center justify-center mb-3">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">Cerner PowerChart</h4>
              </div> */}
              {/* <div className="text-center">
                <div className="w-16 h-16 bg-[#001F5B] rounded-xl flex items-center justify-center mb-3">
                  <Workflow className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">MEDITECH</h4>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#B22222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Experience the Technology</h2>
          <p className="text-base mb-6 max-w-3xl mx-auto">
            See how our advanced platform can transform your critical care capabilities. 
            Schedule a personalized demonstration today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#001F5B] px-6 py-3 rounded-full font-medium hover:bg-[#001F5B] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#001F5B] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;