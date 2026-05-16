/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import GetStarted from './pages/GetStarted';
import Tools from './pages/Tools';
import Community from './pages/Community';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import SlangeAcademy from './pages/SlangeAcademy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-brand-blue/30 selection:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aprende-trading" element={<Learn />} />
            <Route path="/empezar" element={<GetStarted />} />
            <Route path="/herramientas" element={<Tools />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/academia-slange" element={<SlangeAcademy />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/risk-disclosure" element={<Legal type="risk" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}
