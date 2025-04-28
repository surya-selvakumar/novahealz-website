import React from 'react';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Products Hero Section */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f5f7fa' }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2.5rem', color: '#003366', fontWeight: '700' }}
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', color: '#555' }}
        >
          Delivering advanced solutions that redefine wound care, improve healing, and empower recovery.
        </motion.p>
      </section>

      {/* Products Grid */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {/* Product 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/products/beemashield.png" alt="BeemaShield product" style={{
                width: '110%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>
                BeemaShield <small style={{ color: '#999' }}>(name subject to change)</small>
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                A next-generation wound dressing designed for diabetic foot ulcer care, providing enhanced protection and healing support.
              </p>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/products/mamacura.png" alt="MamaCura product" style={{
                width: '110%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>MamaCura</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                An innovative post-natal wound care solution to help new mothers recover faster and more comfortably after childbirth.
              </p>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/products/oncology.png" alt="Oncology Wound Care product" style={{
                width: '110%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>
                Oncology Wound Care <small style={{ color: '#999' }}>(Coming Soon)</small>
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                We are developing specialized wound care products for patients undergoing cancer treatment. (Product details coming soon.)
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
