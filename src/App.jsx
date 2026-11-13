import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [selectedCatalog, setSelectedCatalog] = useState('sagban');
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  // Sync route on popstate (browser back/forward buttons)
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash.replace('#', '');
      setCurrentRoute(hash || path);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    if (window.location.protocol === 'file:') {
      window.location.hash = path;
    } else {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    navigateTo('/');
  };

  const handleSelectCategory = (categorySlug) => {
    navigateTo(`/catalog/${categorySlug}`);
  };

  // Determine if we are on a category page
  const categoryMatch = currentRoute.match(/\/catalog\/([a-zA-Z0-9_-]+)/);
  const activeCategorySlug = categoryMatch ? categoryMatch[1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-ink-900 font-sans selection:bg-burgundy-800 selection:text-cream-50">
      
      {/* Top Header with Animated Certificate Button in Top Right */}
      <Header
        onLogoClick={navigateHome}
        onCertificateClick={() => setIsCertificateModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeCategorySlug ? (
          <CategoryPage
            categorySlug={activeCategorySlug}
            activeCatalog={selectedCatalog}
            onBack={navigateHome}
          />
        ) : (
          <HomePage
            selectedCatalog={selectedCatalog}
            setSelectedCatalog={setSelectedCatalog}
            onSelectCategory={handleSelectCategory}
          />
        )}
      </main>

      {/* Footer strictly with specified company info */}
      <Footer />

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />

    </div>
  );
}
