import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Handshake, HeartHandshake, Building2, Sprout, Landmark, Users } from 'lucide-react';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Partnership() {
  const features = [
    {
      title: 'Kemitraan Bisnis',
      desc: 'Kerja sama dengan perusahaan, distributor, retail, dan industri untuk penyediaan komoditas hortikultura secara berkelanjutan.',
      icon: Building2
    },
    {
      title: 'Kemitraan Budidaya',
      desc: 'Pendampingan kelompok petani mitra dalam menghasilkan komoditas hortikultura unggulan sesuai standar pasar modern.',
      icon: Sprout
    },
    {
      title: 'Pemberdayaan Petani',
      desc: 'Pembinaan dan penguatan kapasitas petani lokal melalui pelatihan teknik pertanian, transparansi harga, dan akses pasar.',
      icon: Users
    },
    {
      title: 'Program CSR Korporasi',
      desc: 'Pelaksanaan kegiatan sosial perusahaan dan pengembangan rantai nilai pertanian yang memberikan dampak sosial bagi masyarakat dan lingkungan.',
      icon: HeartHandshake
    },
    {
      title: 'Kolaborasi Institusi',
      desc: 'Membuka peluang kerja sama dengan pemerintah (Kementan/Dispora), perguruan tinggi (IPB, UMMI), dan lembaga swasta lainnya.',
      icon: Landmark
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Kemitraan & CSR TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Kolaborasi Berdampak
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Kemitraan & <span className="text-[#B7D334]">CSR</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-3xl mx-auto font-light leading-relaxed">
            TamaraAgro Farm membuka peluang kerja sama dengan berbagai pihak melalui program kemitraan dan tanggung jawab sosial perusahaan (CSR).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EEF5E8] shadow-lg space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold text-[#3F7D20] uppercase tracking-wider bg-[#EEF5E8] px-3.5 py-1 rounded-full">
              Sinergi Lintas Sektor
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#174D25]">
              Membangun Dampak Sosial Bersama
            </h2>
            <p className="text-base text-[#667066] leading-relaxed">
              Kami percaya bahwa kolaborasi yang baik tidak hanya mendukung pertumbuhan bisnis, tetapi juga memberikan manfaat nyata bagi petani, masyarakat desa, dan kelestarian sektor pertanian secara berkelanjutan. Contohnya seperti program CSR budidaya cabai rawit seluas 5–7 ha bersama Pizza Hut Indonesia dan Marugame Udon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-[#F7F7EF] rounded-2xl p-6 border border-[#EEF5E8] hover:border-[#7FAF28] transition-all space-y-3 group">
                  <div className="w-12 h-12 rounded-xl bg-[#174D25] text-[#B7D334] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#174D25]">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection
        headline="Tertarik menjalin kerja sama CSR atau kemitraan budidaya industri?"
        subheadline="Tim kemitraan TamaraAgro Farm siap mendiskusikan proposal dan rancangan program CSR berdampak tinggi."
      />

    </div>
  );
}
