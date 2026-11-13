import React from 'react';
import { CATALOGS } from '../data/catalogData';

export default function CatalogSelector({ selectedCatalog, onSelectCatalog }) {
  const handleCatalogClick = (catalog) => {
    onSelectCatalog(catalog.id);
    // Open the PDF catalog in a new tab. Called synchronously inside the click
    // handler so browsers (incl. Safari/iOS) don't block it as a popup.
    if (catalog.pdfUrl) {
      window.open(catalog.pdfUrl, '_blank', 'noopener');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-[0.25em] text-ink-500 font-semibold">
          Линейка продукции
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {Object.values(CATALOGS).map((catalog) => {
          const isSelected = selectedCatalog === catalog.id;
          return (
            <button
              key={catalog.id}
              onClick={() => handleCatalogClick(catalog)}
              className={`relative group overflow-hidden px-8 py-5 sm:py-6 rounded-2xl border text-center transition-all duration-400 ease-luxury cursor-pointer focus:outline-none ${
                isSelected
                  ? 'bg-burgundy-800 text-cream-50 border-burgundy-700 shadow-premium-hover scale-[1.02]'
                  : 'bg-white text-ink-900 border-cream-200 hover:border-burgundy-700/50 hover:bg-cream-100/50 shadow-premium hover:shadow-premium-hover hover:scale-[1.01]'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <span
                  className="text-xl sm:text-2xl font-bold tracking-wider"
                  style={{ fontFamily: '"PT Serif", Palatino, "Palatino Linotype", Charter, Georgia, serif' }}
                >
                  {catalog.name}
                </span>
              </div>

              {/* Bottom accent line */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 bg-burgundy-500 transition-all duration-400 ${
                  isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
