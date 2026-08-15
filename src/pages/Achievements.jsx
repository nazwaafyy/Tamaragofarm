import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import AchievementCard from '../components/AchievementCard';
import CTASection from '../components/CTASection';
import { achievements } from '../data/achievements';
import { Trophy, Star } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Pencapaian & Rekam Jejak TamaraAgro Farm"
        description="Jelajahi berbagai pencapaian dan rekam jejak CV Tamara Agro Indonesia dalam industri hortikultura, termasuk penghargaan, sertifikasi, dan apresiasi dari mitra bisnis."
        keywords="pencapaian TamaraAgro Farm, penghargaan agribisnis, rekam jejak hortikultura, sertifikasi pertanian Sukabumi"
        canonical="/pencapaian"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header_bg.webp"
            alt="Pencapaian TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Penghargaan & Apresiasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pencapaian <span className="text-[#B7D334]">Kami</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Bukti nyata dedikasi TamaraAgro Farm dalam memelopori ketahanan pangan, memperluas kemitraan, dan memberdayakan generasi muda tani.
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Apresiasi & Rekam Jejak"
          title="Daftar Penghargaan Utama"
          description="Pengakuan dari instansi pemerintah, lembaga internasional, hingga badan resmi statistik."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>

        {/* Impact Story Box */}
        <div className="bg-[#EEF5E8] rounded-3xl p-8 sm:p-12 border border-[#7FAF28]/30 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#174D25] text-[#B7D334] flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#174D25]">Dampak & Komitmen Berkelanjutan</h3>
              <p className="text-xs text-[#667066]">Menjadikan setiap penghargaan sebagai pemicu inovasi yang lebih berdampak</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#1E2A20]">
            <div className="bg-white p-6 rounded-2xl border border-[#EEF5E8] space-y-2">
              <h4 className="font-extrabold text-[#174D25] flex items-center gap-2">
                <Star className="w-4 h-4 text-[#7FAF28]" />
                <span>Pemuda Pelopor Pangan</span>
              </h4>
              <p className="text-xs text-[#667066] leading-relaxed">
                Penghargaan Juara 2 Pemuda Pelopor Pangan Jawa Barat menandalkan peran aktif generasi muda dalam menggerakkan perekonomian desa Sukaraja.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EEF5E8] space-y-2">
              <h4 className="font-extrabold text-[#174D25] flex items-center gap-2">
                <Star className="w-4 h-4 text-[#7FAF28]" />
                <span>Smart Farming Korea</span>
              </h4>
              <p className="text-xs text-[#667066] leading-relaxed">
                Partisipasi internasional dalam pelatihan Smart Farming di Korea Selatan membuka wawasan penerapan otomatisasi greenhouse modern di lahan lokal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EEF5E8] space-y-2">
              <h4 className="font-extrabold text-[#174D25] flex items-center gap-2">
                <Star className="w-4 h-4 text-[#7FAF28]" />
                <span>Validasi Statistik BPS</span>
              </h4>
              <p className="text-xs text-[#667066] leading-relaxed">
                Terverifikasi secara resmi oleh Badan Pusat Statistik (BPS) sebagai entitas usaha berbadan hukum terpercaya dan terstandarisasi.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
