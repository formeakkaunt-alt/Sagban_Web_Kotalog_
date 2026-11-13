import React, { useState, useLayoutEffect } from 'react';
import ProductImageCard from '../components/ProductImageCard';
import ImageViewer from '../components/ImageViewer';
import { CATEGORIES, CATALOGS, PRODUCTS_DATA, SALOM_PRODUCTS } from '../data/catalogData';

export default function CategoryPage({ categorySlug, activeCatalog, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isSalomOpen, setIsSalomOpen] = useState(categorySlug === 'salom');

  const isDirectSalom = categorySlug === 'salom';
  const category = CATEGORIES.find(c => c.slug === categorySlug) || {
    slug: 'salom',
    title: 'SALOM',
    tagline: 'Salom маҳсулотлари каталоги',
  };
  const catalog = CATALOGS[activeCatalog] || CATALOGS.sagban;
  
  // Standard category items
  const categoryItems = (PRODUCTS_DATA[activeCatalog] && PRODUCTS_DATA[activeCatalog][categorySlug]) || [];
  // Salom items for this category
  const salomItems = SALOM_PRODUCTS[categorySlug] || [];

  // Seamlessly keep scroll at the very top on transition without visible scroll animation
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [isSalomOpen]);

  const handleOpenSalom = () => {
    setLightboxIndex(null);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsSalomOpen(true);
  };

  const handleCloseSalom = () => {
    setLightboxIndex(null);
    if (isDirectSalom) {
      onBack();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsSalomOpen(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-200px)]">
      
      {/* Light Atmospheric Background Photo if available */}
      {category.pageBgImage && !isSalomOpen && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={category.pageBgImage} 
            alt="" 
            className="w-full h-full object-cover object-center opacity-25 filter blur-[0.5px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-50/70 via-cream-50/40 to-cream-50/80"></div>
        </div>
      )}

      {/* Main Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
        
        {/* Top Navigation Bar: Back button & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-cream-200/80">
          
          {/* Clean Back Button */}
          <button
            onClick={isSalomOpen ? handleCloseSalom : onBack}
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 border border-cream-300 text-xs sm:text-sm font-semibold tracking-wider text-burgundy-900 hover:bg-burgundy-800 hover:text-cream-50 hover:border-burgundy-800 shadow-sm transition-all duration-300 ease-luxury focus:outline-none cursor-pointer"
          >
            <svg 
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>{isSalomOpen && !isDirectSalom ? `Назад (${category.title})` : 'Назад'}</span>
          </button>

          {/* Current Catalog & Category Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-500 font-medium">
            <span>{catalog.name}</span>
            <span className="opacity-40">/</span>
            {isSalomOpen ? (
              <>
                {!isDirectSalom && (
                  <>
                    <span className="opacity-70">{category.title}</span>
                    <span className="opacity-40">/</span>
                  </>
                )}
                <span className="text-burgundy-800 font-semibold">SALOM КАТАЛОГИ</span>
              </>
            ) : (
              <span className="text-burgundy-800 font-semibold">{category.title}</span>
            )}
          </div>

        </div>

        {/* Header Section */}
        {isSalomOpen ? (
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 sm:p-5 rounded-3xl bg-white border border-[#E2D2D2] shadow-premium hover:shadow-premium-hover transition-all duration-300">
              <img
                src="/images/logo-salom-header.png"
                alt="Salom"
                className="h-24 sm:h-28 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-900 mb-3 tracking-tight">
              {category.title}
            </h1>
            <div className="w-10 h-0.5 bg-burgundy-700/60 mx-auto"></div>
          </div>
        )}

        {/* Product Photos Grid */}
        {isSalomOpen ? (
          salomItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
              {salomItems.map((item, index) => (
                <ProductImageCard
                  key={item.id || index}
                  item={item}
                  index={index}
                  onClick={() => setLightboxIndex(index)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white/80 border border-cream-300/80 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-premium max-w-xl mx-auto mt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-cream-100 border border-burgundy-700/20 text-burgundy-800 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950 mb-2">
                Маҳсулотлар тез орада қўшилади
              </h3>
              <p className="text-xs sm:text-sm text-ink-500 max-w-md mx-auto">
                Маҳсулотлар рўйхати сиз тасдиқлаганингиздан сўнг юкланади.
              </p>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryItems.map((item, index) => (
              <ProductImageCard
                key={item.id || index}
                item={item}
                index={index}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        )}

        {/* Salom Button (direct click without book flip) */}
        {!isSalomOpen && categorySlug !== 'narezki' && (
          <div className="mt-8 sm:mt-12 flex justify-start animate-fade-in">
            <button
              type="button"
              onClick={handleOpenSalom}
              aria-label="Salom каталогига ўтиш"
              className="group relative inline-flex items-center justify-between gap-4 pl-5 pr-3 py-2 sm:pl-6 sm:pr-3.5 sm:py-2.5 rounded-full bg-white border border-[#E2D2D2] shadow-premium hover:shadow-premium-hover transition-all duration-300 ease-luxury transform hover:-translate-y-0.5 cursor-pointer"
            >
              <img
                src="/images/logo-salom.png"
                alt="Salom"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 ease-luxury group-hover:scale-105"
              />
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-burgundy-800 to-burgundy-950 text-white flex items-center justify-center shadow-sm transition-transform duration-300 ease-luxury group-hover:translate-x-1">
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </div>
        )}


        {/* Lightbox Viewer (for both standard and Salom items) */}
        {lightboxIndex !== null && (() => {
          const viewerItems = isSalomOpen ? salomItems : categoryItems;
          return (
            <ImageViewer
              items={viewerItems}
              currentIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : viewerItems.length - 1))}
              onNext={() => setLightboxIndex((prev) => (prev < viewerItems.length - 1 ? prev + 1 : 0))}
              onSelectIndex={(idx) => setLightboxIndex(idx)}
            />
          );
        })()}

      </div>
    </div>
  );
}
