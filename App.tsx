
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingView from './views/LandingView';
import AboutPage from './views/AboutPage';
import WorkPage from './views/WorkPage';
import BlogPage from './views/BlogPage';
import BlogDetailPage from './views/BlogDetailPage';
import GuestbookPage from './views/GuestbookPage';
import LinksPage from './views/LinksPage';
import UsesPage from './views/UsesPage';
import AttributesPage from './views/AttributesPage';
import ContactPage from './views/ContactPage';
import EducationIITMPage from './views/EducationIITMPage';
import EducationNewCollegePage from './views/EducationNewCollegePage';
import { motion, AnimatePresence } from 'framer-motion';

export type ViewState = 'home' | 'about' | 'work' | 'blog' | 'blog-detail' | 'guestbook' | 'links' | 'uses' | 'attributes' | 'contact' | 'edu-iitm' | 'edu-newcollege';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark); 
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navigateTo = (view: ViewState, postId?: string) => {
    if (postId) setSelectedPostId(postId);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent-violet selection:text-white bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 flex flex-col">
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        currentView={currentView}
        onNavigate={navigateTo}
      />
      
      <main className="relative pt-2 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {currentView === 'home' && <LandingView onNavigate={navigateTo} isDark={isDark} />}
            {currentView === 'about' && <AboutPage onNavigate={navigateTo} />}
            {currentView === 'work' && <WorkPage onNavigate={navigateTo} />}
            {currentView === 'blog' && <BlogPage onNavigate={navigateTo} />}
            {currentView === 'blog-detail' && <BlogDetailPage onNavigate={navigateTo} postId={selectedPostId} />}
            {currentView === 'guestbook' && <GuestbookPage />}
            {currentView === 'links' && <LinksPage onNavigate={navigateTo} />}
            {currentView === 'uses' && <UsesPage />}
            {currentView === 'attributes' && <AttributesPage />}
            {currentView === 'contact' && <ContactPage isDark={isDark} />}
            {currentView === 'edu-iitm' && <EducationIITMPage onNavigate={navigateTo} />}
            {currentView === 'edu-newcollege' && <EducationNewCollegePage onNavigate={navigateTo} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
