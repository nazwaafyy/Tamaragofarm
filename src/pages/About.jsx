import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import CTASection from '../components/CTASection';
import { Target, Compass, CheckCircle2, ShieldCheck, HeartHandshake, Leaf, Award } from 'lucide-react';


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
      <SEO
        title="Tentang TamaraAgro Farm – Profil Perusahaan Hortikultura"
        description="Kenali CV Tamara Agro Indonesia: visi, misi, latar belakang, dan perjalanan kami memberdayakan petani lokal Sukabumi. Perusahaan agribisnis hortikultura berkomitmen pada ketahanan pangan dan pemberdayaan masyarakat tani."
        keywords="profil TamaraAgro Farm, CV Tamara Agro Indonesia, tentang perusahaan hortikultura Sukabumi, visi misi agribisnis, petani lokal Sukaraja"
        canonical="/tentang-kami"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/header_bg.webp"
            alt="Profil TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 w-full">
          <span className="inline-block bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
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

          {/* Right: Tim Manajemen (Iqbal & Resi) */}
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

      {/* LOKASI PERUSAHAAN (MAPS EMBED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionTitle
          eyebrow="Lokasi Kami"
          title="Kantor & Lahan Kebun Binaan"
          description="Kunjungi kantor administrasi dan area budidaya kami di Kecamatan Sukaraja, Kabupaten Sukabumi, Jawa Barat."
        />

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EEF5E8] shadow-lg space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Location Info */}
            <div className="lg:col-span-1 space-y-5">
              <div className="p-5 bg-[#F7F7EF] rounded-2xl border-l-4 border-[#3F7D20] space-y-2">
                <h4 className="font-extrabold text-[#174D25] text-sm">Alamat Operasional</h4>
                <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                  Jl. Batusela, Selaawi, Kec. Sukaraja, Kabupaten Sukabumi, Jawa Barat 43192
                </p>
              </div>
              <div className="p-5 bg-[#EEF5E8] rounded-2xl border-l-4 border-[#7FAF28] space-y-1">
                <h4 className="font-extrabold text-[#174D25] text-sm">Jam Kunjungan Kemitraan</h4>
                <p className="text-xs text-[#667066] leading-relaxed">
                  Senin - Sabtu: 08.00 - 17.00 WIB
                </p>
                <p className="text-[10px] text-[#7FAF28] italic font-semibold">
                  *Harap konfirmasi janji temu terlebih dahulu via WhatsApp
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/tNb4vQEK4A6B32xY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white py-3 px-6 rounded-full font-bold shadow-md text-xs transition-all group"
                >
                  <span>Buka Google Maps</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Embedded Iframe */}
            <div className="lg:col-span-2 w-full h-[320px] sm:h-[380px] overflow-hidden rounded-2xl border border-[#EEF5E8] shadow-inner bg-[#F7F7EF]">
              <iframe
                src="https://maps.google.com/maps?q=Tamara%20Agro%20Farm%2C%20Jl.%20Batusela%2C%20Selaawi%2C%20Kec.%20Sukaraja%2C%20Kabupaten%20Sukabumi%2C%20Jawa%20Barat%2043192&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokasi TamaraAgro Farm"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection />

    </div>
  );
}
