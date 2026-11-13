import React from 'react';

export default function ProductImageCard({ item, index, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl sm:rounded-3xl border border-cream-300/80 p-3 sm:p-4 shadow-premium hover:shadow-premium-hover transition-all duration-400 ease-luxury transform hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-in"
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
    >
      {/* Inner Image Container / Frame */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-cream-100/60 flex items-center justify-center border border-cream-200">
        
        {item.image ? (
          <img
            src={item.image}
            alt="Продукция SAGBAN"
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-luxury"
            loading="lazy"
          />
        ) : (
          /* Premium Photo Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center group-hover:bg-cream-200/40 transition-colors duration-400">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-burgundy-700/20 bg-white/90 flex items-center justify-center text-burgundy-800 shadow-sm group-hover:scale-110 group-hover:border-burgundy-700/40 group-hover:bg-white transition-all duration-400 ease-luxury mb-3">
              <svg 
                className="w-7 h-7 sm:w-8 sm:h-8 stroke-current opacity-80 group-hover:opacity-100 transition-opacity duration-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 group-hover:text-burgundy-800 transition-colors duration-400">
              Фото продукции
            </span>
            <span className="text-[10px] tracking-wider text-ink-400 mt-1 font-mono">
              #{item.index || index + 1}
            </span>
          </div>
        )}

        {/* Subtle Hover Action Overlay */}
        <div className="absolute inset-0 bg-burgundy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-luxury flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/95 text-burgundy-900 shadow-md flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-400 ease-luxury">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
