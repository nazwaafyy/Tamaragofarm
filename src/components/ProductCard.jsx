import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20tertarik%20dengan%20komoditas%20${encodeURIComponent(product.name)}.`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#EEF5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-[#F7F7EF]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-[#174D25]/90 backdrop-blur-md text-[#B7D334] text-xs font-bold px-3 py-1 rounded-full shadow-md border border-[#7FAF28]/30">
            {product.badge}
          </div>
        )}

        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#174D25] flex items-center gap-1 shadow-sm">
          <Leaf className="w-3 h-3 text-[#7FAF28]" />
          <span>{product.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-[#667066] leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="pt-2 border-t border-[#EEF5E8] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#3F7D20]">
            Pasokan Rutin & Kontinuitas
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#174D25] hover:text-[#3F7D20] group-hover:translate-x-1 transition-all"
          >
          </a>
        </div>
      </div>
    </div>
  );
}
