import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Sprout, CheckCircle2, Cpu, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Cultivation() {
  const features = [
    {
      title: 'Budidaya Berbasis Permintaan Pasar',
      desc: 'Perencanaan komoditas disesuaikan dengan kebutuhan pasar untuk meningkatkan peluang penyerapan hasil panen secara optimal.',
      icon: TrendingUp,
      image: '/layanan/Holtikultura/Budidaya-Permintaan-Pasar.png'
    },
    {
      title: 'Penerapan Smart Farming',
      desc: 'Memanfaatkan teknologi otomatisasi greenhouse, irigasi tetes, dan sistem budidaya modern untuk meningkatkan produktivitas.',
      icon: Cpu,
      image: '/layanan/Holtikultura/Smart-Farming.png'
    },
    {
      title: 'Pendampingan Petani',
      desc: 'Memberikan bimbingan teknis intensif kepada kelompok tani binaan mulai dari persiapan lahan hingga penanganan pasca-panen.',
      icon: Users,
      image: '/layanan/Holtikultura/Petani.png'
    },
    {
      title: 'Monitoring Produksi',
      desc: 'Melakukan peninjauan berkala di lapangan secara presisi untuk memantau perkembangan vegetatif dan preventif terhadap hama.',
      icon: ShieldCheck,
      image: '/layanan/Holtikultura/Monitoring.png'
    },
    {
      title: 'Penyerapan Hasil Panen',
      desc: 'Membantu menyerap dan mendistribusikan hasil panen petani mitra secara adil ke pasar retail modern dan mitra industri.',
      icon: CheckCircle2,
      image: '/layanan/Holtikultura/Hasil-Panen.png'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Budidaya Hortikultura – Praktik Pertanian Berkelanjutan"
        description="Pelajari metode budidaya hortikultura di TamaraAgro Farm. Mulai dari persiapan lahan, persemaian, pemeliharaan, hingga panen menggunakan teknik pertanian modern."
        keywords="budidaya hortikultura, cara tanam sayuran, pertanian berkelanjutan Sukabumi, teknik budidaya cabe tomat, TamaraAgro Farm"
        canonical="/layanan/budidaya-hortikultura"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/layanan/Holtikultura.png"
            alt="Budidaya Hortikultura TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 w-full">
          <span className="inline-block bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Layanan Unggulan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Budidaya <span className="text-[#B7D334]">Hortikultura</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-3xl mx-auto font-light leading-relaxed">
            TamaraAgro Farm menghadirkan sistem budidaya hortikultura yang tidak hanya berfokus pada peningkatan hasil panen, tetapi juga memastikan komoditas yang ditanam sesuai dengan kebutuhan pasar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold text-[#3F7D20] uppercase tracking-wider bg-[#EEF5E8] px-3.5 py-1 rounded-full">
            Smart Farming & Budidaya Presisi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#174D25]">
            Pendekatan Terpadu Budidaya Hortikultura
          </h2>
          <p className="text-base text-[#667066] leading-relaxed">
            Melalui penerapan smart farming dan pendampingan kepada petani binaan, kami membantu menciptakan sistem budidaya yang lebih efisien, berkualitas tinggi, dan berkelanjutan.
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

      {/* CTA BANNER */}
      <CTASection
        headline="Ingin mengembangkan budidaya hortikultura presisi bersama TamaraAgro?"
        subheadline="Tim ahli pertanian kami siap mendampingi perencanaan dan penyerapan hasil panen anda."
      />

    </div>
  );
}
