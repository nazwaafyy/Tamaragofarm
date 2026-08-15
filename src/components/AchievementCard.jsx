import React from 'react';
import { Calendar, Award } from 'lucide-react';

export default function AchievementCard({ achievement }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#EEF5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Gambar Pencapaian Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#174D25]/10">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-[#174D25]/90 backdrop-blur-md text-[#B7D334] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
          {achievement.organizer}
        </div>
        {achievement.year && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#B7D334]" />
            <span>Tahun {achievement.year}</span>
          </div>
        )}
      </div>

      {/* Informasi Teks */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors leading-snug">
            {achievement.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#667066] leading-relaxed font-light">
            {achievement.description}
          </p>
        </div>

        <div className="pt-2 border-t border-[#EEF5E8] flex items-center justify-between text-xs font-semibold text-[#7FAF28]">
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            <span>Apresiasi Resmi</span>
          </span>
        </div>
      </div>
    </div>
  );
}
