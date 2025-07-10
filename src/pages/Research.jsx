import React from 'react';
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Research Hero Section */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f5f7fa' }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2.5rem', color: '#003366', fontWeight: '700' }}
        >
          Research & Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', color: '#555' }}
        >
          Advancing healing with evidence-based therapies and groundbreaking innovation in wound care.
        </motion.p>
      </section>

      {/* Overview Section */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '1rem', color: '#666', lineHeight: '1.7', textAlign: 'center' }}
          >
            Our R&D team is relentlessly focused on developing patient-first therapies and technologies across key wound care domains. Through collaboration with healthcare leaders and institutions, we ensure that every innovation is grounded in scientific excellence and clinical relevance.
          </motion.p>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section style={{ background: '#f0f4f8', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', color: '#003366', fontSize: '2rem', marginBottom: '2rem' }}
          >
            Therapeutic Focus Areas
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {/* Area 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/labs/footulcer.jpg" alt="Diabetic Foot Ulcer Research" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>Diabetic Foot Ulcer</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                Developing advanced therapies to improve healing outcomes for diabetic foot ulcers, enhancing patient recovery and quality of life.
              </p>
            </motion.div>

            {/* Area 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/labs/natal.jpg" alt="Post-Natal Wound Care Research" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>Post-Natal Wound Care</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                Innovating specialized post-partum care solutions to assist mothers in faster, safer recovery from C-sections and childbirth-related wounds.
              </p>
            </motion.div>

            {/* Area 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/labs/cancer.jpg" alt="Oncology Wound Care Research" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>Oncology-Related Wounds</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                Exploring therapies to aid healing in cancer patients, including post-surgical wounds and radiation-induced skin injuries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Note */}
      {/* <section style={{ background: '#ffffff', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '1rem', color: '#666', lineHeight: '1.7' }}
          >
            We proudly collaborate with leading medical experts and research institutions to ensure every innovation is grounded in scientific rigor and tailored to real-world patient needs.
          </motion.p>
        </div>
      </section> */}
    </motion.div>
  );
}
