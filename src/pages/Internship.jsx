import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import TestimonialCard from '../components/TestimonialCard';
import { GraduationCap, BookOpen, Briefcase, UserCheck, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import heroFarmImg from '../assets/images/hero_farm.png';

export default function Internship() {
  const features = [
    {
      title: 'Penelitian Akademik',
      desc: 'Fasilitas dan pendampingan data lapangan bagi mahasiswa S1/S2/S3, dosen, dan lembaga riset untuk melaksanakan penelitian di bidang pertanian dan agribisnis.',
      icon: BookOpen
    },
    {
      title: 'Program Magang Praktik',
      desc: 'Kesempatan belajar langsung mengenai teknologi budidaya smart farming, manajemen operasional kebun, rantai pasok pascapanen, hingga administrasi agribisnis.',
      icon: Briefcase
    },
    {
      title: 'Praktik Kerja Lapangan (PKL)',
      desc: 'Program pembelajaran berbasis praktik bagi siswa SMK Pertanian maupun mahasiswa sesuai kurikulum perguruan tinggi.',
      icon: GraduationCap
    },
    {
      title: 'Pendampingan Pembimbing Lapangan',
      desc: 'Setiap peserta memperoleh arahan, fasilitasi data, dan bimbingan intensif dari pembimbing internal TamaraAgro Farm selama pelaksanaan program.',
      icon: UserCheck
    }
  ];

  return (
    <div className="pt-24 pb-12 space-y-16">
      
      {/* Header Banner */}
      <section className="relative bg-[#174D25] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroFarmImg}
            alt="Penelitian Magang PKL TamaraAgro Farm"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#174D25]/90 via-[#174D25] to-[#174D25]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EEF5E8] shadow-lg space-y-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-[#F7F7EF] rounded-2xl p-6 border border-[#EEF5E8] hover:border-[#7FAF28] transition-all space-y-3 group">
                  <div className="w-12 h-12 rounded-xl bg-[#174D25] text-[#B7D334] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#174D25]">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
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
