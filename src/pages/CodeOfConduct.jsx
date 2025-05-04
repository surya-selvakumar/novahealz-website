import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function CodeOfConduct() {
  const principles = [
    "Honesty and transparency in all business dealings.",
    "Respectful and inclusive behavior in the workplace.",
    "Compliance with all legal and regulatory requirements.",
    "Commitment to safety, quality, and patient well-being."
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#f9fbfd' }}
    >
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '4rem 1rem 2rem', background: '#eaf2f8' }}>
        <motion.h1
          style={{ fontSize: '2.8rem', fontWeight: '700', color: '#003366' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Code of Conduct
        </motion.h1>

        <motion.p
          style={{
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '1rem auto 0',
            color: '#333',
            lineHeight: '1.6'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At NovaHealz, we uphold integrity, inclusivity, and responsibility at every level. Our Code of Conduct guides ethical behavior and fosters a culture of excellence for all team members and collaborators.
        </motion.p>
      </section>

      {/* Principle Cards */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                background: '#f5f9ff',
                border: '1px solid #d6e4f0',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
              }}
            >
              <FaCheckCircle size={40} color="#0066cc" style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.6' }}>{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Download Section (optional) */}
      {/* <section style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <a
          href="/code_of_conduct_v1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#0066cc',
            color: '#ffffff',
            padding: '0.8rem 1.6rem',
            borderRadius: '6px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '2rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          📄 Download Full Code of Conduct (PDF)
        </a>
      </section> */}
    </motion.div>
  );
}
