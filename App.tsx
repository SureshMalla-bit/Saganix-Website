
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeContent } from './components/HomeContent';
import { Work } from './components/Work';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { LeadForm } from './components/LeadForm';
import { Hub } from './components/Hub';
import { ComingSoon } from './components/ComingSoon';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

type ViewState = 'hub' | 'home' | 'work' | 'about' | 'services' | 'contact';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [view, setView] = useState<ViewState>('hub');

  const goToHub = () => setView('hub');

  if (view === 'hub') {
    return (
      <div className="bg-background min-h-screen text-ivory selection:bg-gold selection:text-background overflow-hidden relative bg-grain">
        <CustomCursor />
        <Hub 
          onEnterProduction={() => setView('home')} 
          onEnterLearning={() => setView('home')}
        />
      </div>
    );
  }

  const renderMainContent = () => {
    switch (view) {
        case 'about':
            return <About onNavigate={(v) => setView(v as any)} />;
        case 'services':
            return <Services onNavigate={(v) => setView(v as any)} />;
        case 'contact':
            return <Contact />;
        case 'work':
            return <Work onNavigate={(v) => setView(v as any)} />;
        case 'home':
        default:
            return <HomeContent onNavigate={(v) => setView(v as any)} />;
    }
  };

  return (
    <div className="bg-background min-h-screen text-ivory selection:bg-gold selection:text-background overflow-x-hidden relative bg-grain animate-in fade-in duration-1000">
      <CustomCursor />
      <Navbar 
        onOpenForm={() => setIsFormOpen(true)} 
        onGoToHub={goToHub}
        onNavigate={(newView) => setView(newView as any)}
        currentView={view}
      />
      <main>
        {renderMainContent()}
      </main>
      <Footer onGoToHub={goToHub} onNavigate={(v) => setView(v as any)} />
      
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default App;
