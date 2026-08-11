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
    <div className="group bg-white rounded-3xl p-8 border border-[#EEF5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF5E8] rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

      <div className="space-y-6 relative z-10">
        {/* Icon box */}
        <div className="w-14 h-14 rounded-2xl bg-[#EEF5E8] group-hover:bg-[#174D25] text-[#174D25] group-hover:text-[#B7D334] flex items-center justify-center transition-colors duration-300 shadow-inner">
          <IconComponent className="w-7 h-7" />
        </div>

        {/* Title & description */}
        <div className="space-y-3">
          <h3 className="text-xl font-extrabold text-[#174D25] group-hover:text-[#3F7D20] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-[#667066] leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Action link */}
      <div className="pt-6 mt-6 border-t border-[#EEF5E8] relative z-10">
        <Link
          to={`/layanan/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#174D25] hover:text-[#3F7D20] group-hover:translate-x-1 transition-all"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-4 h-4 text-[#7FAF28]" />
        </Link>
      </div>
    </div>
  );
}
