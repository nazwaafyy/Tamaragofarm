import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import { Search, Filter, Leaf } from 'lucide-react';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Commodities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Komoditas Hortikultura TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667066]" />
            <input
              type="text"
              placeholder="Cari komoditas (misal: Cabe, Tomat)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F7F7EF] rounded-2xl border border-[#EEF5E8] text-sm text-[#1E2A20] focus:outline-none focus:ring-2 focus:ring-[#7FAF28]"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-[#3F7D20] hidden sm:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#174D25] text-[#B7D334] shadow-md'
                    : 'bg-[#F7F7EF] text-[#667066] hover:bg-[#EEF5E8] hover:text-[#174D25]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EEF5E8] p-8 space-y-3">
            <Leaf className="w-12 h-12 text-[#7FAF28] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-[#174D25]">Komoditas tidak ditemukan</h3>
            <p className="text-sm text-[#667066]">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
          </div>
        )}

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
