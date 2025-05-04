import React from 'react';
import { motion } from 'framer-motion';

export default function CodeOfConduct() {
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
          Code of Conduct
        </motion.h1>

        <motion.p
          style={{ maxWidth: '800px', margin: '1rem auto 0', fontSize: '1.1rem', color: '#555' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          NovaHealz is committed to the highest standards of integrity and ethics. Our Code of Conduct outlines principles and expectations for all team members and partners.
        </motion.p>
      </section>

      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.ul
            style={{ listStyle: 'disc', paddingLeft: '2rem', fontSize: '1rem', color: '#555', lineHeight: '1.8' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <li>Honesty and transparency in all business dealings.</li>
            <li>Respectful and inclusive behavior in the workplace.</li>
            <li>Compliance with all legal and regulatory requirements.</li>
            <li>Commitment to safety, quality, and patient well-being.</li>
          </motion.ul>

          {/* <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#555', textAlign: 'center' }}>
            <a href="/code_of_conduct_v1.pdf" target="_blank" rel="noopener noreferrer"
              style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: '600' }}>
              📄 Download Full Code of Conduct (PDF)
            </a>
          </p> */}
        </div>
      </section>
    </motion.div>
  );
}
