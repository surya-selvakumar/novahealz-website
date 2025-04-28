import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  { type: 'video', src: '/others/video1.mp4' },
  { type: 'video', src: '/others/video2.mp4' },
  { type: 'video', src: '/others/video3.mp4' },
  { type: 'image', src: '/others/image3.jpg' },
  { type: 'image', src: '/others/image4.jpg' },
  { type: 'image', src: '/others/image5.jpg' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Fullscreen Hero Section */}
      <section style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}>
        <AnimatePresence mode="wait">
          {slides[currentSlide].type === 'image' ? (
            <motion.img
              key={slides[currentSlide].src}
              src={slides[currentSlide].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              alt="Hero Slide"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0px'
              }}
            />
          ) : (
            <motion.video
              key={slides[currentSlide].src}
              src={slides[currentSlide].src}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0px'
              }}
            />
          )}
        </AnimatePresence>
      </section>

      {/* Hero Text */}
      <div style={{
        height: '100vh',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        padding: '0 2rem',
      }}>
        <h1 style={{
      fontSize: '2.8rem',
      fontWeight: '700',
      color: '#ffffff',               // ADD THIS
      textShadow: '2px 2px 8px rgba(0,0,0,0.8)', // make shadow slightly darker
    }}>
      Transforming Wound Care through Innovation
    </h1>

    <p style={{
      maxWidth: '700px',
      marginTop: '1rem',
      fontSize: '1.1rem',
      color: '#ffffff',                // ADD THIS
      textShadow: '1px 1px 6px rgba(0,0,0,0.7)', // stronger shadow
    }}>
      Improving lives and advancing healthcare worldwide with sustainable, patient-centered products.
    </p>
        <Link to="/about" className="btn" style={{ marginTop: '2rem' }}>
          Learn More
        </Link>
      </div>

      {/* Cards Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          padding: '4rem 2rem',
          background: 'transparent',
          marginTop: '100vh'
        }}
      >
        <div style={{
          maxWidth: '1500px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {/* Products Highlight */}
          <motion.div
            className="card"
            whileHover={{ scale: 1.03 }}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
            }}
          >
            <img src="/products/woundcare.jpg" alt="Wound care product" style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1rem'
            }} />
            <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>Our Products</h3>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>
              Discover our cutting-edge wound care solutions, from advanced dressings to smart healing devices.
            </p>
            <Link to="/products" className="btn" style={{ marginTop: '1rem' }}>Explore Products</Link>
          </motion.div>

          {/* Research Highlight */}
          <motion.div
            className="card"
            whileHover={{ scale: 1.03 }}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
            }}
          >
            <img src="/labs/research.jpg" alt="Research lab" style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1rem'
            }} />
            <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>Research & Development</h3>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>
              Learn about the scientific research and innovation driving our therapeutic developments.
            </p>
            <Link to="/research" className="btn" style={{ marginTop: '1rem' }}>Our Research</Link>
          </motion.div>

          {/* Responsibility Highlight */}
          <motion.div
            className="card"
            whileHover={{ scale: 1.03 }}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
            }}
          >
            <img src="/labs/ethics.png" alt="Sustainability" style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1rem'
            }} />
            <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>Responsibility</h3>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>
              See how we prioritize sustainability, social responsibility, and ethical governance in our mission.
            </p>
            <Link to="/responsibility" className="btn" style={{ marginTop: '1rem' }}>Learn More</Link>
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
}
