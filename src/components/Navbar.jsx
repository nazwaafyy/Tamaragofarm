import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const whatsappUrl = "https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20ingin%20berdiskusi%20mengenai%20produk%20dan%20layanan%20hortikultura.";

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#EEF5E8]'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#174D25] flex items-center justify-center text-[#B7D334] shadow-md group-hover:scale-105 transition-transform duration-300">
              <Sprout className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl text-[#174D25] tracking-tight leading-tight">
                TamaraAgro <span className="text-[#7FAF28]">Farm</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-[#667066] uppercase">
                CV Tamara Agro Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                  : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
              }`}
            >
              Home
            </Link>

            <Link
              to="/tentang-kami"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/tentang-kami')
                  ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                  : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
              }`}
            >
              Tentang Kami
            </Link>

            <Link
              to="/komoditas"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/komoditas')
                  ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                  : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
              }`}
            >
              Komoditas
            </Link>

            {/* Layanan Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/layanan"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname.startsWith('/layanan')
                    ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                    : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
                }`}
              >
                <span>Layanan</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#EEF5E8] py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    to="/layanan/budidaya-hortikultura"
                    className="block px-4 py-2.5 text-sm text-[#1E2A20] hover:bg-[#EEF5E8] hover:text-[#174D25] font-medium transition-colors"
                  >
                    Budidaya Hortikultura
                  </Link>
                  <Link
                    to="/layanan/supplier-hortikultura"
                    className="block px-4 py-2.5 text-sm text-[#1E2A20] hover:bg-[#EEF5E8] hover:text-[#174D25] font-medium transition-colors"
                  >
                    Supplier Hortikultura
                  </Link>
                  <Link
                    to="/layanan/konsultasi-pertanian"
                    className="block px-4 py-2.5 text-sm text-[#1E2A20] hover:bg-[#EEF5E8] hover:text-[#174D25] font-medium transition-colors"
                  >
                    Konsultasi Pertanian
                  </Link>
                  <Link
                    to="/layanan/kemitraan-csr"
                    className="block px-4 py-2.5 text-sm text-[#1E2A20] hover:bg-[#EEF5E8] hover:text-[#174D25] font-medium transition-colors"
                  >
                    Kemitraan & CSR
                  </Link>
                  <Link
                    to="/layanan/penelitian-magang-pkl"
                    className="block px-4 py-2.5 text-sm text-[#1E2A20] hover:bg-[#EEF5E8] hover:text-[#174D25] font-medium transition-colors"
                  >
                    Penelitian, Magang & PKL
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pencapaian"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/pencapaian')
                  ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                  : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
              }`}
            >
              Pencapaian
            </Link>

            <Link
              to="/testimoni"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/testimoni')
                  ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                  : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
              }`}
            >
              Testimoni
            </Link>

            <Link
              to="/dokumentasi"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/dokumentasi')
                  ? 'text-[#174D25] bg-[#EEF5E8] font-semibold'
                  : 'text-[#1E2A20] hover:text-[#174D25] hover:bg-[#EEF5E8]/60'
              }`}
            >
              Dokumentasi
            </Link>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden lg:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4 text-[#B7D334]" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#174D25] hover:bg-[#EEF5E8] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-3xl p-5 shadow-2xl border border-[#EEF5E8] space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            <Link
              to="/"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tentang-kami"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/tentang-kami') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Tentang Kami
            </Link>
            <Link
              to="/komoditas"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/komoditas') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Komoditas
            </Link>

            {/* Mobile Services Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium ${
                  location.pathname.startsWith('/layanan') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
                }`}
              >
                <span>Layanan Kami</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="pl-4 space-y-1 py-1 border-l-2 border-[#7FAF28] ml-4">
                  <Link to="/layanan" className="block px-3 py-2 text-sm text-[#1E2A20] hover:text-[#174D25] font-medium">
                    Semua Layanan
                  </Link>
                  <Link to="/layanan/budidaya-hortikultura" className="block px-3 py-2 text-sm text-[#667066] hover:text-[#174D25]">
                    Budidaya Hortikultura
                  </Link>
                  <Link to="/layanan/supplier-hortikultura" className="block px-3 py-2 text-sm text-[#667066] hover:text-[#174D25]">
                    Supplier Hortikultura
                  </Link>
                  <Link to="/layanan/konsultasi-pertanian" className="block px-3 py-2 text-sm text-[#667066] hover:text-[#174D25]">
                    Konsultasi Pertanian
                  </Link>
                  <Link to="/layanan/kemitraan-csr" className="block px-3 py-2 text-sm text-[#667066] hover:text-[#174D25]">
                    Kemitraan & CSR
                  </Link>
                  <Link to="/layanan/penelitian-magang-pkl" className="block px-3 py-2 text-sm text-[#667066] hover:text-[#174D25]">
                    Penelitian, Magang & PKL
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pencapaian"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/pencapaian') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Pencapaian
            </Link>
            <Link
              to="/testimoni"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/testimoni') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Testimoni
            </Link>
            <Link
              to="/dokumentasi"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/dokumentasi') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Dokumentasi
            </Link>
            <Link
              to="/publikasi"
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                isActive('/publikasi') ? 'bg-[#EEF5E8] text-[#174D25] font-semibold' : 'text-[#1E2A20]'
              }`}
            >
              Publikasi Ilmiah
            </Link>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#174D25] text-white py-3 rounded-2xl text-center font-semibold shadow-md"
              >
                <PhoneCall className="w-4 h-4 text-[#B7D334]" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
