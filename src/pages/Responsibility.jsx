import React from 'react';
import { motion } from 'framer-motion';

export default function Responsibility() {
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title Section */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f5f7fa' }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2.5rem', color: '#003366', fontWeight: '700' }}
        >
          Sustainability & Responsibility
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', color: '#555' }}
        >
          Committed to building a healthier world through sustainable practices, ethical governance, and social responsibility.
        </motion.p>
      </section>

      {/* Core Responsibility Areas */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', color: '#003366', fontSize: '2rem', marginBottom: '2rem' }}
          >
            Our Commitment Areas
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Social Responsibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              {/* <img src="https://via.placeholder.com/300x200?text=Social+Responsibility" alt="Social Responsibility" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} /> */}
              <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>Social Responsibility</h3>
              <ul style={{ listStyle: 'disc', textAlign: 'left', paddingLeft: '1.2rem', color: '#555', fontSize: '0.95rem' }}>
                <li>Achieve 50-50 gender workforce by 2030.</li>
                <li>Foster healthy and inclusive working environments through ESG policies.</li>
              </ul>
            </motion.div>

            {/* Environmental Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              {/* <img src="https://via.placeholder.com/300x200?text=Environmental+Sustainability" alt="Environmental Sustainability" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} /> */}
              <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>Environmental Sustainability</h3>
              <ul style={{ listStyle: 'disc', textAlign: 'left', paddingLeft: '1.2rem', color: '#555', fontSize: '0.95rem' }}>
                <li>Commitment to sustainable production practices.</li>
                <li>Minimizing carbon footprint and environmental impact.</li>
              </ul>
            </motion.div>

            {/* Ethical Governance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              {/* <img src="https://via.placeholder.com/300x200?text=Ethical+Governance" alt="Ethical Governance" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} /> */}
              <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>Ethical Governance</h3>
              <ul style={{ listStyle: 'disc', textAlign: 'left', paddingLeft: '1.2rem', color: '#555', fontSize: '0.95rem' }}>
                <li>Transparent hiring and strict data protection practices.</li>
                <li>Compliance with international human rights and ethical standards.</li>
                <li>Third-party certifications for sustainability (Fair Trade, B Corp, etc.).</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Goals */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', color: '#003366', fontSize: '2rem', marginBottom: '2rem' }}
          >
            Alignment with Global Goals
          </motion.h2>

          <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: '#555', fontSize: '1rem', lineHeight: '1.8' }}>
            <li><strong>SDG 3 (Good Health and Well-being):</strong> Ensuring universal healthcare access by 2030.</li>
            <li><strong>SDG 5 (Gender Equality):</strong> Achieving equal gender representation by 2030.</li>
            <li><strong>SDG 8 (Decent Work and Economic Growth):</strong> Creating inclusive, safe workplaces.</li>
            <li><strong>SDG 13 (Climate Action):</strong> Reducing carbon footprint through sustainable operations.</li>
            <li><strong>SDG 15 (Life on Land):</strong> Protecting ecosystems and preventing biodiversity loss.</li>
          </ul>

          <p style={{ textAlign: 'center', color: '#999', marginTop: '2rem', fontStyle: 'italic' }}>
            (DEI and Ethical Standards initiatives are in development. Detailed reports will be published soon.)
          </p>
        </div>
      </section>
    </motion.div>
  );
}
