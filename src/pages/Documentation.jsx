import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import VideoCard from '../components/VideoCard';
import CTASection from '../components/CTASection';
import { videoDocumentation } from '../data/documentation';

export default function Documentation() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Dokumentasi & Galeri Kegiatan TamaraAgro Farm"
        description="Galeri foto dan dokumentasi kegiatan operasional TamaraAgro Farm: proses panen, pengemasan, pelatihan petani, dan distribusi produk hortikultura."
        keywords="galeri TamaraAgro Farm, dokumentasi panen sayuran, foto kegiatan pertanian, operasional agribisnis Sukabumi"
        canonical="/dokumentasi"
      />

      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header_bg.webp"
            alt="Dokumentasi TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 w-full">
          <span className="inline-block bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Liputan & Galeri
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Video & <span className="text-[#B7D334]">Dokumentasi</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Lihat berbagai dokumentasi kegiatan, kemitraan, hingga liputan media TamaraAgro Farm.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Arsip Video"
          title="Dokumentasi Kegiatan & Podcast"
          description="Lihat berbagai dokumentasi kegiatan, perjalanan, dan cerita inspiratif TamaraAgro Farm dalam mengembangkan sektor pertanian Indonesia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoDocumentation.map((vid) => (
            <VideoCard key={vid.id} video={vid} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
