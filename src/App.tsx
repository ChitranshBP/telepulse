import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Solutions from './pages/Solutions';
import NICUTeleCare from './pages/NICUTeleCare';
import PediatricTeleICU from './pages/PediatricTeleICU';
import TeleEducation from './pages/TeleEducation';
import ResearchInnovation from './pages/ResearchInnovation';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/nicu" element={<NICUTeleCare />} />
          <Route path="/picu" element={<PediatricTeleICU />} />
          <Route path="/education" element={<TeleEducation />} />
          <Route path="/research" element={<ResearchInnovation />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;