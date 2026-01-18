import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SolarSolutions } from './components/SolarSolutions';
import { Project } from './components/Project';
import { Blog } from './components/Blog';
import { Article } from './components/Article';
import { Contact } from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import { BlogPost } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleReadArticle = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('Article');
  };

  const renderPage = () => {
    switch (currentPage) {
        case 'Home': return <Hero onNavigate={setCurrentPage} />;
        case 'About': return <About onNavigate={setCurrentPage} />;
        case 'Solar Solutions': return <SolarSolutions onNavigate={setCurrentPage} />;
        case 'Project': return <Project onNavigate={setCurrentPage} />;
        case 'Blog': return <Blog onNavigate={setCurrentPage} onReadArticle={handleReadArticle} />;
        case 'Article': return <Article post={selectedPost} onNavigate={setCurrentPage} />;
        case 'Contact': return <Contact onNavigate={setCurrentPage} />;
        default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
        >
            {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;