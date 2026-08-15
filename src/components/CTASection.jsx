import React from 'react';
import { PhoneCall, ArrowRight, MessageSquareCheck } from 'lucide-react';
import heroFarmImg from '../assets/images/hero_farm.webp';

export default function CTASection({
  headline = "Siap berdiskusi mengenai kemitraan, budidaya, penelitian, atau program magang?",
  subheadline = "Tim TamaraAgro Farm siap membantu anda mencapai ekosistem pertanian berkelanjutan.",
  buttonText = "Hubungi via WhatsApp",
  whatsappNumber = "085779682328"
}) {
  const whatsappUrl = `https://wa.me/62${whatsappNumber.substring(1)}?text=Halo%20TamaraAgro%20Farm,%20saya%20ingin%20berdiskusi%20mengenai%20kemitraan%20dan%20layanan.`;

  return (
    <section className="relative py-20 bg-[#174D25] text-white overflow-hidden rounded-3xl sm:rounded-[2.5rem] shadow-2xl mx-4 sm:mx-6 lg:mx-8 my-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFarmImg}
          alt="Agricultural background"
          className="w-full h-full object-cover mix-blend-overlay opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#174D25] via-[#174D25]/90 to-[#3F7D20]/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#3F7D20]/60 text-[#B7D334] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#7FAF28]/40 backdrop-blur-md">
          <MessageSquareCheck className="w-4 h-4" />
          <span>Kolaborasi & Kemitraan</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {headline}
        </h2>

        <p className="text-base sm:text-xl text-[#EEF5E8]/90 max-w-2xl mx-auto font-light leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B7D334] hover:bg-[#7FAF28] text-[#174D25] hover:text-white px-8 py-4 rounded-full text-base font-extrabold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <PhoneCall className="w-5 h-5 text-[#174D25] group-hover:text-white" />
            <span>{buttonText}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
