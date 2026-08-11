import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import CTASection from '../components/CTASection';
import { Target, Compass, CheckCircle2, ShieldCheck, HeartHandshake, Leaf, Award } from 'lucide-react';

import aboutFarmImg from '../assets/images/about_farm.png';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function About() {
  const missions = [
    {
      number: '01',
      title: 'Konsistensi Kualitas Produk',
      desc: 'Menjaga kepercayaan mitra pasar melalui penyediaan produk dengan standar kualitas yang konsisten.'
    },
    {
      number: '02',
      title: 'Kemitraan Adil & Berkelanjutan',
      desc: 'Membangun kemitraan yang adil dan berkelanjutan dengan petani untuk meningkatkan mutu dan kuantitas hasil pertanian.'
    },
    {
      number: '03',
      title: 'Pola Tanam Terintegrasi',
      desc: 'Mengembangkan pola tanam terintegrasi bersama petani mitra guna memastikan kontinuitas pasokan produk.'
    },
    {
      number: '04',
      title: 'Ketahanan Pangan Nasional',
      desc: 'Berkontribusi dalam memperkuat ketahanan pangan nasional melalui penerapan sistem pertanian yang berkelanjutan dan ramah lingkungan.'
    },
    {
      number: '05',
      title: 'Dukungan SDGs Global',
      desc: 'Mendukung pencapaian Tujuan Pembangunan Berkelanjutan (SDGs), khususnya dalam aspek kehidupan sehat dan sejahtera, pendidikan berkualitas, pekerjaan layak dan pertumbuhan ekonomi, pengurangan kesenjangan, pelestarian ekosistem darat, serta penguatan kemitraan.'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-20">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Profil TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Profil Perusahaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Tentang <span className="text-[#B7D334]">TamaraAgro Farm</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-2xl mx-auto font-light">
            Menjembatani potensi petani lokal Sukabumi dengan kebutuhan pasar nasional melalui inovasi agribisnis terpadu.
          </p>
        </div>
      </section>

      {/* Latar Belakang & Masalah & Solusi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle
              align="left"
              eyebrow="Cerita Kemitraan"
              title="Latar Belakang & Solusi Agribisnis"
            />
            
            <p className="text-base text-[#1E2A20] leading-relaxed">
              <strong>TamaraAgro Farm</strong> (CV Tamara Agro Indonesia) merupakan perusahaan hortikultura yang berkomitmen menghadirkan produk pertanian berkualitas melalui budidaya berkelanjutan, kemitraan strategis, serta inovasi di sektor agribisnis.
            </p>

            <div className="space-y-4 text-sm text-[#667066] leading-relaxed">
              <div className="p-5 bg-white rounded-3xl border border-[#EEF5E8] shadow-sm space-y-2">
                <h3 className="font-extrabold text-[#174D25] text-base flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-[#7FAF28]" />
                  <span>Potensi Pertanian Kabupaten Sukabumi</span>
                </h3>
                <p>
                  Kabupaten Sukabumi merupakan salah satu daerah dengan potensi pertanian yang besar, didukung oleh sumber daya alam yang melimpah dan masyarakat yang sebagian besar berprofesi sebagai petani, khususnya di Kecamatan Sukaraja. Beragam komoditas hortikultura yang dihasilkan menjadi kekuatan utama dalam mendukung ketahanan pangan dan perekonomian daerah.
                </p>
              </div>

              <div className="p-5 bg-white rounded-3xl border border-amber-200 shadow-sm space-y-2">
                <h3 className="font-extrabold text-amber-800 text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                  <span>Tantangan Utama Petani Lokal</span>
                </h3>
                <p>
                  Namun, di balik potensi tersebut, petani masih menghadapi berbagai tantangan, seperti fluktuasi harga, hasil panen yang belum terserap secara optimal, serta terbatasnya akses terhadap pasar yang lebih luas. Kondisi ini sering kali menyebabkan nilai jual hasil pertanian menjadi rendah dan berdampak pada kesejahteraan petani.
                </p>
              </div>

              <div className="p-5 bg-[#EEF5E8] rounded-3xl border border-[#7FAF28]/40 shadow-sm space-y-2">
                <h3 className="font-extrabold text-[#174D25] text-base flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-[#3F7D20]" />
                  <span>Solusi CV Tamara Agro Indonesia</span>
                </h3>
                <p className="text-[#174D25]">
                  Berangkat dari kondisi tersebut, CV Tamara Agro Indonesia hadir sebagai perusahaan agribisnis yang berkomitmen menjembatani petani dengan pasar. Melalui peningkatan kualitas produk, pengelolaan pascapanen, pengembangan kemitraan, serta pemasaran yang lebih efektif, kami berupaya meningkatkan nilai tambah hasil pertanian sekaligus menciptakan ekosistem agribisnis yang berkelanjutan dan saling menguntungkan bagi seluruh pihak.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={aboutFarmImg}
              alt="Lahan Hortikultura TamaraAgro Farm Sukabumi"
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#174D25]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
              <span className="bg-[#B7D334] text-[#174D25] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                Kecamatan Sukaraja, Sukabumi
              </span>
              <h3 className="text-2xl font-extrabold">CV Tamara Agro Indonesia</h3>
              <p className="text-xs text-[#EEF5E8]/80">Pemberdayaan Petani Binaan & Jaringan Pasar Modern Retail</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISI & MISI SECTION */}
      <section className="bg-[#EEF5E8] py-16 sm:py-20 border-y border-[#7FAF28]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* VISI BOX */}
          <div className="bg-gradient-to-r from-[#174D25] to-[#3F7D20] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 relative overflow-hidden text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#B7D334] text-[#174D25] flex items-center justify-center mx-auto shadow-lg">
              <Target className="w-8 h-8" />
            </div>
            <span className="text-xs font-black text-[#B7D334] uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full">
              VISI PERUSAHAAN
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
              "Menjadi perusahaan agribisnis yang terpercaya dan berdaya saing, dengan komitmen untuk meningkatkan kesejahteraan petani, memenuhi kebutuhan mitra pasar melalui produk berkualitas tinggi, serta mendukung tercapainya tujuan pembangunan berkelanjutan (SDGs)."
            </blockquote>
          </div>

          {/* MISI CARDS (01-05) */}
          <div className="space-y-8">
            <SectionTitle
              eyebrow="Langkah Strategis"
              title="Misi Kami"
              description="5 pilar utama pelaksanaan komitmen TamaraAgro Farm dalam melayani mitra dan memberdayakan petani."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((misi) => (
                <div
                  key={misi.number}
                  className="bg-white rounded-3xl p-8 border border-[#EEF5E8] shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 relative group overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#B7D334] group-hover:text-[#174D25] transition-colors">
                      {misi.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5E8] text-[#174D25] flex items-center justify-center">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#174D25]">
                    {misi.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                    {misi.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Milestone Perusahaan"
          title="Perjalanan Kami"
          description="Rekam jejak pertumbuhan CV Tamara Agro Indonesia dari inisiasi koperasi hingga kemitraan industri nasional."
        />

        <Timeline />
      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
