import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Building2, 
  Sparkles, 
  GraduationCap, 
  ShoppingBag, 
  TrendingUp, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { timelineData } from '../data/timeline';

// Map specific icons for each year
const yearIcons = {
  '2021': Users,
  '2022': Building2,
  '2023': Sparkles,
  '2024': GraduationCap,
  '2025': ShoppingBag,
  '2026': TrendingUp,
};

// Map custom dashboard-like metrics for each year
const yearStats = {
  '2021': [
    { label: 'Mitra Pertama', value: 'Paskomnas' },
    { label: 'Fokus Awal', value: 'Kelompok Tani' }
  ],
  '2022': [
    { label: 'Retail Modern', value: '4+ Jaringan' },
    { label: 'Kelembagaan', value: '3 Entitas' }
  ],
  '2023': [
    { label: 'Hilirisasi', value: "Sambal D'Cabean" },
    { label: 'Edukasi Kebun', value: 'Sukaraja, Sukabumi' }
  ],
  '2024': [
    { label: 'Legalitas', value: 'CV Resmi Terdaftar' },
    { label: 'Program Baru', value: 'Magang & Riset' }
  ],
  '2025': [
    { label: 'Lotte Grosir', value: '14 Gerai Jabodetabek' },
    { label: 'Pizza Hut', value: 'Mitra CSR Tbk' }
  ],
  '2026': [
    { label: 'Pasok Lahan', value: '5 - 7 Hektar' },
    { label: 'Mitra Industri', value: 'Marugame Udon' }
  ]
};

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(timelineData.length - 1); // Default to latest (2026)
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  // Auto-play progression logic
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
      }, 4000); // Transitions every 4 seconds
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying]);

  const activeItem = timelineData[activeIndex];
  const ActiveIcon = yearIcons[activeItem.year] || Calendar;
  const stats = yearStats[activeItem.year] || [];

  return (
    <div className="w-full space-y-8">
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Hide scrollbars for clean horizontal scrolling */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: Stepper Menu (Visible on Desktop lg:block, Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-4">
          <div className="bg-[#EEF5E8]/60 rounded-3xl p-6 border border-[#7FAF28]/15 space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-[#174D25] uppercase tracking-wider">
                Garis Waktu Perjalanan
              </h4>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 bg-white border border-[#EEF5E8] hover:border-[#7FAF28] px-3 py-1.5 rounded-full text-xs font-black text-[#174D25] shadow-sm hover:shadow transition-all cursor-pointer"
                title={isPlaying ? "Jeda Pemutaran Otomatis" : "Putar Otomatis"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-[#174D25] text-[#174D25]" />
                    <span className="uppercase tracking-wider">Jeda</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-[#174D25] text-[#174D25]" />
                    <span className="uppercase tracking-wider">Putar</span>
                  </>
                )}
              </button>
            </div>

            {/* Stepper Node List */}
            <div className="relative pl-6 space-y-4">
              
              {/* Stepper Track Line (Inisiasi - Sekarang) */}
              <div className="absolute left-[26px] top-4 bottom-4 w-1 bg-[#EEF5E8] rounded-full z-0">
                <div
                  className="w-full bg-gradient-to-b from-[#174D25] to-[#7FAF28] transition-all duration-500 rounded-full"
                  style={{
                    height: `${(activeIndex / (timelineData.length - 1)) * 100}%`
                  }}
                ></div>
              </div>

              {/* Stepper Year Buttons */}
              {timelineData.map((item, idx) => {
                const isActive = idx === activeIndex;
                const IconComponent = yearIcons[item.year] || Calendar;
                return (
                  <button
                    key={item.year}
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveIndex(idx);
                    }}
                    className={`relative z-10 w-full flex items-center gap-4 text-left p-3 rounded-2xl transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? 'bg-white border-2 border-[#7FAF28] shadow-md scale-[1.02]'
                        : 'bg-transparent border border-transparent hover:bg-white/40 hover:border-[#EEF5E8]'
                    }`}
                  >
                    {/* Year Icon Node */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'bg-[#174D25] text-[#B7D334]'
                          : 'bg-[#EEF5E8] text-[#174D25] group-hover:bg-[#174D25] group-hover:text-[#B7D334]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Labels */}
                    <div>
                      <span className={`text-[9px] font-black leading-none block uppercase ${isActive ? 'text-[#7FAF28]' : 'text-[#667066]/70'}`}>
                        Tahun
                      </span>
                      <h5 className={`text-sm font-extrabold leading-none mt-0.5 ${isActive ? 'text-[#174D25]' : 'text-[#1E2A20]'}`}>
                        {item.year} {idx === timelineData.length - 1 && '(Sekarang)'}
                      </h5>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE SELECTOR: Swipeable Horizontal Stepper (Visible on Mobile lg:hidden) */}
        <div className="lg:hidden bg-[#EEF5E8]/60 rounded-3xl p-4 border border-[#7FAF28]/15 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-[#174D25] uppercase tracking-wider">
              Tahun Perjalanan
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 bg-white border border-[#EEF5E8] hover:border-[#7FAF28] px-2.5 py-1 rounded-full text-[10px] font-black text-[#174D25] shadow-sm transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 fill-[#174D25] text-[#174D25]" />
                  <span>Jeda</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-[#174D25] text-[#174D25]" />
                  <span>Putar</span>
                </>
              )}
            </button>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {timelineData.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.year}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveIndex(idx);
                  }}
                  className={`snap-center px-4 py-2 rounded-xl text-xs font-black shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#174D25] text-[#B7D334] shadow-md scale-105 border-none'
                      : 'bg-white text-[#174D25] border border-[#EEF5E8]'
                  }`}
                >
                  {item.year}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Showcase Card Detail (8 Columns wide, animated remount) */}
        <div className="lg:col-span-8 w-full">
          <div
            key={activeIndex}
            className="animate-fade-in-right bg-white rounded-3xl p-6 sm:p-10 border border-[#EEF5E8] shadow-xl relative overflow-hidden group/card min-h-[480px] flex flex-col justify-between"
          >
            {/* Thematic Backsplash Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EEF5E8]/60 to-transparent rounded-bl-full -z-0 opacity-70 transition-transform duration-700 group-hover/card:scale-105"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#EEF5E8]/20 rounded-full blur-xl"></div>

            <div className="relative z-10 space-y-6">
              {/* Header: Badge & Title */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#EEF5E8]">
                <div className="w-14 h-14 rounded-2xl bg-[#174D25] text-[#B7D334] flex items-center justify-center shadow-lg border border-[#7FAF28]/10 shrink-0">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#B7D334] text-[#174D25] px-3 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                      Tonggak Sejarah
                    </span>
                    <span className="text-sm font-extrabold text-[#7FAF28]">
                      {activeItem.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#174D25] mt-1 leading-tight">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              {/* Stats/Metrics Block */}
              {stats.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-[#EEF5E8]/40 border border-[#7FAF28]/10 p-3.5 rounded-2xl shadow-sm">
                      <span className="text-[10px] font-bold text-[#667066] uppercase tracking-wider block leading-none">
                        {stat.label}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[#174D25] block mt-1.5 leading-none">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Points with check icons */}
              <div className="space-y-4">
                {activeItem.highlights.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3.5 bg-[#F7F7EF] p-4 rounded-2xl border border-[#EEF5E8] shadow-sm hover:shadow hover:border-[#7FAF28]/25 transition-all duration-300 group/point"
                  >
                    <div className="w-6 h-6 rounded-full bg-white text-[#7FAF28] flex items-center justify-center border border-[#EEF5E8] shrink-0 group-hover/point:bg-[#174D25] group-hover/point:text-[#B7D334] transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#1E2A20] leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Steppers Navigation */}
            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-[#EEF5E8] mt-6">
              <button
                disabled={activeIndex === 0}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex((prev) => Math.max(0, prev - 1));
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#174D25] disabled:opacity-30 disabled:pointer-events-none hover:text-[#3F7D20] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>
              <span className="text-xs font-black text-[#667066]">
                {activeIndex + 1} / {timelineData.length}
              </span>
              <button
                disabled={activeIndex === timelineData.length - 1}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex((prev) => Math.min(timelineData.length - 1, prev + 1));
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#174D25] disabled:opacity-30 disabled:pointer-events-none hover:text-[#3F7D20] transition-colors cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
