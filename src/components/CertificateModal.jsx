import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function CertificateModal({ isOpen, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fade-in"
      style={{ isolation: 'isolate' }}
    >
      
      {/* Darkened Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-premium-modal border border-cream-200 flex flex-col overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200 bg-cream-50/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-burgundy-700"></span>
            <span className="font-serif text-base sm:text-lg font-semibold text-burgundy-900">
              Сертификат соответствия
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cream-200/80 hover:bg-burgundy-800 text-ink-700 hover:text-white flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="Закрыть"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Certificate Image Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-cream-100/40">
          <img
            src="/certificate.jpg"
            alt="Сертификат соответствия «SAGBAN»"
            className="max-h-[75vh] w-auto object-contain rounded-xl shadow-md border border-cream-200"
          />
        </div>

      </div>
    </div>,
    document.body
  );
}
