import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Truck, Users, Handshake, GraduationCap, ArrowRight } from 'lucide-react';

const iconMap = {
  Sprout: Sprout,
  Truck: Truck,
  Users: Users,
  Handshake: Handshake,
  GraduationCap: GraduationCap,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || Sprout;

  return (
    <div className="group bg-white rounded-3xl border border-[#EEF5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 relative overflow-hidden h-full">
      {/* Service Image Header */}
      {service.image && (
        <div className="h-48 w-full overflow-hidden relative shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      )}

      {/* Content wrapper with relative positioning for overlapping icon */}
      <div className={`p-6 sm:p-8 ${service.image ? 'pt-10 sm:pt-12' : 'pt-6 sm:pt-8'} flex flex-col justify-between flex-1 relative z-10`}>
        {/* Overlapping Icon box */}
        <div className={`${service.image ? 'absolute -top-7' : 'relative mb-4'} w-14 h-14 rounded-2xl bg-[#EEF5E8] group-hover:bg-[#174D25] text-[#174D25] group-hover:text-[#B7D334] flex items-center justify-center transition-all duration-300 shadow-md border-4 border-white`}>
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="space-y-3">
          {/* Title & description */}
          <h3 className="text-lg sm:text-xl font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#667066] leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Action link */}
        <div className="pt-4 mt-6 border-t border-[#EEF5E8]">
          <Link
            to={`/layanan/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#174D25] hover:text-[#3F7D20] group-hover:translate-x-1 transition-all"
          >
            <span>Baca Selengkapnya</span>
            <ArrowRight className="w-4 h-4 text-[#7FAF28]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
