import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';
import { publications } from '../data/publications';

export default function Publication() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Publikasi Ilmiah & Riset Pertanian Hortikultura"
        description="Daftar riset ilmiah dan publikasi akademis agribisnis dari TamaraAgro Farm. Pelajari analisis SWOT, rantai pasok sayuran, dan studi pemasaran hasil tani."
        keywords="publikasi ilmiah pertanian, jurnal agribisnis Sukabumi, analisis SWOT agribisnis, riset hortikultura, TamaraAgro Farm"
        canonical="/publikasi"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header_bg.webp"
            alt="Publikasi Ilmiah TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 w-full">
          <span className="inline-block bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
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
