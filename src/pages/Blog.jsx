import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#f9fbfd', padding: '4rem 2rem' }}
    >
      <h1 style={{ textAlign: 'center', color: '#003366', fontSize: '2.5rem', marginBottom: '3rem' }}>
        News & Updates
      </h1>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>

        {/* Converge Kickstart Challenge */}
        <motion.div 
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/others/converge.jpeg" alt="Converge Kickstart Challenge" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ color: '#003366', fontSize: '1.4rem', marginBottom: '1rem' }}>
              NovaHealZ selected for Converge Kickstart Challenge 2025
            </h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              We’re proud to share that NovaHealZ has been selected for Scotland’s leading programme for early-stage, high-potential startups. Grateful to the Converge Challenge team for the support and recognition. Looking forward to networking and transforming wound care.
            </p>
            <a
              href="https://shorturl.at/GDeXc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: '#0066cc',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              📖 Read more
            </a>
          </div>
        </motion.div>

        {/* Signal Feature */}
        <motion.div 
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/others/signal.jpeg" alt="Featured by Signal" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ color: '#003366', fontSize: '1.4rem', marginBottom: '1rem' }}>
              NovaHealZ featured by Signal
            </h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
            We’re excited to be spotlighted in Signal’s Week 18 market intelligence newsletter as one of the recently launched startups transforming healthcare. Signal’s curated insights highlight early indicators of innovation, helping investors and founders identify the next wave of market leaders.

            Grateful to be featured alongside exceptional companies and eager to continue building solutions that redefine wound care with compassion and technology.

            </p>
            <a
              href="https://shorturl.at/Q5wWU"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: '#0066cc',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              🔗 Read article
            </a>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
