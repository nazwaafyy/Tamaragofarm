import React from 'react';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
          dark
            ? 'bg-[#3F7D20]/40 text-[#B7D334] border border-[#7FAF28]/30'
            : 'bg-[#EEF5E8] text-[#3F7D20] border border-[#7FAF28]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7FAF28]"></span>
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-[#174D25]'
        }`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-[#EEF5E8]/80' : 'text-[#667066]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
