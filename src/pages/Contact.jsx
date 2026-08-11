import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import CTASection from '../components/CTASection';
import { PhoneCall, Send, MapPin, CheckCircle2 } from 'lucide-react';
import heroFarmImg from '../assets/images/hero_farm.png';

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
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Kontak TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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

          <div className="w-full h-72 bg-[#EEF5E8] rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-[#7FAF28]/30 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#174D25] text-[#B7D334] flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="font-extrabold text-[#174D25] text-lg">CV Tamara Agro Indonesia (TamaraAgro Farm)</h4>
            <p className="text-xs text-[#667066] max-w-md">
              Kecamatan Sukaraja, Kabupaten Sukabumi, Jawa Barat. Terbuka untuk kunjungan kerja sama, magang, dan konsultasi lapangan.
            </p>
            <a
              href="https://maps.google.com/?q=Sukaraja+Sukabumi+Jawa+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174D25] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-[#3F7D20]"
            >
              <span>Buka Petunjuk Arah Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
