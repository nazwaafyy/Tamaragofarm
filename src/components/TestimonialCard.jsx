import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#EEF5E8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative group">
      <div className="space-y-4">
        {/* Quote Icon */}
        <div className="w-10 h-10 rounded-xl bg-[#EEF5E8] text-[#3F7D20] flex items-center justify-center">
          <Quote className="w-5 h-5" />
        </div>

        {/* Content */}
        <p className="text-sm sm:text-base text-[#1E2A20] leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author info */}
      <div className="pt-6 mt-6 border-t border-[#EEF5E8] flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#7FAF28]"
        />
        <div>
          <h4 className="font-extrabold text-[#174D25] text-base">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#667066]">
            {testimonial.role}
          </p>
          <p className="text-xs font-semibold text-[#7FAF28]">
            {testimonial.institution}
          </p>
        </div>
      </div>
    </div>
  );
}
