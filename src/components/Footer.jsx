import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20tertarik%20mengenai%20produk%20dan%20layanan%20CV%20Tamara%20Agro%20Indonesia.";

  return (
    <footer className="bg-[#174D25] text-white pt-16 pb-8 border-t border-[#3F7D20]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3F7D20]/40">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#3F7D20] flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src="/Logo-Tamara.png"
                  alt="Logo TamaraAgro Farm"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                TamaraAgro <span className="text-[#B7D334]">Farm</span>
              </span>
            </div>
            <p className="text-sm text-[#EEF5E8]/80 leading-relaxed">
              TamaraAgro Farm merupakan perusahaan hortikultura yang berkomitmen menghadirkan produk pertanian berkualitas melalui budidaya berkelanjutan, kemitraan strategis, serta inovasi di sektor agribisnis.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#3F7D20] text-[#B7D334] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#7FAF28]/40">
                CV Tamara Agro Indonesia
              </span>
            </div>
          </div>

          {/* Col 2: Layanan Kami */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#B7D334] tracking-wide">Layanan Kami</h4>
            <ul className="space-y-2.5 text-sm text-[#EEF5E8]/80">
              <li>
                <Link to="/layanan/budidaya-hortikultura" className="hover:text-[#B7D334] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#B7D334]" />
                  <span>Budidaya Hortikultura</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan/supplier-hortikultura" className="hover:text-[#B7D334] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#B7D334]" />
                  <span>Supplier Sayuran / Supplier Hortikultura</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan/konsultasi-pertanian" className="hover:text-[#B7D334] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#B7D334]" />
                  <span>Konsultasi Pertanian</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan/kemitraan-csr" className="hover:text-[#B7D334] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#B7D334]" />
                  <span>Kemitraan atau CSR</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan/penelitian-magang-pkl" className="hover:text-[#B7D334] transition-colors flex items-center gap-1 group">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#B7D334]" />
                  <span>Penelitian Magang & PKL</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi Utama */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#B7D334] tracking-wide">Pranala</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#EEF5E8]/80">
              <li>
                <Link to="/" className="hover:text-[#B7D334] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="hover:text-[#B7D334] transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/komoditas" className="hover:text-[#B7D334] transition-colors">Komoditas</Link>
              </li>
              <li>
                <Link to="/layanan" className="hover:text-[#B7D334] transition-colors">Layanan Kami</Link>
              </li>
              <li>
                <Link to="/pencapaian" className="hover:text-[#B7D334] transition-colors">Pencapaian</Link>
              </li>
              <li>
                <Link to="/testimoni" className="hover:text-[#B7D334] transition-colors">Testimoni</Link>
              </li>
              <li>
                <Link to="/dokumentasi" className="hover:text-[#B7D334] transition-colors">Dokumentasi</Link>
              </li>
              <li>
                <Link to="/publikasi" className="hover:text-[#B7D334] transition-colors">Publikasi</Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-[#B7D334] transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Alamat & Kontak */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#B7D334] tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-[#EEF5E8]/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B7D334] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/tNb4vQEK4A6B32xY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B7D334] transition-colors leading-relaxed text-left"
                >
                  Jl. Batusela, Selaawi,<br />
                  Kec. Sukaraja, Kabupaten Sukabumi,<br />
                  Jawa Barat 43192
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B7D334] shrink-0" />
                <a href="mailto:cvtamaraagro.idn@gmail.com" className="hover:text-[#B7D334] transition-colors">
                  cvtamaraagro.idn@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B7D334] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B7D334] font-semibold text-[#B7D334] transition-colors">
                  085779682328
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EEF5E8]/60 text-center sm:text-left">
          <p>Copyright © 2026 CV Tamara Agro Farm. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <span>Kabupaten Sukabumi, Jawa Barat</span>
            <span>•</span>
            <span>Agribisnis & Hortikultura</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
