import React from 'react';
import { BookOpen, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function ArticleCard({ publication }) {
  const whatsappUrl = `https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20tertarik%20mengenai%20publikasi%20ilmiah%20${encodeURIComponent(publication.title)}.`;

  return (
    <div className="bg-white rounded-3xl p-8 border border-[#EEF5E8] shadow-md space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EEF5E8] pb-4">
        <span className="bg-[#EEF5E8] text-[#174D25] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#7FAF28]" />
          <span>{publication.category}</span>
        </span>
        <span className="text-xs font-bold text-[#667066]">
          Tahun {publication.year}
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#174D25] leading-snug">
          {publication.title}
        </h3>
        <p className="text-xs font-semibold text-[#7FAF28]">
          Penulis / Tim Riset: {publication.author}
        </p>
        <p className="text-sm text-[#667066] leading-relaxed">
          {publication.abstract}
        </p>
      </div>

      <div className="space-y-2 bg-[#F7F7EF] p-5 rounded-2xl border border-[#EEF5E8]">
        <h4 className="text-xs font-extrabold text-[#174D25] uppercase tracking-wider">
          Temuan Utama & Hasil Analisis SWOT:
        </h4>
        <div className="space-y-2 pt-1">
          {publication.keyTakeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#7FAF28] shrink-0 mt-0.5" />
              <p className="text-xs text-[#1E2A20] leading-relaxed">
                {takeaway}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[#667066] italic">
          *Publikasi dapat diakses untuk kepentingan riset & akademik
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm"
        >
          <FileText className="w-4 h-4 text-[#B7D334]" />
          <span>Minta Salinan Naskah / Informasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
