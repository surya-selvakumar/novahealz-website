import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
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
          Company Blog
        </motion.h1>
        <motion.p
          style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', color: '#555' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our blog is currently under construction. Soon you'll find the latest news, research insights, and inspiring stories here.
        </motion.p>
        <motion.p
          style={{ fontStyle: 'italic', color: '#777', marginTop: '1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Stay tuned for updates!
        </motion.p>
      </section>
    </motion.div>
  );
}
