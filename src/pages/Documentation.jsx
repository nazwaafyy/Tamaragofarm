import React from 'react';
import SectionTitle from '../components/SectionTitle';
import VideoCard from '../components/VideoCard';
import CTASection from '../components/CTASection';
import { videoDocumentation } from '../data/documentation';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Documentation() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Dokumentasi TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
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

      {/* Videos Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Arsip Media"
          title="Sorotan Liputan & Dokumentasi Kegiatan"
          description="Klip inspiratif mengenai kiprah petani muda Gen Z, inovasi smart farming, serta liputan kementerian."
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
