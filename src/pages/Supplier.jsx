import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Truck, ShieldCheck, RefreshCw, Layers, Handshake, CheckCircle2 } from 'lucide-react';

export default function Supplier() {
  const features = [
    {
      title: 'Komoditas Beragam',
      desc: 'Menyediakan lebih dari 20 komoditas hortikultura segar unggulan (cabe, tomat, paprika, buncis, edamame, baby corn, terong, jagung manis, dll) sesuai spesifikasi mitra.',
      icon: Layers,
      image: '/layanan/Supplier/Komoditas-Beragam.png'
    },
    {
      title: 'Pasokan Berkelanjutan',
      desc: 'Menjamin kontinuitas ketersediaan pasokan sepanjang tahun melalui pola tanam terintegrasi dengan ratusan petani binaan.',
      icon: RefreshCw,
      image: '/layanan/Supplier/Pasokan.png'
    },
    {
      title: 'Standar Kualitas Ketat',
      desc: 'Pemeriksaan mutu dan pemilahan (sorting/grading) ketat pada tahap pascapanen hingga siap didistribusikan.',
      icon: ShieldCheck,
      image: '/layanan/Supplier/StandarKualitas.png'
    },
    {
      title: 'Distribusi Tepat Waktu',
      desc: 'Sistem logistik dan rantai pasok terorganisir untuk memastikan kesegaran produk terjaga hingga ke jaringan retail/industri.',
      icon: Truck,
      image: '/layanan/Supplier/Distribusi.png'
    },
    {
      title: 'Kemitraan Jangka Panjang',
      desc: 'Prinsip kerja sama transparan, harga kompetitif, dan komitmen pelayanan terbaik bagi jaringan retail, horeca, dan industri.',
      icon: Handshake,
      image: '/layanan/Supplier/LongTerm.png'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Supplier Sayuran & Hortikultura Segar Sukabumi"
        description="TamaraAgro Farm menyediakan pasokan sayuran segar hortikultura berkualitas tinggi untuk retail modern, Horeca, e-grocery, dan mitra industri secara kontinu."
        keywords="supplier sayuran Sukabumi, supplier sayur B2B, pasokan sayur supermarket, retail modern sayuran, supplier hortikultura"
        canonical="/layanan/supplier-hortikultura"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/layanan/Supplier-Sayuran.png"
            alt="Supplier Hortikultura TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Layanan Rantai Pasok
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Supplier Sayuran & <span className="text-[#B7D334]">Hortikultura</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-3xl mx-auto font-light leading-relaxed">
            TamaraAgro Farm menyediakan pasokan hortikultura segar berkualitas melalui jaringan petani binaan dan sistem distribusi yang terintegrasi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold text-[#3F7D20] uppercase tracking-wider bg-[#EEF5E8] px-3.5 py-1 rounded-full">
            Keandalan Pasokan B2B & Modern Retail
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#174D25]">
            Mitra Pasokan Sayuran Segar Terpercaya
          </h2>
          <p className="text-base text-[#667066] leading-relaxed">
            Kami berpengalaman menjadi supplier tetap bagi jaringan supermarket besar (Superindo, Lotte Grosir), platform e-grocery (Segari, EdenFarm), industri kuliner nasional (Pizza Hut, Marugame Udon), hingga program SPPG wilayah Jabodetabek.
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
        headline="Butuh pasokan rutin komoditas hortikultura segar berkualitas?"
        subheadline="Hubungi tim pemasaran kami untuk penawaran kontrak pasokan B2B dan industri."
      />

    </div>
  );
}
