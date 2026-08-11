import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Commodities from './pages/Commodities';
import Achievements from './pages/Achievements';
import Services from './pages/Services';
import Cultivation from './pages/Cultivation';
import Supplier from './pages/Supplier';
import Consultation from './pages/Consultation';
import Partnership from './pages/Partnership';
import Internship from './pages/Internship';
import Testimonials from './pages/Testimonials';
import Documentation from './pages/Documentation';
import Publication from './pages/Publication';
import Contact from './pages/Contact';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F7EF] text-[#1E2A20] font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/komoditas" element={<Commodities />} />
            <Route path="/pencapaian" element={<Achievements />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/layanan/budidaya-hortikultura" element={<Cultivation />} />
            <Route path="/layanan/supplier-hortikultura" element={<Supplier />} />
            <Route path="/layanan/konsultasi-pertanian" element={<Consultation />} />
            <Route path="/layanan/kemitraan-csr" element={<Partnership />} />
            <Route path="/layanan/penelitian-magang-pkl" element={<Internship />} />
            <Route path="/testimoni" element={<Testimonials />} />
            <Route path="/dokumentasi" element={<Documentation />} />
            <Route path="/publikasi" element={<Publication />} />
            <Route path="/kontak" element={<Contact />} />
            {/* Catch-all fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
