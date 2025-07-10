import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Research from './pages/Research';
import Responsibility from './pages/Responsibility';
import Investors from './pages/Investors';
import Blog from './pages/Blog';
import CodeOfConduct from './pages/CodeOfConduct';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';


function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <ScrollToTop />
      {/* AnimatePresence enables page transition animations */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/research" element={<Research />} />
          <Route path="/responsibility" element={<Responsibility />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
