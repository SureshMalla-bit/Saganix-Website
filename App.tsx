
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomeContent } from './components/HomeContent';
import { Work } from './components/Work';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { LeadForm } from './components/LeadForm';
import { Hub } from './components/Hub';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';

const AppInner: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentView = location.pathname.replace('/', '') || 'home';

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      navigate('/');
    } else {
      navigate(`/${view}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (location.pathname === '/hub') {
    return (
      <div className="bg-background min-h-screen text-ivory selection:bg-gold selection:text-background overflow-hidden relative bg-grain">
        <CustomCursor />
        <Hub
          onEnterProduction={() => navigate('/')}
          onEnterLearning={() => navigate('/')}
        />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen text-ivory selection:bg-gold selection:text-background overflow-x-hidden relative bg-grain animate-in fade-in duration-1000">
      <CustomCursor />
      <Navbar
        onOpenForm={() => setIsFormOpen(true)}
        onGoToHub={() => navigate('/hub')}
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomeContent onNavigate={handleNavigate} onOpenForm={() => setIsFormOpen(true)} />} />
          <Route path="/work" element={<Work onNavigate={handleNavigate} />} />
          <Route path="/services" element={<Services onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy onNavigate={handleNavigate} />} />
          <Route path="/terms" element={<Terms onNavigate={handleNavigate} />} />
          <Route path="*" element={<HomeContent onNavigate={handleNavigate} onOpenForm={() => setIsFormOpen(true)} />} />
        </Routes>
      </main>
      <Footer onGoToHub={() => navigate('/hub')} onNavigate={handleNavigate} />
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
};

export default App;
