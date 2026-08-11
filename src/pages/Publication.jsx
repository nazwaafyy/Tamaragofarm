import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';
import { publications } from '../data/publications';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Publication() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Publikasi Ilmiah TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Riset & Sains Agribisnis
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Publikasi <span className="text-[#B7D334]">Ilmiah</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Kajian akademis dan publikasi jurnal berbasis analisis SWOT dan riset lapangan agribisnis hortikultura.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Jurnal & Riset Terpublikasi"
          title="Kajian Strategi Pemasaran Cabai Merah Keriting"
          description="Hasil penelitian ilmiah yang memetakan posisi strategis CV. Tamara Agro Indonesia pada Kuadran I SWOT."
        />

        <div className="max-w-4xl mx-auto">
          {publications.map((pub) => (
            <ArticleCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection
        headline="Ingin melakukan kolaborasi riset atau publikasi ilmiah agribisnis?"
        subheadline="Tim peneliti TamaraAgro Farm terbuka untuk memfasilitasi data lapangan dan studi ilmiah."
      />

    </div>
  );
}
