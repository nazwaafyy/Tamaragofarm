import React from 'react';

export default function ProductCard({ product }) {
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
        </div>
      </div>
    </div>
  );
}
