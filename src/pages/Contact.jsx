import React, { useState } from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import CTASection from '../components/CTASection';
import { PhoneCall, Send, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Kemitraan Budidaya',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo TamaraAgro Farm,%0A%0ASaya: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ANo HP: ${encodeURIComponent(formData.phone)}%0AKategori: ${encodeURIComponent(formData.subject)}%0APesan: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/6285779682328?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Hubungi Kami – Kontak & Lokasi TamaraAgro Farm"
        description="Hubungi CV Tamara Agro Indonesia untuk kemitraan, pemesanan sayuran, atau konsultasi. Temukan alamat, email, dan nomor telepon TamaraAgro Farm Sukabumi."
        keywords="kontak TamaraAgro Farm, alamat supplier sayuran Sukabumi, nomor telepon Tamara Agro, email perusahaan hortikultura, lokasi TamaraAgro Farm"
        canonical="/kontak"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header_bg.webp"
            alt="Kontak TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Komunikasi & Layanan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hubungi <span className="text-[#B7D334]">Kami</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Tim CV Tamara Agro Indonesia siap melayani pertanyaan seputar komoditas, kemitraan B2B/CSR, konsultasi, hingga program penelitian dan magang.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EEF5E8] shadow-lg space-y-6">
            <div className="space-y-2 border-b border-[#EEF5E8] pb-4">
              <span className="text-xs font-bold text-[#3F7D20] uppercase tracking-wider bg-[#EEF5E8] px-3 py-1 rounded-full">
                Formulir Diskusi
              </span>
              <h3 className="text-2xl font-extrabold text-[#174D25]">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-[#667066]">
                Isi form di bawah untuk langsung terhubung dengan tim customer care WhatsApp kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#174D25] mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama anda..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F7F7EF] rounded-2xl border border-[#EEF5E8] text-sm text-[#1E2A20] focus:outline-none focus:ring-2 focus:ring-[#7FAF28]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#174D25] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F7EF] rounded-2xl border border-[#EEF5E8] text-sm text-[#1E2A20] focus:outline-none focus:ring-2 focus:ring-[#7FAF28]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#174D25] mb-1">
                    No. WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F7EF] rounded-2xl border border-[#EEF5E8] text-sm text-[#1E2A20] focus:outline-none focus:ring-2 focus:ring-[#7FAF28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#174D25] mb-1">
                  Topik Perbincangan *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F7F7EF] rounded-2xl border border-[#EEF5E8] text-sm text-[#1E2A20] focus:outline-none focus:ring-2 focus:ring-[#7FAF28]"
                >
                  <option value="Pemesanan Komoditas">Pemesanan Komoditas Hortikultura</option>
                  <option value="Kemitraan Supplier B2B">Kemitraan Supplier B2B / Modern Retail</option>
                  <option value="Program CSR">Program CSR & Kemitraan Budidaya</option>
                  <option value="Konsultasi Pertanian">Konsultasi Usaha Tani</option>
                  <option value="Penelitian & Magang">Penelitian, Magang & PKL</option>
                  <option value="Lainnya">Pertanyaan Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#174D25] mb-1">
                  Pesan / Detail Kebutuhan *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tuliskan pesan atau kebutuhan anda secara ringkas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F7F7EF] rounded-2xl border border-[#EEF5E8] text-sm text-[#1E2A20] focus:outline-none focus:ring-2 focus:ring-[#7FAF28]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white py-4 rounded-full font-bold shadow-md transition-all hover:shadow-lg cursor-pointer"
              >
                <Send className="w-5 h-5 text-[#B7D334]" />
                <span>Kirim Pesan via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Contact Details Card */}
          <ContactCard />

        </div>
      </section>

      {/* Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-[#EEF5E8] shadow-md space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#7FAF28]" />
            <h3 className="text-xl font-extrabold text-[#174D25]">Lokasi Kantor & Kebun Binaan</h3>
          </div>
          <p className="text-sm text-[#667066]">
            Jl. Batusela, Selaawi, Kec. Sukaraja, Kabupaten Sukabumi, Jawa Barat 43192
          </p>

          <div className="w-full h-[400px] overflow-hidden rounded-2xl border border-[#EEF5E8] shadow-inner bg-[#F7F7EF]">
            <iframe
              src="https://maps.google.com/maps?q=Tamara%20Agro%20Farm%2C%20Jl.%20Batusela%2C%20Selaawi%2C%20Kec.%20Sukaraja%2C%20Kabupaten%20Sukabumi%2C%20Jawa%20Barat%2043192&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Lokasi TamaraAgro Farm"
            ></iframe>
          </div>
          
          <div className="flex justify-center pt-2">
            <a
              href="https://maps.app.goo.gl/tNb4vQEK4A6B32xY8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md transition-all group"
            >
              <span>Buka Petunjuk Arah Google Maps</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
