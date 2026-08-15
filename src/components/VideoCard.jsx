import React, { useState } from 'react';
import { Play, Film, Clock, X, ArrowRight } from 'lucide-react';

export default function VideoCard({ video }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-3xl overflow-hidden border border-[#EEF5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
        {/* Thumbnail container */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-[#174D25]/10">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="w-14 h-14 rounded-full bg-[#174D25] text-[#B7D334] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-[#B7D334]"
              aria-label="Play video"
            >
              <Play className="w-6 h-6 fill-current ml-1" />
            </button>
          </div>

          <div className="absolute top-3 left-3 bg-[#174D25]/90 backdrop-blur-md text-[#B7D334] text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {video.category}
          </div>

          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#B7D334]" />
            <span>{video.duration}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors leading-snug line-clamp-2">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#667066] leading-relaxed line-clamp-2">
              {video.description}
            </p>
          </div>

          <div className="pt-2 border-t border-[#EEF5E8] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#7FAF28] flex items-center gap-1">
              <Film className="w-3.5 h-3.5" />
              <span>Dokumentasi Resmi</span>
            </span>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-bold text-[#174D25] hover:text-[#3F7D20] underline"
            >
              Tonton Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-5 space-y-4 relative animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#EEF5E8] pb-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-[#7FAF28] uppercase tracking-wider">
                  {video.category}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#174D25] leading-snug">
                  {video.title}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full hover:bg-[#EEF5E8] text-[#1E2A20] transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {video.embedUrl ? (
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : video.videoPath ? (
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                  <video
                    src={video.videoPath}
                    controls
                    autoPlay
                    poster={video.thumbnail}
                    className="w-full h-full object-contain"
                  ></video>
                </div>
                {video.url && (
                  <div className="flex justify-center pt-1">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#EEF5E8] hover:bg-[#DCEAD0] text-[#174D25] px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm group"
                    >
                      <span>Tonton di Instagram Reels</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video bg-[#174D25] rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center space-y-4 shadow-inner">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#B7D334] shadow-md">
                  <Film className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-base sm:text-lg max-w-md mx-auto">{video.title}</h4>
                  <p className="text-xs text-[#EEF5E8]/80 max-w-sm mx-auto">
                    Video ini diunggah pada platform Instagram. Silakan klik tombol di bawah untuk menonton langsung di Instagram Reels.
                  </p>
                </div>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B7D334] hover:bg-[#a5c228] text-[#174D25] px-6 py-3 rounded-full text-xs font-extrabold transition-colors shadow-md group"
                >
                  <span>Tonton di Instagram Reels</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
