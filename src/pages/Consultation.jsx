import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Users, BarChart3, Calendar, ClipboardCheck, ShieldCheck } from 'lucide-react';

export default function Consultation() {
  const processSteps = [
    {
      step: '01',
      title: 'Konsultasi Awal',
      desc: 'Diskusi mendalam mengenai kebutuhan lahan, komoditas pilihan, serta target tujuan usaha tani.'
    },
    {
      step: '02',
      title: 'Analisis & Perencanaan',
      desc: 'Penyusunan rekomendasi budidaya presisi, studi kelayakan usaha, serta estimasi biaya operasional.'
    },
    {
      step: '03',
      title: 'Pendampingan Lapangan',
      desc: 'Supervisi dan monitoring langsung pelaksanaan budidaya di kebun secara berkala oleh tenaga ahli.'
    },
    {
      step: '04',
      title: 'Evaluasi & Penyerapan',
      desc: 'Analisis produktivitas hasil panen dan penyusunan rekomendasi perbaikan serta penyerapan ke rantai pasar.'
    }
  ];

  const features = [
    {
      title: 'Analisis Usaha Tani',
      desc: 'Evaluasi potensi lahan, pengujian kualitas tanah dan air, serta analisis kelayakan kelayakan finansial budidaya.',
      icon: BarChart3,
      image: '/layanan/Konsultasi/Analisis.png'
    },
    {
      title: 'Perencanaan Budidaya',
      desc: 'Penyusunan jadwal tanam, pemilihan varietas benih unggul, rekomendasi pupuk, dan formulasi nutrisi tanaman.',
      icon: Calendar,
      image: '/layanan/Konsultasi/Perencanaan.png'
    },
    {
      title: 'Monitoring Budidaya',
      desc: 'Pendampingan pencegahan hama penyakit (HPT), pengawasan SOP kebun, serta pemantauan pertumbuhan tanaman.',
      icon: ClipboardCheck,
      image: '/layanan/Konsultasi/Monitoring.png'
    },
    {
      title: 'Pendampingan Hulu hingga Hilir',
      desc: 'Bimbingan teknis komprehensif mulai dari persiapan olah tanah awal, perawatan harian, hingga penanganan pascapanen.',
      icon: Users,
      image: '/layanan/Konsultasi/Pendampingan.png'
    },
    {
      title: 'Penyerapan Hasil Produksi',
      desc: 'Menghubungkan hasil panen ke ekosistem jaringan pembeli, retail modern, dan mitra industri TamaraAgro Farm.',
      icon: ShieldCheck,
      image: '/layanan/Konsultasi/Penyerapan.png'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Layanan Konsultasi Agribisnis & Pertanian"
        description="Dapatkan layanan konsultasi agribisnis profesional dari pakar TamaraAgro Farm. Kami membantu perencanaan, analisis, dan pendampingan budidaya pertanian modern."
        keywords="konsultasi agribisnis, layanan konsultasi pertanian, pendampingan petani, pakar agribisnis Sukabumi, TamaraAgro Farm"
        canonical="/layanan/konsultasi-pertanian"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/layanan/Konsultasi.png"
            alt="Konsultasi Pertanian TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 w-full">
          <span className="inline-block bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Pendampingan Profesional
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Konsultasi <span className="text-[#B7D334]">Pertanian</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-3xl mx-auto font-light leading-relaxed">
            TamaraAgro Farm menyediakan layanan konsultasi pertanian yang dirancang untuk membantu petani, pelaku agribisnis, maupun perusahaan dalam merencanakan, mengelola, dan mengembangkan usaha tani secara lebih efektif dan menguntungkan.
          </p>
        </div>
      </section>

      {/* REORDERED: 1. Cakupan Layanan (Features Showcase) First */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold text-[#3F7D20] uppercase tracking-wider bg-[#EEF5E8] px-3.5 py-1 rounded-full">
            Cakupan Layanan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#174D25]">
            Fitur & Keunggulan Konsultasi
          </h2>
          <p className="text-base text-[#667066] leading-relaxed">
            Pendampingan intensif oleh praktisi ahli yang berpengalaman langsung mengelola perkebunan komersial skala retail dan industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EEF5E8] hover:shadow-2xl hover:border-[#7FAF28]/40 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Header Image (Full-bleed) */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Card Content & Overlapping Icon */}
                <div className="px-6 pb-6 pt-10 relative flex-grow flex flex-col justify-between">
                  <div className="absolute -top-7 left-6 w-14 h-14 bg-[#174D25] text-[#B7D334] rounded-2xl flex items-center justify-center shadow-md border-4 border-white group-hover:scale-110 group-hover:bg-[#3F7D20] transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-[#174D25] group-hover:text-[#3F7D20] transition-colors leading-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* REORDERED: 2. Metodologi Kerja (Process Steps) Second */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Metodologi Kerja"
          title="Proses Konsultasi Agribisnis"
          description="4 tahapan terstruktur pendampingan dari awal perencanaan hingga evaluasi hasil."
        />

        <div className="relative">
          {/* Horizontal Connector Line on Desktop (Centered vertically relative to the w-16 bubble) */}
          <div className="hidden lg:block absolute left-24 right-24 top-8 h-1 bg-[#EEF5E8] z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center space-y-4 group">
                {/* Timeline Step Bubble */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#EEF5E8] group-hover:border-[#7FAF28] group-hover:bg-[#174D25] group-hover:text-[#B7D334] shadow-md flex items-center justify-center text-[#174D25] font-black text-xl transition-all duration-300 transform group-hover:scale-110 z-10 shrink-0">
                  {item.step}
                </div>

                {/* Detail Card */}
                <div className="bg-white rounded-3xl p-6 border border-[#EEF5E8] shadow-sm hover:shadow-lg transition-all w-full flex-grow">
                  <h3 className="text-base font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection
        headline="Ingin mengonsultasikan perencanaan usaha tani atau kebun anda?"
        subheadline="Tim konsultan agribisnis TamaraAgro Farm siap membantu membuat analisis dan jadwal tanam optimal."
      />

    </div>
  );
}
