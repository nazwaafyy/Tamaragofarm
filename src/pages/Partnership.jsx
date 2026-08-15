import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Handshake, HeartHandshake, Building2, Sprout, Landmark, Users } from 'lucide-react';

export default function Partnership() {
  const features = [
    {
      title: 'Kemitraan Bisnis',
      desc: 'Kerja sama dengan perusahaan, distributor, retail, dan industri untuk penyediaan komoditas hortikultura secara berkelanjutan.',
      icon: Building2,
      image: '/layanan/Kemitraan/Bisnis.png'
    },
    {
      title: 'Kemitraan Budidaya',
      desc: 'Pendampingan kelompok petani mitra dalam menghasilkan komoditas hortikultura unggulan sesuai standar pasar modern.',
      icon: Sprout,
      image: '/layanan/Kemitraan/Budidaya.png'
    },
    {
      title: 'Pemberdayaan Petani',
      desc: 'Pembinaan dan penguatan kapasitas petani lokal melalui pelatihan teknik pertanian, transparansi harga, dan akses pasar.',
      icon: Users,
      image: '/layanan/Kemitraan/Pemberdayaan.png'
    },
    {
      title: 'Program CSR Korporasi',
      desc: 'Pelaksanaan kegiatan sosial perusahaan dan pengembangan rantai nilai pertanian yang memberikan dampak sosial bagi masyarakat dan lingkungan.',
      icon: HeartHandshake,
      image: '/layanan/Kemitraan/CSR.png'
    },
    {
      title: 'Kolaborasi Institusi',
      desc: 'Membuka peluang kerja sama dengan pemerintah (Kementan/Dispora), perguruan tinggi (IPB, UMMI), dan lembaga swasta lainnya.',
      icon: Landmark,
      image: '/layanan/Kemitraan/Kolaborasi.png'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Kemitraan & CSR Pertanian Berdampak Sosial"
        description="Jalin kemitraan agribisnis dan program CSR pertanian bersama TamaraAgro Farm. Kami membuka peluang sinergi budidaya hortikultura berkelanjutan dan pemberdayaan petani."
        keywords="kemitraan pertanian Sukabumi, program CSR pertanian, CSR TamaraAgro Farm, kemitraan budidaya industri, pemberdayaan petani lokal"
        canonical="/layanan/kemitraan-csr"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/layanan/CSR.png"
            alt="Kemitraan & CSR TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EEF5E8] hover:shadow-2xl hover:border-[#7FAF28]/40 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Header Image (Full-bleed) */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Card Content & Overlapping Icon */}
                <div className="px-6 pb-6 pt-10 relative flex-grow flex flex-col justify-between">
                  <div className="absolute -top-7 left-6 w-14 h-14 bg-[#174D25] text-[#B7D334] rounded-2xl flex items-center justify-center shadow-md border-4 border-white group-hover:scale-110 group-hover:bg-[#3F7D20] transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-[#174D25] group-hover:text-[#3F7D20] transition-colors leading-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
