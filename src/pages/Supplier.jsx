import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Truck, ShieldCheck, RefreshCw, Layers, Handshake, CheckCircle2 } from 'lucide-react';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Supplier() {
  const features = [
    {
      title: 'Komoditas Beragam',
      desc: 'Menyediakan lebih dari 20 komoditas hortikultura segar unggulan (cabe, tomat, paprika, buncis, edamame, baby corn, terong, jagung manis, dll) sesuai spesifikasi mitra.',
      icon: Layers
    },
    {
      title: 'Pasokan Berkelanjutan',
      desc: 'Menjamin kontinuitas ketersediaan pasokan sepanjang tahun melalui pola tanam terintegrasi dengan ratusan petani binaan.',
      icon: RefreshCw
    },
    {
      title: 'Standar Kualitas Ketat',
      desc: 'Pemeriksaan mutu dan pemilahan (sorting/grading) ketat pada tahap pascapanen hingga siap didistribusikan.',
      icon: ShieldCheck
    },
    {
      title: 'Distribusi Tepat Waktu',
      desc: 'Sistem logistik dan rantai pasok terorganisir untuk memastikan kesegaran produk terjaga hingga ke jaringan retail/industri.',
      icon: Truck
    },
    {
      title: 'Kemitraan Jangka Panjang',
      desc: 'Prinsip kerja sama transparan, harga kompetitif, dan komitmen pelayanan terbaik bagi jaringan retail, horeca, dan industri.',
      icon: Handshake
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Supplier Hortikultura TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EEF5E8] shadow-lg space-y-8">
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
        headline="Butuh pasokan rutin komoditas hortikultura segar berkualitas?"
        subheadline="Hubungi tim pemasaran kami untuk penawaran kontrak pasokan B2B dan industri."
      />

    </div>
  );
}
