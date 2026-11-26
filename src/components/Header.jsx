import React, { useState, useEffect, useCallback } from 'react';

// Name of the hashed JS bundle that is currently running, e.g. "/assets/index-AbC123.js".
// Every deploy with new products/data produces a new name, so it works as a version id.
const getRunningBundle = () => {
  try {
    const el = document.querySelector('script[type="module"][src*="/assets/index-"]');
    return el ? new URL(el.getAttribute('src'), window.location.origin).pathname : null;
  } catch (e) {
    return null;
  }
};

// Asks the server (bypassing every cache) which bundle is the latest one.
const fetchLatestBundle = async () => {
  try {
    const res = await fetch(`/?_chk=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const html = await res.text();
    const m = html.match(/src="([^"]*\/assets\/index-[^"]+\.js)"/);
    return m ? new URL(m[1], window.location.origin).pathname : null;
  } catch (e) {
    return null;
  }
};

export default function Header({ onLogoClick, onCertificateClick }) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [toast, setToast] = useState(null); // null | 'updated' | 'latest'
  const [hasUpdate, setHasUpdate] = useState(false);

  // After a sync-reload: show an honest result and clean the helper param from the URL
  useEffect(() => {
    try {
      const before = sessionStorage.getItem('sagban_sync_from');
      if (before !== null) {
        sessionStorage.removeItem('sagban_sync_from');
        const now = getRunningBundle();
        setToast(before && now && before === now ? 'latest' : 'updated');
        const timer = setTimeout(() => setToast(null), 4200);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('_v')) {
        url.searchParams.delete('_v');
        window.history.replaceState({}, '', url.pathname + url.search + url.hash);
      }
    } catch (e) {}
  }, []);

  // Quietly check for a new version: on open, when the tab becomes visible, and every 5 minutes
  const checkForUpdate = useCallback(async () => {
    const running = getRunningBundle();
    if (!running) return; // dev mode — nothing to compare
    const latest = await fetchLatestBundle();
    if (latest && latest !== running) setHasUpdate(true);
  }, []);

  useEffect(() => {
    checkForUpdate();
    const onVisible = () => { if (document.visibilityState === 'visible') checkForUpdate(); };
    document.addEventListener('visibilitychange', onVisible);
    const interval = setInterval(checkForUpdate, 5 * 60 * 1000);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      clearInterval(interval);
    };
  }, [checkForUpdate]);

  const handleSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);

    try {
      // 1. Clear only this website's own Cache Storage (never personal data / other sites)
      if ('caches' in window) {
        try {
          const cacheKeys = await caches.keys();
          await Promise.all(cacheKeys.map((key) => caches.delete(key)));
        } catch (e) {}
      }

      // 2. Remember which version was running so the result message can be honest
      try {
        sessionStorage.setItem('sagban_sync_from', getRunningBundle() || '');
      } catch (e) {}

      // 3. Reload the current page under a fresh URL so the browser must ask the server
      const url = new URL(window.location.href);
      url.searchParams.set('_v', Date.now().toString());
      window.location.replace(url.toString());
    } catch (err) {
      window.location.reload();
    }
  };

  return (
    <>
      {/* Toast Notification Banner (Appears at top after sync) */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[99999] animate-fade-in transition-all max-w-[92vw]">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-burgundy-950/95 text-cream-50 border border-[#D9BC84] shadow-2xl backdrop-blur-md">
            <span className="w-8 h-8 flex-shrink-0 rounded-full bg-[#D9BC84]/20 flex items-center justify-center text-[#D9BC84]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {toast === 'updated' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                )}
              </svg>
            </span>
            <div className="text-left pr-2">
              <div className="text-xs sm:text-sm font-semibold tracking-wide text-cream-50">
                {toast === 'updated' ? 'Каталог муваффақиятли янгиланди!' : 'Каталог энг сўнгги ҳолатда'}
              </div>
              <div className="text-[11px] text-[#D9BC84]">
                {toast === 'updated' ? 'Янги маҳсулотлар ва маълумотлар юкланди' : 'Янги маҳсулот ёки ўзгариш ҳозирча йўқ'}
              </div>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-cream-200/60 hover:text-white p-1 ml-1 cursor-pointer"
              aria-label="Ёпиш"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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

          {/* Right: Action Buttons («СИНХР» + «СЕРТИФИКАТ») */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Sync Button («СИНХР») */}
            <button
              onClick={handleSync}
              disabled={isSyncing}
              className="relative group overflow-hidden px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-burgundy-700/30 bg-white/90 hover:bg-burgundy-800 text-burgundy-900 hover:text-cream-50 shadow-sm hover:shadow-premium-hover transition-all duration-400 ease-luxury focus:outline-none cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Синхронизация"
              title={hasUpdate ? 'Янги маҳсулотлар бор! Босинг' : 'Каталогни янгилаш ва энг сўнгги маҳсулотларни юклаш'}
            >
              {hasUpdate && !isSyncing && (
                <span className="absolute top-1 right-1.5 z-20 flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#D9BC84] opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9BC84] border border-burgundy-800"></span>
                </span>
              )}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-burgundy-800 transition-transform duration-400 ease-luxury"></div>
              
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                <svg 
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 ${isSyncing ? 'animate-spin text-[#D9BC84]' : 'group-hover:rotate-180'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>{isSyncing ? 'Янгиланмоқда...' : 'СИНХР'}</span>
              </span>
            </button>

            {/* Certificate Button */}
            <button
              onClick={onCertificateClick}
              className="relative group overflow-hidden px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-burgundy-700/30 bg-white/90 hover:bg-burgundy-800 text-burgundy-900 hover:text-cream-50 shadow-sm hover:shadow-premium-hover transition-all duration-400 ease-luxury focus:outline-none cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Сертификат"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-burgundy-800 transition-transform duration-400 ease-luxury"></div>

              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy-600 group-hover:bg-cream-100 transition-colors duration-400"></span>
                <span>Сертификат</span>
                <svg 
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 transform group-hover:translate-x-1 transition-transform duration-400" 
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
    </>
  );
}
