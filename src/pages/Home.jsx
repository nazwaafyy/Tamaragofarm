import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Sprout,
  Users,
  Award,
  Truck,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Leaf,
  CheckCircle2
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import AchievementCard from '../components/AchievementCard';
import TestimonialCard from '../components/TestimonialCard';
import VideoCard from '../components/VideoCard';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';

import { products } from '../data/products';
import { services } from '../data/services';
import { achievements } from '../data/achievements';
import { testimonials } from '../data/testimonials';
import { partnersData } from '../data/partners';
import { videoDocumentation } from '../data/documentation';
import { publications } from '../data/publications';

import heroFarmImg from '../assets/images/hero_farm.webp';

export default function Home() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const whatsappUrl = "https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20tertarik%20dengan%20produk%20dan%20layanan%20hortikultura.";

  return (
    <div className="space-y-24 pb-12">
      <SEO
        title="Supplier Hortikultura & Agribisnis Sukabumi"
        description="TamaraAgro Farm – perusahaan hortikultura Sukabumi yang menghadirkan sayuran segar berkualitas. Supplier cabe, tomat, paprika, edamame ke retail modern, HORECA & industri. Mitra petani lokal Sukaraja sejak 2021."
        keywords="TamaraAgro Farm, supplier hortikultura Sukabumi, sayuran segar, agribisnis Jawa Barat, supplier cabe tomat, kemitraan petani lokal"
        canonical="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Background Image with Dark Green Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Kebun Hortikultura TamaraAgro Farm Sukabumi"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 pt-8">
          <div className="inline-flex items-center gap-2 bg-[#EEF5E8]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B7D334]/40 text-[#B7D334] text-xs font-bold uppercase tracking-widest animate-float-slow">
            <Sprout className="w-4 h-4 text-[#B7D334]" />
            <span>CV Tamara Agro Indonesia</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl mx-auto">
            Selamat datang di <br />
            <span className="text-[#B7D334] underline decoration-[#7FAF28]/40">TamaraAgro Farm</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#EEF5E8]/90 max-w-3xl mx-auto font-light leading-relaxed">
            Perusahaan hortikultura yang berkomitmen menghadirkan produk pertanian berkualitas melalui budidaya berkelanjutan, kemitraan strategis serta inovasi di sektor agribisnis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button to="/tentang-kami" variant="lime" size="lg">
              Kenali TamaraAgro
            </Button>
            <Button href={whatsappUrl} variant="white" size="lg">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#174D25] to-[#3F7D20] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7FAF28] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl font-black text-[#B7D334]">20+</div>
            <div className="text-base font-bold text-[#EEF5E8]">Komoditas Hortikultura</div>
            <p className="text-xs text-[#EEF5E8]/70">Cabe, Tomat, Paprika, Buncis, Edamame, dan lainnya</p>
          </div>

          <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl font-black text-[#B7D334]">20+</div>
            <div className="text-base font-bold text-[#EEF5E8]">Mitra Terpercaya</div>
            <p className="text-xs text-[#EEF5E8]/70">Modern market, Horeca, Industri & Akademik</p>
          </div>

          <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl font-black text-[#B7D334]">100+</div>
            <div className="text-base font-bold text-[#EEF5E8]">Petani Lokal yang Diberdayakan</div>
            <p className="text-xs text-[#EEF5E8]/70">Kecamatan Sukaraja & Wilayah Sukabumi</p>
          </div>
        </div>
      </section>

      {/* 3. KOMODITAS KAMI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Komoditas Utama"
          title="Komoditas Kami"
          description="Menghadirkan berbagai komoditas hortikultura segar dan berkualitas yang dibudidayakan dengan komitmen terhadap mutu, keberlanjutan, dan kepuasan pelanggan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.slice(0, 8).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        <div className="bg-[#EEF5E8] rounded-3xl p-6 text-center space-y-4 max-w-3xl mx-auto border border-[#7FAF28]/30">
          <p className="text-sm sm:text-base text-[#174D25] font-medium leading-relaxed">
            Daftar di atas merupakan sebagian dari produk yang kami sediakan. Kami juga melayani berbagai komoditas hortikultura lainnya sesuai permintaan dan ketersediaan.
          </p>
          <div>
            <Button to="/komoditas" variant="primary" size="md">
              Lihat Semua Komoditas
            </Button>
          </div>
        </div>
      </section>

      {/* 4. TENTANG / COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EEF5E8] shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Tim Manajemen (Iqbal & Resi) */}
          <div className="flex flex-col gap-4 w-full h-full min-h-[400px] sm:min-h-[500px]">
            {/* Pendiri 1: Iqbal Habibi */}
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl border border-[#EEF5E8]">
              <img
                src="/people/1.png"
                alt="Iqbal Habibi - Pendiri TamaraAgro Farm"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Pendiri 2: Resi */}
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl border border-[#EEF5E8]">
              <img
                src="/people/2.png"
                alt="Resi - Co-founder TamaraAgro Farm"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text Story */}
          <div className="space-y-6">
            <SectionTitle
              align="left"
              eyebrow="Tentang Perusahaan"
              title="Membangun Ekosistem Hortikultura Berkelanjutan"
            />

            <p className="text-sm sm:text-base text-[#1E2A20] leading-relaxed">
              <strong>TamaraAgro Farm</strong> merupakan perusahaan hortikultura yang berkomitmen menghadirkan produk pertanian berkualitas melalui budidaya berkelanjutan, kemitraan strategis, serta inovasi di sektor agribisnis.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#667066] leading-relaxed">
              <div className="p-4 bg-[#F7F7EF] rounded-2xl border-l-4 border-[#3F7D20] space-y-1">
                <h4 className="font-bold text-[#174D25]">Potensi Daerah</h4>
                <p>
                  Kabupaten Sukabumi merupakan salah satu daerah dengan potensi pertanian yang besar, didukung oleh sumber daya alam yang melimpah dan masyarakat yang sebagian besar berprofesi sebagai petani, khususnya di Kecamatan Sukaraja.
                </p>
              </div>

              <div className="p-4 bg-[#F7F7EF] rounded-2xl border-l-4 border-amber-500 space-y-1">
                <h4 className="font-bold text-[#174D25]">Tantangan Petani</h4>
                <p>
                  Namun, di balik potensi tersebut, petani masih menghadapi berbagai tantangan, seperti fluktuasi harga, hasil panen yang belum terserap secara optimal, serta terbatasnya akses terhadap pasar yang lebih luas.
                </p>
              </div>

              <div className="p-4 bg-[#EEF5E8] rounded-2xl border-l-4 border-[#7FAF28] space-y-1">
                <h4 className="font-bold text-[#174D25]">Solusi TamaraAgro</h4>
                <p>
                  Berangkat dari kondisi tersebut, CV Tamara Agro Indonesia hadir sebagai perusahaan agribisnis yang berkomitmen menjembatani petani dengan pasar. Melalui peningkatan kualitas produk, pengelolaan pascapanen, pengembangan kemitraan, serta pemasaran yang lebih efektif.
                </p>
              </div>
            </div>

            <div>
              <Button to="/tentang-kami" variant="secondary" size="md">
                Baca Selengkapnya Profil Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PENCAPAIAN KAMI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Rekam Izat & Apresiasi"
          title="Pencapaian Kami"
          description="Apresiasi dan pengakuan atas komitmen TamaraAgro Farm dalam pengembangan sektor agribisnis dan pemberdayaan pemuda tani."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      </section>

      {/* 6. LAYANAN KAMI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Solusi Agribisnis Terpadu"
          title="Layanan Kami"
          description="Solusi lengkap dari hulu hingga hilir pertanian untuk petani, institusi, hingga mitra industri."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>
      </section>

      {/* 7. MENGAPA MEMILIH TAMARAAGRO FARM? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF5E8] rounded-3xl p-8 sm:p-12 border border-[#7FAF28]/30 space-y-10">
          <SectionTitle
            eyebrow="Keunggulan Utama"
            title="Mengapa Memilih TamaraAgro Farm?"
            description="Nilai tambah dan komitmen kami dalam menghadirkan standar terbaik bagi seluruh mitra usaha."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#174D25] text-[#B7D334] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#174D25]">1. Kualitas Produk Terjamin</h3>
              <p className="text-xs text-[#667066] leading-relaxed">
                Seleksi mutu ketat dari tahap budidaya hingga pemilahan pascapanen demi kepuasan pasar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#174D25] text-[#B7D334] flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#174D25]">2. Distribusi Tepat Waktu</h3>
              <p className="text-xs text-[#667066] leading-relaxed">
                Sistem logistik terorganisir memastikan komoditas tiba dalam kondisi segar dan optimal.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#174D25] text-[#B7D334] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#174D25]">3. Kemitraan Terpercaya</h3>
              <p className="text-xs text-[#667066] leading-relaxed">
                Prinsip kerja sama adil, transparan, dan saling menguntungkan dengan petani maupun korporasi.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#174D25] text-[#B7D334] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#174D25]">4. Didukung Inovasi</h3>
              <p className="text-xs text-[#667066] leading-relaxed">
                Penerapan smart farming dan kolaborasi riset berkala bersama institusi pendidikan ternama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MITRA / PARTNERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Jaringan Kolaborasi"
          title="Mitra Kami"
          description="Telah dipercaya oleh berbagai jaringan retail modern, industri makanan, institusi pemerintah, serta perguruan tinggi."
        />

        <div className="space-y-10">
          {partnersData.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-extrabold text-[#3F7D20] tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7FAF28]"></span>
                <span>{cat.category}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white rounded-2xl p-3 border border-[#EEF5E8] shadow-sm hover:shadow-md hover:border-[#7FAF28] transition-all text-center flex flex-col items-center justify-between h-28 group relative overflow-hidden"
                  >
                    <div className="flex-grow flex items-center justify-center w-full h-12">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-12 max-w-[90%] object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#174D25] group-hover:text-[#3F7D20] transition-colors line-clamp-1 w-full mt-1.5">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SectionTitle
            align="left"
            eyebrow="Pengalaman Peserta"
            title="Testimoni Penelitian & Magang"
            description="Kesan dan pesan dari para akademisi dan mahasiswa yang pernah melaksanakan magang dan riset di TamaraAgro Farm."
          />
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-[#EEF5E8] text-[#174D25] hover:bg-[#EEF5E8] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-[#EEF5E8] text-[#174D25] hover:bg-[#EEF5E8] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel view */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            testimonials[activeTestimonialIdx],
            testimonials[(activeTestimonialIdx + 1) % testimonials.length],
            testimonials[(activeTestimonialIdx + 2) % testimonials.length],
          ].map((item, i) => (
            <div key={item.id} className={i === 2 ? 'hidden lg:block' : i === 1 ? 'hidden md:block' : ''}>
              <TestimonialCard testimonial={item} />
            </div>
          ))}
        </div>
      </section>

      {/* 10. VIDEO & DOKUMENTASI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SectionTitle
            align="left"
            eyebrow="Dokumentasi Kegiatan"
            title="Video & Dokumentasi"
            description="Lihat berbagai dokumentasi kegiatan, kemitraan, hingga liputan media TamaraAgro Farm."
          />
          <Button to="/dokumentasi" variant="secondary" size="md">
            Lihat Selengkapnya
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoDocumentation.slice(0, 3).map((vid) => (
            <VideoCard key={vid.id} video={vid} />
          ))}
        </div>
      </section>

      {/* 11. PUBLIKASI ILMIAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          eyebrow="Kontribusi Akademik"
          title="Publikasi Ilmiah"
          description="Hasil analisis dan kajian ilmiah mengenai strategi pemasaran dan efisiensi rantai pasok agribisnis."
        />

        <div className="max-w-4xl mx-auto">
          {publications.map((pub) => (
            <ArticleCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>

      {/* 12. CTA BANNER */}
      <CTASection />

    </div>
  );
}
