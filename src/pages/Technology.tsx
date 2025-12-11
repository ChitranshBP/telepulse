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
  ArrowRight,
  Video,
  Database,
  Wifi,
  Server,
  Zap
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
            src="/assets/Advanced Technology/Advanced-Technology.png"
            alt="Advanced Medical Technology"
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
                src="assets/Advanced Technology/Philips-Healthcare-Integration.png"
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
                src="random\hippa.jpg"
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B22222] rounded-xl flex items-center justify-center mb-3">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">Philips IntelliVue</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-xl flex items-center justify-center mb-3">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">Aishan Technologies</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#001F5B] rounded-xl flex items-center justify-center mb-3">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-medium text-[#001F5B] text-sm">RTWO</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners - Detailed Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001F5B] mb-4">
              Technology Partners & Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is built on enterprise-grade technology partnerships that ensure
              reliability, security, and seamless clinical workflows
            </p>
          </div>

          {/* Partner Cards */}
          <div className="space-y-12 mb-16">
            {/* RTWO Partner */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Column - Content */}
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B22222] to-[#8B1818] rounded-2xl flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#001F5B]">RTWO</h3>
                      <p className="text-sm text-[#00CFE6] font-semibold">
                        Real-Time Streaming & Connectivity
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    RTWO powers Telepulse with secure, low-latency streaming technology designed for
                    clinical environments. Their WebRTC-based system enables real-time audio-video
                    connectivity between Telepulse command centers and hospital ICU floors.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-[#001F5B] mb-3">Key Integrations:</h4>
                    {['Ultra-low latency live ICU streaming', 'Two-way audio & video communication', 'Encrypted communication channels', 'Multi-camera ICU room support', 'High-availability streaming for 24×7 connectivity'].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00CFE6] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#00CFE6]/10 rounded-xl p-4">
                    <h4 className="font-semibold text-[#001F5B] mb-2">Clinical Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Enables seamless tele-ICU rounds</li>
                      <li>• Ensures clear communication in low-bandwidth regions</li>
                      <li>• Allows instant clinical interventions</li>
                      <li>• Reduces dependency on on-site specialists</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Image & Cards */}
                <div className="order-1 lg:order-2">
                  {/* Hero Image */}
                  <div className="relative h-64 lg:h-80">
                    <img
                      src="/assets/Advanced Technology/Technology-Partners.png"
                      alt="RTWO Video Streaming Technology"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001F5B]/60"></div>
                  </div>

                  {/* Info Cards */}
                  <div className="bg-gradient-to-br from-[#001F5B] to-[#003875] p-6 lg:p-8">
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Wifi className="w-6 h-6 text-[#00CFE6]" />
                          <h4 className="text-white font-semibold">Network Performance</h4>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <p>• &lt;100ms latency for real-time interaction</p>
                          <p>• 99.9% uptime SLA guarantee</p>
                          <p>• Adaptive bitrate streaming</p>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-6 h-6 text-[#00CFE6]" />
                          <h4 className="text-white font-semibold">Security</h4>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <p>• End-to-end encryption (AES-256)</p>
                          <p>• HIPAA & GDPR compliant</p>
                          <p>• Secure WebRTC protocols</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aishan Technologies Partner */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Right Column - Content */}
                <div className="lg:order-2 p-8 lg:p-12 order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-2xl flex items-center justify-center">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#001F5B]">Aishan Technologies</h3>
                      <p className="text-sm text-[#6366F1] font-semibold">
                        Medical Data & Device Integration
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Aishan Technologies provides intelligent data pipelines for ICU devices and vitals
                    monitoring. Their system connects bedside monitors and biomedical devices directly
                    to Telepulse, enabling real-time vitals display, alerts, and clinical decision support.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-[#001F5B] mb-3">Key Integrations:</h4>
                    {['Real-time vital signs ingestion (HR, SpO₂, BP, ECG, RR, Temp)', 'Device-to-cloud ICU connectivity', 'Smart alerts & early warning notifications', 'FHIR/HL7 compatible data standards', 'Secure medical data APIs', 'Historical vitals, trends, and insights'].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#6366F1] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#6366F1]/10 rounded-xl p-4">
                    <h4 className="font-semibold text-[#001F5B] mb-2">Clinical Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Unified ICU vitals dashboard</li>
                      <li>• Continuous monitoring of critical changes</li>
                      <li>• Supports faster clinical decisions</li>
                      <li>• Reduces manual documentation for staff</li>
                    </ul>
                  </div>
                </div>

                {/* Left Column - Image & Cards */}
                <div className="lg:order-1 order-1">
                  {/* Hero Image */}
                  <div className="relative h-64 lg:h-80">
                    <img
                      src="/assets/Advanced Technology/Aishan-Technologies.png"
                      alt="Aishan Technologies Medical Data Integration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6366F1]/60"></div>
                  </div>

                  {/* Info Cards */}
                  <div className="bg-gradient-to-br from-[#6366F1] to-[#4F46E5] p-6 lg:p-8">
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Server className="w-6 h-6 text-white" />
                          <h4 className="text-white font-semibold">Data Integration</h4>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <p>• Real-time data synchronization</p>
                          <p>• Multi-device aggregation</p>
                          <p>• Interoperable data standards</p>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="w-6 h-6 text-white" />
                          <h4 className="text-white font-semibold">Performance</h4>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <p>• Sub-second data processing</p>
                          <p>• Scalable cloud architecture</p>
                          <p>• 24/7 monitoring & support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philips Partner */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Column - Content */}
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#001F5B] to-[#B22222] rounded-2xl flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#001F5B]">Philips IntelliVue</h3>
                      <p className="text-sm text-[#00CFE6] font-semibold">
                        ICU Medical Device & Monitoring
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Telepulse integrates seamlessly with Philips IntelliVue, one of the world's most
                    trusted ICU monitoring ecosystems. This ensures accurate vitals, real-time waveforms,
                    and dependable patient data delivery for remote specialists reviewing critical cases.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-[#001F5B] mb-3">Key Integrations:</h4>
                    {['Compatibility with Philips IntelliVue monitors', 'Real-time vitals extraction', 'Multi-parameter monitoring (ECG, IBP, NIBP, SpO₂, CO₂, Temp, Resp)', 'Waveform streaming support', 'Clinically validated accuracy'].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00CFE6] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#00CFE6]/10 rounded-xl p-4">
                    <h4 className="font-semibold text-[#001F5B] mb-2">Clinical Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Uses existing ICU hardware—no replacements needed</li>
                      <li>• Ensures global-standard patient safety</li>
                      <li>• Smooth Telepulse ecosystem integration</li>
                      <li>• Fast setup and reliable data flow</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Image & Cards */}
                <div className="order-1 lg:order-2">
                  {/* Hero Image */}
                  <div className="relative h-64 lg:h-80">
                    <img
                      src="/assets/Advanced Technology/Philips-IntelliVue.png"
                      alt="Philips IntelliVue Medical Monitoring Equipment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#B22222]/60"></div>
                  </div>

                  {/* Info Cards */}
                  <div className="bg-gradient-to-br from-[#B22222] to-[#8B1818] p-6 lg:p-8">
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Monitor className="w-6 h-6 text-[#00CFE6]" />
                          <h4 className="text-white font-semibold">Clinical Grade</h4>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <p>• FDA-approved medical devices</p>
                          <p>• Hospital-grade accuracy</p>
                          <p>• Proven reliability worldwide</p>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle className="w-6 h-6 text-[#00CFE6]" />
                          <h4 className="text-white font-semibold">Compatibility</h4>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <p>• Works with existing infrastructure</p>
                          <p>• Minimal setup required</p>
                          <p>• Seamless integration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Summary */}
          <div className="bg-gradient-to-r from-[#001F5B] to-[#B22222] rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Complete Integration Ecosystem
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Our technology stack is designed for enterprise healthcare, combining the best-in-class
              partners to deliver unmatched reliability, security, and clinical excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#00CFE6] mb-2">99.9%</div>
                <div className="text-sm text-white/80">System Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00CFE6] mb-2">&lt;100ms</div>
                <div className="text-sm text-white/80">Streaming Latency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00CFE6] mb-2">100%</div>
                <div className="text-sm text-white/80">HIPAA Compliant</div>
              </div>
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