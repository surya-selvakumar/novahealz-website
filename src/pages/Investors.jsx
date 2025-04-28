import React from 'react';
import { motion } from 'framer-motion';

export default function Investors() {
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f5f7fa' }}>
        <motion.h1
          style={{ fontSize: '2.5rem', color: '#003366', fontWeight: '700' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Investors
        </motion.h1>

        <motion.p
          style={{ maxWidth: '700px', margin: '1rem auto', fontSize: '1.1rem', color: '#555' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are a privately funded startup. Information for investors will be made available soon.
        </motion.p>

        <motion.p
          style={{ fontSize: '1rem', color: '#777', marginTop: '1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <strong>Coming Soon:</strong> Financial updates, presentations, and governance information.
        </motion.p>

        <motion.p
          style={{ marginTop: '2rem', fontSize: '1rem', color: '#555' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Investor inquiries: <a href="mailto:investors@healtech.com" style={{ color: '#0066cc', textDecoration: 'underline' }}>
            investors@healtech.com
          </a>
        </motion.p>
      </section>
    </motion.div>
  );
}
