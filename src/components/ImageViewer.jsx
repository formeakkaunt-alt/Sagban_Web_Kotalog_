import React, { useEffect, useCallback, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const faceStyle = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
};

const serifStyle = {
  fontFamily: '"PT Serif", Palatino, "Palatino Linotype", Charter, Georgia, serif',
};

// Optional back-side fields. Fill `details` for a product in catalogData.js, e.g.
// details: { title: '...', subtitle: '...', composition: '...', storage: '+2…+6 °C', shelfLife: '20 суток', weight: '100 г', nutrition: '...' }
const GOLD = '#D9BC84';

const iconProps = {
  className: 'w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const DETAIL_ICONS = {
  // leaf
  composition: (
    <svg {...iconProps}>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19c3-4 6-7 10-10" />
    </svg>
  ),
  // thermometer
  storage: (
    <svg {...iconProps}>
      <path d="M12 4a2 2 0 0 0-2 2v8.3a4 4 0 1 0 4 0V6a2 2 0 0 0-2-2z" />
      <path d="M12 10v6" />
      <path d="M17 6h3M17 9h2M17 12h3" />
    </svg>
  ),
  // clock
  shelfLife: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  // weight
  weight: (
    <svg {...iconProps}>
      <circle cx="12" cy="6" r="2" />
      <path d="M7.5 9h9l2.5 10.5H5L7.5 9z" />
    </svg>
  ),
  // list
  nutrition: (
    <svg {...iconProps}>
      <path d="M8 6h11M8 12h11M8 18h11" />
      <circle cx="4.5" cy="6" r="0.6" />
      <circle cx="4.5" cy="12" r="0.6" />
      <circle cx="4.5" cy="18" r="0.6" />
    </svg>
  ),
};

const DETAIL_FIELDS = [
  { key: 'composition', label: 'Состав' },
  { key: 'storage', label: 'Условия хранения' },
  { key: 'shelfLife', label: 'Срок хранения' },
  { key: 'weight', label: 'Масса нетто' },
  { key: 'nutrition', label: 'Пищевая ценность' },
];

// Thin gold rule with a small diamond in the middle
function GoldDivider({ className = '', style }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} style={style} aria-hidden="true">
      <span className="h-px w-16 sm:w-28" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }}></span>
      <span className="w-2 h-2 rotate-45 border" style={{ borderColor: GOLD }}></span>
      <span className="h-px w-16 sm:w-28" style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }}></span>
    </div>
  );
}

// Small ornament for the corners of the gold frame
function CornerOrnament({ position }) {
  const pos = {
    tl: 'top-2 left-2 sm:top-3 sm:left-3',
    tr: 'top-2 right-2 sm:top-3 sm:right-3 rotate-90',
    br: 'bottom-2 right-2 sm:bottom-3 sm:right-3 rotate-180',
    bl: 'bottom-2 left-2 sm:bottom-3 sm:left-3 -rotate-90',
  }[position];
  return (
    <svg className={`absolute w-5 h-5 sm:w-6 sm:h-6 pointer-events-none ${pos}`} viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1" aria-hidden="true">
      <path d="M2 14V2h12" />
      <circle cx="2" cy="2" r="1.4" fill={GOLD} stroke="none" />
    </svg>
  );
}

