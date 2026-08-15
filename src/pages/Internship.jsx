import React from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import TestimonialCard from '../components/TestimonialCard';
import { GraduationCap, BookOpen, Briefcase, UserCheck, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Internship() {
  const features = [
    {
      title: 'Penelitian Akademik',
      desc: 'Fasilitas dan pendampingan data lapangan bagi mahasiswa S1/S2/S3, dosen, dan lembaga riset untuk melaksanakan penelitian di bidang pertanian dan agribisnis.',
      icon: BookOpen,
      image: '/layanan/Magang/Penelitian.png'
    },
    {
      title: 'Program Magang Praktik',
      desc: 'Kesempatan belajar langsung mengenai teknologi budidaya smart farming, manajemen operasional kebun, rantai pasok pascapanen, hingga administrasi agribisnis.',
      icon: Briefcase,
      image: '/layanan/Magang/Magang.png'
    },
    {
      title: 'Praktik Kerja Lapangan (PKL)',
      desc: 'Program pembelajaran berbasis praktik bagi siswa SMK Pertanian maupun mahasiswa sesuai kurikulum perguruan tinggi.',
      icon: GraduationCap,
      image: '/layanan/Magang/PKL.png'
    },
    {
      title: 'Pendampingan Pembimbing Lapangan',
      desc: 'Setiap peserta memperoleh arahan, fasilitasi data, dan bimbingan intensif dari pembimbing internal TamaraAgro Farm selama pelaksanaan program.',
      icon: UserCheck,
      image: '/layanan/Magang/Pendampingan.png'
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      <SEO
        title="Program Magang & PKL Mahasiswa Pertanian"
        description="Program magang dan PKL (Praktik Kerja Lapangan) di TamaraAgro Farm untuk siswa SMK/mahasiswa pertanian. Dapatkan pengalaman nyata di industri hortikultura modern."
        keywords="magang pertanian Sukabumi, PKL agribisnis, tempat magang mahasiswa pertanian, lowongan magang hortikultura, TamaraAgro Farm"
        canonical="/layanan/penelitian-magang-pkl"
      />
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-12 sm:py-16 min-h-[180px] sm:min-h-[240px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/layanan/Magang.png"
            alt="Penelitian Magang PKL TamaraAgro Farm"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#174D25]/90 via-[#174D25]/75 to-[#3F7D20]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
          <span className="bg-[#3F7D20] text-[#B7D334] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#7FAF28]/40">
            Edukasi & Riset Agribisnis
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Penelitian, Magang & <span className="text-[#B7D334]">PKL</span>
          </h1>
          <p className="text-base sm:text-lg text-[#EEF5E8]/90 max-w-3xl mx-auto font-light leading-relaxed">
            TamaraAgro Farm membuka kesempatan bagi mahasiswa, pelajar, dosen, dan institusi pendidikan untuk melaksanakan penelitian, program magang, serta praktik kerja lapangan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold text-[#3F7D20] uppercase tracking-wider bg-[#EEF5E8] px-3.5 py-1 rounded-full">
            Pusat Pembelajaran Swadaya (P4S Tamara)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#174D25]">
            Wadah Belajar Riset & Operasional Kehidupan Nyata
          </h2>
          <p className="text-base text-[#667066] leading-relaxed">
            Melalui pendampingan langsung di lapangan, peserta dapat memperoleh pengalaman praktis mengenai budidaya hortikultura, riset analisis SWOT pemasaran, hingga manajemen rantai pasok agribisnis modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EEF5E8] hover:shadow-2xl hover:border-[#7FAF28]/40 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Header Image (Full-bleed) */}
                <div className="relative h-56 overflow-hidden">
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

      {/* Testimonials Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          eyebrow="Cerita Pengalaman"
          title="Apa Kata Mahasiswa IPB & UMMI?"
          description="Testimoni nyata dari peserta riset dan magang yang telah menyelesaikan program di TamaraAgro Farm."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection
        headline="Ingin mendaftar program magang, penelitian skripsi, atau PKL di TamaraAgro?"
        subheadline="Hubungi pembimbing program kami via WhatsApp untuk prosedur pengajuan surat permohonan kampus."
      />

    </div>
  );
}
