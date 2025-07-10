import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{ background: '#f9fbfd' }}
    >
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3rem',
        alignItems: 'flex-start'
      }}>
        {/* Left Info */}
        <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#003366' }}>
            Let's Connect
          </h2>
          <p style={{ color: '#444', marginBottom: '2rem', lineHeight: '1.6' }}>
            Interested in learning more about our advanced wound care solutions or discussing a collaboration?
            Reach out to our team — we’re here to help.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <FaMapMarkerAlt size={24} color="#003366" style={{ marginRight: '0.8rem' }} />
            <div>
              <strong style={{ color: '#003366' }}>Location</strong><br />
              Glasgow, UK
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaEnvelope size={24} color="#003366" style={{ marginRight: '0.8rem' }} />
            <div>
              <strong style={{ color: '#003366' }}>Email</strong><br />
              contact@novahealz.com
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div style={{
          flex: '2 1 400px',
          background: '#fff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
          minWidth: '300px'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#003366' }}>
            Request Information
          </h3>
          <form 
            action="https://formspree.io/f/mgvygklv" 
            method="POST" 
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
            <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
            <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
            <input type="text" name="organization" placeholder="Organization" style={inputStyle} />
            <textarea name="message" placeholder="Message" rows="4" required style={inputStyle}></textarea>
            <button 
                type="submit" 
                style={{
                background: '#003366',
                color: '#fff',
                border: 'none',
                padding: '0.9rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
            >
                Send Message
            </button>
            </form>

        </div>
      </section>
    </motion.div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none'
};
