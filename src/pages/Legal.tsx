import React from 'react';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001F5B] to-[#B22222] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Legal Information"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Legal Information</h1>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Privacy Policy, Terms of Service, and Telemedicine Disclaimer for Telepulse Services
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <a href="#privacy" className="text-[#B22222] hover:text-[#00CFE6] font-semibold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#B22222] hover:text-[#00CFE6] font-semibold transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#telemedicine" className="text-[#B22222] hover:text-[#00CFE6] font-semibold transition-colors duration-200">
              Telemedicine Disclaimer
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Shield className="w-12 h-12 text-[#B22222] mr-4" />
            <h2 className="text-4xl font-bold text-[#001F5B]">Privacy Policy</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">1. Introduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Telepulse Inc. ("we," "our," or "us") is committed to protecting the privacy and confidentiality of 
                  patient health information and personal data. This Privacy Policy describes how we collect, use, 
                  disclose, and protect information in connection with our telemedicine platform and services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">2. HIPAA Compliance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As a healthcare technology provider, we comply with the Health Insurance Portability and 
                  Accountability Act (HIPAA) and its implementing regulations, including the Privacy Rule and 
                  Security Rule. We serve as a Business Associate under HIPAA for covered entities using our services.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>We maintain appropriate safeguards for Protected Health Information (PHI)</li>
                  <li>We only use and disclose PHI as permitted by our Business Associate Agreements</li>
                  <li>We provide individuals with access to their PHI upon request</li>
                  <li>We maintain audit logs of all PHI access and modifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">3. Information We Collect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#B22222] mb-2">Patient Health Information</h4>
                    <p className="text-gray-600">Medical records, diagnostic information, treatment plans, and clinical data transmitted through our platform.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#B22222] mb-2">User Information</h4>
                    <p className="text-gray-600">Healthcare provider credentials, login information, and professional certifications.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#B22222] mb-2">Technical Information</h4>
                    <p className="text-gray-600">System logs, usage analytics, and performance metrics for quality improvement.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">4. Data Security</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>256-bit AES encryption for data at rest</li>
                  <li>Multi-factor authentication for all users</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Role-based access controls and audit trails</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">5. Contact Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  For privacy-related questions or concerns, please contact our Privacy Officer:<br />
                  <strong>Email:</strong> privacy@telepulse.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Medical Innovation Drive, Healthcare City, HC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <FileText className="w-12 h-12 text-[#B22222] mr-4" />
            <h2 className="text-4xl font-bold text-[#001F5B]">Terms of Service</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using Telepulse services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, you may not access or use our services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">2. Service Description</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Telepulse provides telemedicine platform services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Remote patient monitoring and consultation</li>
                  <li>Clinical decision support tools</li>
                  <li>Healthcare provider collaboration platform</li>
                  <li>Medical education and training resources</li>
                  <li>Data analytics and reporting services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">3. User Responsibilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#B22222] mb-2">Healthcare Providers</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Maintain valid medical licenses and certifications</li>
                      <li>Comply with applicable medical standards and regulations</li>
                      <li>Protect patient confidentiality and privacy</li>
                      <li>Use services only for legitimate medical purposes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#B22222] mb-2">Healthcare Organizations</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Ensure appropriate user access controls</li>
                      <li>Maintain current Business Associate Agreements</li>
                      <li>Comply with organizational policies and procedures</li>
                      <li>Report security incidents promptly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">4. Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Telepulse provides technology services to support healthcare delivery but does not provide 
                  direct medical care. Healthcare providers remain solely responsible for all clinical decisions 
                  and patient care. Our liability is limited to the extent permitted by applicable law.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">5. Termination</h3>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate service agreements with appropriate notice as specified in 
                  individual service contracts. Upon termination, we will securely return or destroy 
                  customer data as required by applicable regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemedicine Disclaimer */}
      <section id="telemedicine" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <AlertTriangle className="w-12 h-12 text-[#B22222] mr-4" />
            <h2 className="text-4xl font-bold text-[#001F5B]">Telemedicine Disclaimer</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-8">
              <strong>Important Medical Disclaimer - Please Read Carefully</strong>
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">1. Technology Platform Only</h3>
                <p className="text-gray-600 leading-relaxed">
                  Telepulse provides technology platform services to facilitate telemedicine consultations 
                  and remote patient monitoring. We do not provide medical advice, diagnosis, or treatment. 
                  All medical decisions remain the responsibility of licensed healthcare providers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">2. Clinical Responsibility</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Healthcare providers using our platform are solely responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>All clinical assessments and medical decisions</li>
                  <li>Determining appropriateness of telemedicine for specific cases</li>
                  <li>Ensuring compliance with applicable medical standards</li>
                  <li>Maintaining valid medical licenses in relevant jurisdictions</li>
                  <li>Following established protocols for emergency situations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">3. Emergency Situations</h3>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <p className="text-red-700 font-semibold mb-2">IMPORTANT EMERGENCY NOTICE:</p>
                  <p className="text-red-600">
                    Our telemedicine platform is not intended for emergency medical situations. 
                    In case of medical emergency, immediately call 911 (or local emergency services) 
                    or go to the nearest emergency room.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Healthcare providers must establish clear protocols for handling emergency situations 
                  and ensure patients understand when to seek immediate in-person care.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">4. Technical Limitations</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Users acknowledge that telemedicine has inherent limitations:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Technology failures may interrupt consultations</li>
                  <li>Internet connectivity issues may affect service quality</li>
                  <li>Some medical conditions may require in-person examination</li>
                  <li>Equipment malfunction could impact monitoring accuracy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">5. Regulatory Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Healthcare providers are responsible for ensuring their use of telemedicine services 
                  complies with all applicable federal, state, and local regulations, including but not 
                  limited to medical licensing requirements, prescribing regulations, and patient consent procedures.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#001F5B] mb-4">6. No Medical Advice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Information provided through our platform should not be considered medical advice. 
                  Patients should always consult with qualified healthcare providers for medical concerns 
                  and follow the advice of their treating physicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Questions */}
      <section className="py-20 bg-[#001F5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Legal Questions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            For questions about our legal policies or compliance requirements, 
            please contact our legal team
          </p>
          <div className="space-y-4">
            <p className="text-gray-300">
              <strong>Legal Department:</strong> legal@telepulse.com
            </p>
            <p className="text-gray-300">
              <strong>Privacy Officer:</strong> privacy@telepulse.com
            </p>
            <p className="text-gray-300">
              <strong>Compliance Questions:</strong> compliance@telepulse.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;