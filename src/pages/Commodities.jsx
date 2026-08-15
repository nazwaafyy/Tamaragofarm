import React from 'react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products } from '../data/products';

export default function Commodities() {
  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Komoditas Hortikultura – Cabe, Tomat, Paprika & 20+ Sayuran Segar"
        description="Tersedia lebih dari 20 komoditas hortikultura segar berkualitas dari TamaraAgro Farm Sukabumi: cabe merah keriting, tomat, paprika, buncis, edamame, baby corn, terong, jagung manis, dan lainnya."
        keywords="komoditas hortikultura, cabe merah Sukabumi, tomat segar, paprika, buncis, edamame, sayuran segar Jawa Barat, TamaraAgro Farm"
        canonical="/komoditas"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header_bg.webp"
            alt="Komoditas Hortikultura TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Produk & Hasil Panen
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Komoditas <span className="text-[#B7D334]">Hortikultura</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Menghadirkan berbagai komoditas hortikultura segar dan berkualitas yang dibudidayakan dengan komitmen terhadap mutu, keberlanjutan, dan kepuasan pelanggan.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        {/* Additional Note */}
        <div className="bg-[#EEF5E8] rounded-3xl p-8 text-center space-y-4 max-w-4xl mx-auto border border-[#7FAF28]/40 shadow-sm">
          <p className="text-base sm:text-lg text-[#174D25] font-semibold leading-relaxed">
            "Daftar di atas merupakan sebagian dari produk yang kami sediakan. Kami juga melayani berbagai komoditas hortikultura lainnya sesuai permintaan dan ketersediaan."
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20ingin%20menanyakan%20ketersediaan%20komoditas%20lainnya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all"
            >
              <span>Tanyakan Permintaan Khusus via WhatsApp</span>
            </a>
          </div>
        </div>

      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
