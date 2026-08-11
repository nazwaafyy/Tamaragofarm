import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  const [activeYearIndex, setActiveYearIndex] = useState(timelineData.length - 1); // Default to latest (2026)

  return (
    <div className="space-y-10">
      
      {/* Desktop Horizontal Year Selector */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between max-w-5xl mx-auto px-4">
          {/* Connector Line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-[#EEF5E8] z-0"></div>
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 h-1 bg-[#174D25] transition-all duration-500 z-0"
            style={{ width: `${(activeYearIndex / (timelineData.length - 1)) * 100}%` }}
          ></div>

          {timelineData.map((item, idx) => {
            const isActive = idx === activeYearIndex;
            return (
              <button
                key={item.year}
                onClick={() => setActiveYearIndex(idx)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-[#174D25] text-[#B7D334] scale-110 ring-4 ring-[#7FAF28]/30'
                      : 'bg-white text-[#174D25] border-2 border-[#EEF5E8] hover:border-[#7FAF28]'
                  }`}
                >
                  {item.year}
                </div>
                <span
                  className={`mt-2 text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? 'text-[#174D25]' : 'text-[#667066]'
                  }`}
                >
                  {item.year === '2026' ? 'Sekarang' : `Tahun ${item.year}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Year Detail Box */}
        <div className="mt-10 max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#EEF5E8] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#EEF5E8] rounded-bl-full -z-0 opacity-60"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#174D25] text-[#B7D334] px-4 py-1.5 rounded-full text-sm font-black tracking-wider">
                {timelineData[activeYearIndex].year}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#174D25]">
                {timelineData[activeYearIndex].title}
              </h3>
            </div>

            <div className="space-y-3">
              {timelineData[activeYearIndex].highlights.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 bg-[#F7F7EF] p-4 rounded-2xl border border-[#EEF5E8]">
                  <CheckCircle2 className="w-5 h-5 text-[#7FAF28] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-[#1E2A20] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#EEF5E8]">
              <button
                disabled={activeYearIndex === 0}
                onClick={() => setActiveYearIndex(prev => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#174D25] disabled:opacity-30 disabled:pointer-events-none hover:text-[#3F7D20]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Tahun Sebelumnya</span>
              </button>
              <button
                disabled={activeYearIndex === timelineData.length - 1}
                onClick={() => setActiveYearIndex(prev => Math.min(timelineData.length - 1, prev + 1))}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#174D25] disabled:opacity-30 disabled:pointer-events-none hover:text-[#3F7D20]"
              >
                <span>Tahun Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="md:hidden space-y-6">
        {timelineData.map((item, idx) => (
          <div key={item.year} className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm space-y-4 relative">
            <div className="flex items-center gap-3">
              <span className="bg-[#174D25] text-[#B7D334] px-3.5 py-1 rounded-full text-xs font-black">
                {item.year}
              </span>
              <h3 className="text-base font-extrabold text-[#174D25]">
                {item.title}
              </h3>
            </div>
            <div className="space-y-2.5">
              {item.highlights.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 bg-[#F7F7EF] p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#7FAF28] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1E2A20] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
