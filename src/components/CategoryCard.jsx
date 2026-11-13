import React from 'react';

export default function CategoryCard({ category, index, onClick }) {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];
  const hasBg = !!category.bgImage;

  const formatTitle = (title) => {
    if (title === 'Сосиски и сардельки') {
      return (<><span>Сосиски и</span><br /><span>сардельки</span></>);
    }
    if (title === 'Варёная колбаса') {
      return (<><span>Варёная</span><br /><span>колбаса</span></>);
    }
    if (title === 'Копчёная колбаса') {
      return (<><span>Копчёная</span><br /><span>колбаса</span></>);
    }
    if (title === 'Мясные деликатесы') {
      return (<><span>Мясные</span><br /><span>деликатесы</span></>);
    }
    return title;
  };

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col justify-between w-full h-52 sm:h-56 lg:h-60 xl:h-64 p-6 sm:p-7 rounded-2xl border text-left transition-all duration-400 ease-luxury shadow-premium hover:shadow-premium-hover transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden focus:outline-none cursor-pointer animate-fade-in stagger-${index + 1} ${
        hasBg
          ? 'border-burgundy-700/30'
          : 'bg-white border-cream-200 hover:border-burgundy-700/50'
      }`}
    >
      {/* Background image (if exists) */}
      {hasBg && (
        <>
          <img
            src={category.bgImage}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-luxury group-hover:scale-105"
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 group-hover:from-black/75 group-hover:via-black/35 transition-all duration-400"></div>
        </>
      )}

      {/* Subtle hover backdrop for non-image cards */}
      {!hasBg && (
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cream-50/50 to-burgundy-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-luxury"></div>
      )}

      {/* Card Top: Roman Index & Arrow Circle */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className={`font-serif text-sm font-semibold tracking-widest transition-colors duration-400 ${
          hasBg
            ? 'text-white/80 group-hover:text-white'
            : 'text-burgundy-700/70 group-hover:text-burgundy-800'
        }`}>
          {romanNumerals[index] || `0${index + 1}`}
        </span>

        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-sm transition-all duration-400 ease-luxury ${
          hasBg
            ? 'border-white/40 text-white/80 group-hover:border-white group-hover:bg-white/20'
            : 'border-cream-300 text-ink-500 group-hover:border-burgundy-700 group-hover:bg-burgundy-700 group-hover:text-cream-50'
        }`}>
          <svg
            className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Card Bottom: Title & Tagline */}
      <div className="relative z-10 mt-auto">
        <div className={`w-6 h-[1.5px] group-hover:w-10 transition-all duration-400 ease-luxury mb-3 ${
          hasBg ? 'bg-white/70 group-hover:bg-white' : 'bg-burgundy-700/40 group-hover:bg-burgundy-700'
        }`}></div>

        <h3 className={`font-serif text-xl sm:text-xl lg:text-[22px] xl:text-2xl font-semibold transition-colors duration-400 leading-snug tracking-tight ${
          hasBg ? 'text-white' : 'text-ink-900 group-hover:text-burgundy-900'
        }`}>
          {formatTitle(category.title)}
        </h3>

        <p className={`text-[11px] sm:text-xs tracking-[0.12em] mt-2.5 font-medium transition-colors duration-400 italic ${
          hasBg
            ? 'text-white/70 group-hover:text-white/90'
            : 'text-ink-500 group-hover:text-burgundy-700'
        }`}>
          {category.tagline}
        </p>
      </div>

      {/* Bottom Accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-luxury origin-left ${
        hasBg ? 'bg-white/60' : 'bg-burgundy-700'
      }`}></div>
    </button>
  );
}
