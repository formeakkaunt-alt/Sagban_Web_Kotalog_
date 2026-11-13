import React from 'react';

export default function Header({ onLogoClick, onCertificateClick }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-cream-50/90 backdrop-blur-md border-b border-cream-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <button 
          onClick={onLogoClick}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          aria-label="На главную"
        >
          <img 
            src="/images/logo-sagban.png" 
            alt="SAGBAN" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-ink-500 font-medium group-hover:text-burgundy-700 transition-colors duration-400">
            Торговая марка
          </span>
        </button>

        {/* Right: Animated "Сертификат" Button */}
        <div className="flex items-center">
          <button
            onClick={onCertificateClick}
            className="relative group overflow-hidden px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border border-burgundy-700/30 bg-white/90 hover:bg-burgundy-800 text-burgundy-900 hover:text-cream-50 shadow-sm hover:shadow-premium-hover transition-all duration-400 ease-luxury focus:outline-none cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Сертификат"
          >
            {/* Background animated slide effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-burgundy-800 transition-transform duration-400 ease-luxury"></div>

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy-600 group-hover:bg-cream-100 transition-colors duration-400"></span>
              <span>Сертификат</span>
              <svg 
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}
