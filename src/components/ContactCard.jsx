import React from 'react';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

export default function ContactCard() {
  const whatsappUrl = "https://wa.me/6285779682328?text=Halo%20TamaraAgro%20Farm,%20saya%20tertarik%20mengenai%20produk%20dan%20layanan.";

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EEF5E8] shadow-lg space-y-8">
      <div className="space-y-3 border-b border-[#EEF5E8] pb-6">
        <span className="text-xs font-bold text-[#3F7D20] tracking-wider uppercase bg-[#EEF5E8] px-3 py-1 rounded-full">
          Kantor & Kebun Binaan
        </span>
        <h3 className="text-2xl font-extrabold text-[#174D25]">
          Informasi Kontak Resmi
        </h3>
        <p className="text-sm text-[#667066]">
          Hubungi kami untuk penawaran komoditas, kemitraan budidaya, konsultasi, magang, atau penelitian.
        </p>
      </div>

      <div className="space-y-6">
        {/* Alamat */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF5E8] text-[#174D25] flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-[#174D25] text-base">Alamat Lengkap</h4>
            <a
              href="https://maps.app.goo.gl/tNb4vQEK4A6B32xY8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#3F7D20] hover:underline font-semibold mt-1 block leading-relaxed"
            >
              Jl. Batusela, Selaawi, Kec. Sukaraja, Kabupaten Sukabumi, Jawa Barat 43192
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF5E8] text-[#174D25] flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-[#174D25] text-base">Email Resmi</h4>
            <a
              href="mailto:cvtamaraagro.idn@gmail.com"
              className="text-sm text-[#3F7D20] hover:underline font-semibold mt-1 block"
            >
              cvtamaraagro.idn@gmail.com
            </a>
          </div>
        </div>

        {/* Telepon / WA */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF5E8] text-[#174D25] flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-[#174D25] text-base">Telepon / WhatsApp</h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#174D25] font-extrabold hover:text-[#3F7D20] mt-1 block"
            >
              085779682328
            </a>
          </div>
        </div>

        {/* Jam Operasional */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF5E8] text-[#174D25] flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-[#174D25] text-base">Jam Layanan</h4>
            <p className="text-sm text-[#667066] mt-1">
              Senin - Sabtu: 08.00 - 17.00 WIB
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-[#EEF5E8]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#174D25] hover:bg-[#3F7D20] text-white py-3.5 rounded-full font-bold shadow-md transition-all"
        >
          <MessageSquare className="w-5 h-5 text-[#B7D334]" />
          <span>Kirim Pesan WhatsApp Langsung</span>
        </a>
      </div>
    </div>
  );
}
