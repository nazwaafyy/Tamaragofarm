import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Users, BarChart3, Calendar, ClipboardCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import heroFarmImg from '../assets/images/hero_farm.png';

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
      desc: 'Evaluasi potensi lahan, kualitas tanah/air, serta analisis kelayakan finansial budidaya.'
    },
    {
      title: 'Perencanaan Budidaya',
      desc: 'Penyusunan jadwal tanam, pemilihan varietas benih unggul, dan formulasi nutrisi tanaman.'
    },
    {
      title: 'Monitoring Budidaya',
      desc: 'Pendampingan pencegahan hama penyakit (HPT) dan pengawasan pelaksanaan SOP.'
    },
    {
      title: 'Pendampingan Hulu hingga Hilir',
      desc: 'Bimbingan komprehensif mulai dari olah tanah awal hingga penanganan pascapanen.'
    },
    {
      title: 'Penyerapan Hasil Produksi',
      desc: 'Menghubungkan hasil panen ke ekosistem jaringan pembeli dan mitra industri TamaraAgro Farm.'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Konsultasi Pertanian TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
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

      {/* Process Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Metodologi Kerja"
          title="Proses Konsultasi Agribisnis"
          description="4 tahapan terstruktur pendampingan dari awal perencanaan hingga evaluasi hasil."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-3xl p-8 border border-[#EEF5E8] shadow-sm hover:shadow-lg transition-all space-y-4 relative group">
              <span className="text-4xl font-black text-[#B7D334] group-hover:text-[#174D25] transition-colors">
                {item.step}
              </span>
              <h3 className="text-xl font-extrabold text-[#174D25]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#EEF5E8] rounded-3xl p-8 sm:p-12 border border-[#7FAF28]/30 space-y-8">
          <SectionTitle
            eyebrow="Cakupan Layanan"
            title="Fitur & Keunggulan Konsultasi"
            description="Pendampingan intensif oleh praktisi yang berpengalaman mengelola kebun komersial."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#EEF5E8] shadow-sm space-y-2">
                <h4 className="font-extrabold text-[#174D25] text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#7FAF28]" />
                  <span>{feat.title}</span>
                </h4>
                <p className="text-xs text-[#667066] leading-relaxed">
                  {feat.desc}
                </p>
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
