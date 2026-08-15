import React from 'react';
import { BookOpen, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function ArticleCard({ publication }) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EEF5E8] shadow-md hover:shadow-lg transition-all space-y-6">
      
      {/* Top Section: Split-pane on desktop */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
        {/* Cover Image Container */}
        {publication.image && (
          <div className="w-full md:w-[360px] shrink-0 rounded-2xl overflow-hidden border border-[#EEF5E8] bg-[#F7F7EF] p-2">
            <img
              src={publication.image}
              alt={publication.title}
              className="w-full h-auto object-contain rounded-xl shadow-sm hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        )}

        {/* Abstract & Details */}
        <div className="flex-1 space-y-4 w-full">
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
            <p className="text-sm text-[#667066] leading-relaxed font-light">
              {publication.abstract}
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section: Full-width Temuan Utama & Hasil Analisis SWOT (2-column layout on desktop) */}
      <div className="space-y-3 bg-[#F7F7EF] p-5 rounded-2xl border border-[#EEF5E8] w-full">
        <h4 className="text-xs font-extrabold text-[#174D25] uppercase tracking-wider">
          Temuan Utama & Hasil Analisis SWOT:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
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

      {/* Bottom Section: Full-width Footer Row with top divider */}
      <div className="pt-4 border-t border-[#EEF5E8] flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <span className="text-xs text-[#667066] italic">
          *Publikasi dapat diakses secara publik pada database jurnal
        </span>
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-sm group w-full sm:w-auto justify-center"
        >
          <FileText className="w-4 h-4 text-[#B7D334]" />
          <span>Lihat Artikel</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  );
}