export default function ImageViewer({ items, currentIndex, onClose, onPrev, onNext, onSelectIndex }) {
  const currentItem = items && items[currentIndex];
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipCount, setFlipCount] = useState(0); // restarts the glass-sheen animation on each flip
  const justSwipedRef = useRef(false);
  const minSwipeDistance = 40;

  const details = (currentItem && currentItem.details) || {};
  const filledFields = DETAIL_FIELDS.filter((f) => details[f.key]);
  const hasDetails = Boolean(details.title || filledFields.length > 0);
  // Text on the back fades in one line after another once the card has turned
  const revealClass = isFlipped ? 'back-reveal' : 'opacity-0';
  const revealDelay = (step) => `${380 + step * 80}ms`;

  // Always show the photo side when switching to another product
  useEffect(() => {
    setIsFlipped(false);
  }, [currentIndex]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onPrev();
    } else if (e.key === 'ArrowRight') {
      onNext();
    }
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  const onTouchStartHandler = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      // A swipe must not also count as a tap that flips the card
      justSwipedRef.current = true;
      setTimeout(() => { justSwipedRef.current = false; }, 400);
    }
    if (distance > minSwipeDistance) {
      onNext();
    } else if (distance < -minSwipeDistance) {
      onPrev();
    }
  };

  const handleFlip = () => {
    if (justSwipedRef.current) return;
    setIsFlipped((prev) => !prev);
    setFlipCount((c) => c + 1);
  };

  if (!currentItem) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-4 sm:p-6 bg-black/92 backdrop-blur-md select-none transition-opacity duration-300"
      onTouchStart={onTouchStartHandler}
      onTouchMove={onTouchMoveHandler}
      onTouchEnd={onTouchEndHandler}
      style={{ isolation: 'isolate' }}
    >
      
      {/* Top Bar: Counter & Close */}
      <div className="relative z-20 w-full max-w-6xl flex items-center justify-between text-white pt-2 pb-1">
        <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold bg-white/15 px-4 py-1.5 rounded-full border border-white/20">
          {currentIndex + 1} / {items.length}
        </span>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-burgundy-700 border border-white/25 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Image Area with Left & Right Arrows */}
      <div className="relative z-10 w-full max-w-5xl flex-1 flex items-center justify-center px-2 py-2 sm:px-14">
        
        {/* Prev Arrow */}
        {items.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 sm:left-4 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-burgundy-800/90 hover:bg-burgundy-700 text-white border border-burgundy-600/40 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            aria-label="Предыдущее фото"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Product Card Container — click the photo to flip it and see the back side */}
        <div
          className="w-full max-w-3xl h-[58vh] sm:h-[64vh] cursor-pointer"
          style={{ perspective: '1800px' }}
          onClick={(e) => {
            e.stopPropagation();
            handleFlip();
          }}
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleFlip();
            }
          }}
        >
          <div
            className="relative w-full h-full transition-transform duration-700 ease-luxury"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* FRONT: photo (White Frame for transparent/white sausages) */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-cream-200 overflow-hidden"
              style={faceStyle}
              aria-hidden={isFlipped}
            >
              {currentItem.image ? (
                <img
                  key={currentItem.image}
                  src={currentItem.image}
                  alt="Продукция SAGBAN"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 text-ink-700">
                  <span className="font-serif text-2xl font-bold mb-2 text-burgundy-900">
                    Фото #{currentIndex + 1}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-ink-500">
                    Место для фотографии
                  </span>
                </div>
              )}

              {/* Glass sheen sweep (restarts on every flip) */}
              {flipCount > 0 && (
                <div key={flipCount} className="sheen-bar sheen-bar-light" aria-hidden="true"></div>
              )}
            </div>

            {/* BACK: product information (empty placeholder until details are added) */}
            <div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-burgundy-700 shadow-2xl overflow-hidden"
              style={{
                ...faceStyle,
                transform: 'rotateY(180deg)',
                background: 'radial-gradient(ellipse at 50% 40%, #6E1F2C 0%, #48131B 55%, #2A0A10 100%)',
              }}
              aria-hidden={!isFlipped}
            >
              {hasDetails ? (
                <>
                  {/* double gold frame + corner ornaments */}
                  <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border pointer-events-none" style={{ borderColor: 'rgba(217,188,132,0.55)' }}></div>
                  <div className="absolute inset-[13px] sm:inset-[19px] rounded-lg sm:rounded-xl border pointer-events-none" style={{ borderColor: 'rgba(217,188,132,0.3)' }}></div>
                  <CornerOrnament position="tl" />
                  <CornerOrnament position="tr" />
                  <CornerOrnament position="br" />
                  <CornerOrnament position="bl" />

                  <div
                    key={isFlipped ? `in-${flipCount}` : 'out'}
                    className="relative h-full overflow-y-auto px-7 py-8 sm:px-14 sm:py-10 flex flex-col"
                  >
                    <div className="my-auto w-full flex flex-col items-center text-center">
                    {/* top label */}
                    <div
                      className={`text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium ${revealClass}`}
                      style={{ color: GOLD, animationDelay: revealDelay(0) }}
                    >
                      SAGBAN · Premium Selection
                    </div>

                    <GoldDivider className={`mt-3 sm:mt-4 ${revealClass}`} style={{ animationDelay: revealDelay(1) }} />

                    {/* title + subtitle */}
                    {details.title && (
                      <h3
                        className={`mt-3 sm:mt-5 font-serif text-3xl sm:text-5xl leading-tight text-cream-50 ${revealClass}`}
                        style={{ animationDelay: revealDelay(2), textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
                      >
                        {details.title}
                      </h3>
                    )}
                    {details.subtitle && (
                      <p
                        className={`mt-2 font-serif italic text-base sm:text-xl ${revealClass}`}
                        style={{ color: GOLD, animationDelay: revealDelay(3) }}
                      >
                        {details.subtitle}
                      </p>
                    )}

                    <GoldDivider className={`mt-4 sm:mt-5 ${revealClass}`} style={{ animationDelay: revealDelay(4) }} />

                    {/* info grid: 2×2 on desktop, single column on phones */}
                    {filledFields.length > 0 && (
                      <div className="mt-4 sm:mt-6 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 text-left">
                        {filledFields.map((f, i) => {
                          const borders = [
                            i > 0 ? 'border-t' : '',
                            i < 2 ? 'sm:border-t-0' : 'sm:border-t',
                            i % 2 === 0 && i < filledFields.length - 1 ? 'sm:border-r' : '',
                          ].join(' ');
                          return (
                            <div
                              key={f.key}
                              className={`flex items-start gap-3 sm:gap-4 py-3 sm:py-4 px-1 sm:px-6 ${borders} ${revealClass}`}
                              style={{ borderColor: 'rgba(217,188,132,0.28)', animationDelay: revealDelay(5 + i) }}
                            >
                              <span className="mt-0.5" style={{ color: GOLD }}>{DETAIL_ICONS[f.key]}</span>
                              <div className="min-w-0">
                                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold mb-1" style={{ color: GOLD }}>
                                  {f.label}
                                </div>
                                <div className="text-[15px] sm:text-lg leading-snug text-cream-50" style={serifStyle}>
                                  {details[f.key]}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* decorative inner frame */}
                  <div className="absolute inset-3 sm:inset-5 rounded-xl sm:rounded-2xl border border-cream-200/20 pointer-events-none"></div>
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="w-14 h-14 rounded-full border border-cream-200/30 flex items-center justify-center mb-5 text-cream-200/80">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-cream-50 tracking-wide" style={serifStyle}>
                      Маълумот тез орада қўшилади
                    </span>
                  </div>
                </>
              )}

              {/* Glass sheen sweep (restarts on every flip) */}
              {flipCount > 0 && (
                <div key={flipCount} className="sheen-bar sheen-bar-dark" aria-hidden="true"></div>
              )}
            </div>
          </div>
        </div>

        {/* Next Arrow */}
        {items.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 sm:right-4 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-burgundy-800/90 hover:bg-burgundy-700 text-white border border-burgundy-600/40 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            aria-label="Следующее фото"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

      </div>

      {/* Bottom Thumbnails Strip */}
      {items.length > 1 && (
        <div className="relative z-20 w-full max-w-4xl py-2 flex items-center justify-center">
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/60 backdrop-blur-sm border border-white/15 overflow-x-auto max-w-full">
            {items.map((item, idx) => (
              <button
                key={item.id || idx}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelectIndex) onSelectIndex(idx);
                }}
                className={`relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-white p-1 cursor-pointer ${
                  idx === currentIndex
                    ? 'border-burgundy-500 scale-110 shadow-lg ring-2 ring-burgundy-400'
                    : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white'
                }`}
              >
                {item.image ? (
                  <img src={item.image} alt="" className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-ink-700">
                    {idx + 1}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>,
    document.body
  );
}
