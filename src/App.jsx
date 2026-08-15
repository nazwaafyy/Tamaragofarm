import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Commodities = lazy(() => import('./pages/Commodities'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Services = lazy(() => import('./pages/Services'));
const Cultivation = lazy(() => import('./pages/Cultivation'));
const Supplier = lazy(() => import('./pages/Supplier'));
const Consultation = lazy(() => import('./pages/Consultation'));
const Partnership = lazy(() => import('./pages/Partnership'));
const Internship = lazy(() => import('./pages/Internship'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Publication = lazy(() => import('./pages/Publication'));
const Contact = lazy(() => import('./pages/Contact'));

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Premium Spinner Loader
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-[#EEF5E8] opacity-50"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-[#174D25] animate-spin"></div>
      </div>
      <p className="text-xs font-bold text-[#174D25] tracking-widest uppercase animate-pulse">
        Memuat Halaman...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F7EF] text-[#1E2A20] font-sans">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
