import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Services() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Layanan TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Layanan & Solusi Agribisnis
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Layanan <span className="text-[#B7D334]">Kami</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Solusi komprehensif budidaya, pasokan komoditas, pendampingan petani, kemitraan CSR, hingga fasilitas pendidikan dan penelitian agribisnis.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Portfolio Layanan"
          title="5 Pilar Layanan Utamakan Kepuasan Mitra"
          description="Pilih pilar layanan di bawah ini untuk melihat detail fitur, fasilitas, dan tata cara kerja sama."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
