import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 shadow-sm active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-[#174D25] hover:bg-[#3F7D20] text-white hover:shadow-md hover:-translate-y-0.5',
    secondary: 'bg-[#EEF5E8] text-[#174D25] hover:bg-[#7FAF28] hover:text-white border border-[#7FAF28]/30',
    outline: 'border-2 border-[#174D25] text-[#174D25] hover:bg-[#174D25] hover:text-white',
    lime: 'bg-[#B7D334] text-[#174D25] hover:bg-[#7FAF28] hover:text-white shadow-md font-bold',
    white: 'bg-white text-[#174D25] hover:bg-[#EEF5E8] shadow-md hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
