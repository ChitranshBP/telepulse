export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: 'Advanced Pediatric Telemedicine Solutions | Tele NICU & Tele PICU',
    description: 'Transform pediatric critical care with Telepulse\'s advanced telemedicine platform. 24/7 Tele NICU and Tele PICU monitoring, expert consultation, and real-time intervention for improved patient outcomes.',
    keywords: 'pediatric telemedicine, tele NICU, tele PICU, neonatal care, pediatric ICU, remote patient monitoring, healthcare technology, critical care, pediatric intensivist, neonatologist, telemedicine India, Bangalore'
  },
  about: {
    title: 'About Telepulse - Revolutionizing Pediatric Critical Care',
    description: 'Learn about Telepulse\'s mission to transform pediatric critical care through innovative telemedicine solutions. Founded by Dr. Sanjay D Swamy and Dr. Nalini Viswanath with 18+ years of experience.',
    keywords: 'about telepulse, pediatric telemedicine company, healthcare innovation, Dr Sanjay D Swamy, Dr Nalini Viswanath, pediatric intensivist, neonatologist, telemedicine founders'
  },
  solutions: {
    title: 'Telemedicine Solutions - Tele NICU, Tele PICU & Tele-Education',
    description: 'Comprehensive pediatric telemedicine solutions including Tele NICU for neonatal care, Tele PICU for pediatric critical care, and Tele-Education for healthcare professionals. 24/7 expert monitoring and consultation.',
    keywords: 'telemedicine solutions, tele NICU solutions, tele PICU solutions, pediatric tele-education, neonatal monitoring, critical care solutions, healthcare training, remote patient monitoring'
  },
  nicu: {
    title: 'Tele NICU - 24/7 Neonatal Intensive Care Telemedicine',
    description: 'Advanced Tele NICU solutions for specialized neonatal intensive care. 24/7 remote monitoring and consultation with board-certified neonatologists. Improve survival rates and reduce length of stay.',
    keywords: 'tele NICU, neonatal telemedicine, NICU monitoring, neonatologist consultation, premature baby care, newborn critical care, neonatal intensive care, remote NICU monitoring'
  },
  picu: {
    title: 'Tele PICU - Pediatric ICU Telemedicine & Remote Monitoring',
    description: 'Comprehensive Tele PICU solutions for pediatric intensive care. Real-time monitoring and intervention with expert pediatric intensivists. Enhanced patient safety and improved clinical outcomes.',
    keywords: 'tele PICU, pediatric ICU, pediatric telemedicine, PICU monitoring, pediatric intensivist, critical care monitoring, pediatric emergency care, remote ICU monitoring'
  },
  education: {
    title: 'Tele-Education - Pediatric Healthcare Professional Training',
    description: 'Accredited tele-education programs for healthcare professionals. Interactive online courses, simulation training, and mentorship in pediatric critical care. Flexible learning with continuing education credits.',
    keywords: 'tele-education, healthcare training, medical education, pediatric training, nursing education, CME credits, online medical courses, simulation training, healthcare certification'
  },
  technology: {
    title: 'Advanced Telemedicine Technology - AI-Powered Healthcare Solutions',
    description: 'Cutting-edge telemedicine technology with AI-powered analytics, real-time monitoring, and seamless EMR integration. HIPAA-compliant platform with Philips IntelliVue and Aishan Technologies integration.',
    keywords: 'telemedicine technology, healthcare AI, medical software, EMR integration, HIPAA compliant, healthcare analytics, remote monitoring technology, medical devices integration, Philips IntelliVue'
  },
  resources: {
    title: 'Healthcare Resources & Whitepapers - Telemedicine Research',
    description: 'Access comprehensive healthcare resources, research papers, and industry whitepapers on pediatric telemedicine, eICU implementation, clinical outcomes, and electronic documentation.',
    keywords: 'healthcare resources, medical whitepapers, telemedicine research, eICU whitepaper, clinical studies, healthcare documentation, medical research papers, pediatric research'
  },
  careers: {
    title: 'Careers at Telepulse - Join Our Healthcare Innovation Team',
    description: 'Join Telepulse\'s mission to transform pediatric critical care. Explore career opportunities in telemedicine including HR Manager, Virtual Nurse Assistant, and Biomedical Engineer positions in Bangalore.',
    keywords: 'telepulse careers, healthcare jobs, telemedicine jobs, medical jobs Bangalore, HR manager, virtual nurse, biomedical engineer, healthcare careers India'
  },
  contact: {
    title: 'Contact Telepulse - Get in Touch with Our Team',
    description: 'Contact Telepulse for telemedicine solutions, partnerships, or inquiries. Located in Bangalore, India. Email: info@telepulse.in, Phone: +91-9108080000. Schedule a consultation today.',
    keywords: 'contact telepulse, telemedicine consultation, healthcare solutions contact, Bangalore telemedicine, telepulse Bangalore, healthcare inquiry, schedule demo'
  },
  legal: {
    title: 'Legal Information - Privacy Policy & Terms of Service',
    description: 'Telepulse legal information including Privacy Policy, Terms of Service, and Telemedicine Disclaimer. HIPAA-compliant healthcare platform with robust data security and patient privacy protection.',
    keywords: 'privacy policy, terms of service, telemedicine disclaimer, HIPAA compliance, healthcare legal, patient privacy, data security, medical legal information'
  },
  research: {
    title: 'Research & Innovation - Advancing Pediatric Telemedicine',
    description: 'Cutting-edge research initiatives driving innovation in pediatric telemedicine. Evidence-based protocols, multi-center studies, and continuous improvement through data analysis.',
    keywords: 'telemedicine research, healthcare innovation, pediatric research, clinical studies, evidence-based medicine, medical research, healthcare outcomes research'
  },
  impact: {
    title: 'Our Impact - Success Stories & Case Studies',
    description: 'Real impact from Telepulse telemedicine solutions. Case studies showing improved patient outcomes, reduced mortality rates, faster response times, and cost savings across healthcare institutions.',
    keywords: 'telemedicine impact, healthcare outcomes, case studies, success stories, patient outcomes, healthcare ROI, clinical improvements, telemedicine results'
  },
  partners: {
    title: 'Partners - Healthcare Institutions & Technology Partners',
    description: 'Telepulse partners with leading healthcare institutions, hospitals, and technology providers. Collaborating to deliver exceptional pediatric telemedicine solutions worldwide.',
    keywords: 'healthcare partners, hospital partnerships, technology partners, medical collaborations, healthcare alliances, telemedicine partners, Philips healthcare, medical institutions'
  }
};
