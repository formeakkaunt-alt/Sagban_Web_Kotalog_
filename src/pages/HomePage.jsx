import React from 'react';
import CatalogSelector from '../components/CatalogSelector';
import CategoryGrid from '../components/CategoryGrid';
import { CATALOGS } from '../data/catalogData';

export default function HomePage({ 
  selectedCatalog, 
  setSelectedCatalog, 
  onSelectCategory 
}) {
  const currentCatalog = selectedCatalog ? CATALOGS[selectedCatalog] : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-280px)] py-10 sm:py-14">
      
      {/* Central Hero Intro */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-8 sm:mb-10 animate-fade-in flex flex-col items-center">
        <img 
          src="/images/logo-sagban.png" 
          alt="SAGBAN" 
          className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-sm mb-4 transition-transform duration-500 hover:scale-105"
        />
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-ink-500 font-medium">
          Официальный каталог мясной продукции
        </p>
      </div>

      {/* Main Catalog Selection */}
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        <CatalogSelector
          selectedCatalog={selectedCatalog}
          onSelectCatalog={(catId) => {
            setSelectedCatalog(catId);
          }}
        />

        {/* 4 Categories Displayed */}
        {selectedCatalog && (
          <CategoryGrid
            activeCatalogName={currentCatalog?.name || ''}
            onSelectCategory={onSelectCategory}
          />
        )}
      </div>

    </div>
  );
}
