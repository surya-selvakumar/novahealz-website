import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const teamImages = [
  '/team/grp7.jpg',
  '/team/grp1.jpg',
  '/team/grp8.jpeg',
  '/team/grp2.jpg',
  '/team/grp4.jpg'
];


export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % teamImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Title */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f5f7fa' }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2.5rem', color: '#003366', fontWeight: '700' }}
        >
          About NovaHealz
        </motion.h1>
        <motion.p
          style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', color: '#555' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Pioneering wound care innovation with sustainable solutions that transform patient lives globally.
        </motion.p>
      </section>

      {/* Vision and Mission */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ color: '#003366', fontSize: '2rem', marginBottom: '1rem' }}>
            Our Vision
          </motion.h2>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.7' }}>
            To revolutionize wound care through innovative, sustainable, and accessible solutions globally.
          </p>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ color: '#003366', fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>
            Our Mission
          </motion.h2>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.7' }}>
            To deliver fast-healing, eco-friendly, and affordable wound care products for all.
          </p>
        </div>

        {/* Team Group Slideshow */}
        <div style={{
          marginTop: '3rem',
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
          borderRadius: '12px'
        }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={teamImages[currentImage]}
              alt="Team Group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: (teamImages[currentImage].includes('grp7') || teamImages[currentImage].includes('grp8')) ? 'contain' : 'cover',
                borderRadius: '12px',
                position: 'absolute',
                top: 0,
                left: 0,
                background: '#000'
              }}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: '#f0f4f8', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ color: '#003366', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Our Core Values
          </motion.h2>

          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { title: 'Patient-First Innovation', desc: 'Every decision we make focuses on patient well-being.' },
              { title: 'Accessibility & Affordability', desc: 'Striving for world-class research, product quality, and services.' },
              { title: 'Honesty & Transparency', desc: 'Commitment to clear and open communication with stakeholders.' },
              { title: 'Respect for All', desc: 'Fostering diversity, inclusion, and collaboration across teams.' },
              { title: 'Courage to Question', desc: 'Encouraging constructive debate and innovation.' },
              { title: 'Sustainability & Responsibility', desc: 'Embedding environmental and social responsibility into everything we do.' }
            ].map((value, idx) => (
              <motion.li key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              >
                <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{value.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* History */}
      <section style={{ background: '#ffffff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ color: '#003366', fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
            Our Story
          </motion.h2>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center'}}>
            NovaHealZ: A Story of Purpose and Innovation
          </motion.h2>
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.7' }}>
          NovaHealZ was founded by Akash Pande Rajeshkumar, whose journey into the field of
          wound care began with a deeply personal experience. His grandfather, a long-time
          diabetic, was suddenly diagnosed with a diabetic foot ulcer. A small wound on his toe,
          which failed to heal for months, severely impacted his ability to walk, leading to
          prolonged suffering. This difficult experience sparked a deep sense of responsibility in
          Akash to find a solution for diabetic foot ulcers, which are a growing concern in diabetes
          management.
          Akash’s search for better healing solutions led him to dedicate a year of intense research
          and experimentation, developing a unique wound care product specifically designed to
          accelerate healing in diabetic foot ulcers.
          With support from his close-knit group of friends, who are now all C-level executives
          within the company, NovaHealZ was officially born. The founding team benefited from
          invaluable mentorship and guidance from the University of Glasgow’s Enterprise team,
          which helped shape their vision and provided strategic direction. This collaboration,
          combined with the team’s passion and determination, allowed them to turn a personal
          struggle into a pioneering business that will change the landscape of wound care.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ background: '#f5f7fa', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 style={{ textAlign: 'center', color: '#003366', fontSize: '2rem', marginBottom: '3rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
            Leadership Team
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {[
              { img: '/team/akash.jpeg', name: 'Akash Pande Rajeshkumar', role: 'Founder & Chief Executive Officer and Head of Ethics & Compliance' },
              { img: '/team/narmadha.jpg', name: 'Narmadha M', role: 'Co-Founder & Cheif Scientific Officer' },
              { img: '/team/mrinal.jpeg', name: 'Mrinal Tripathi', role: 'Chief Operations Officer & Head of Sustainability' },
              { img: '/team/thendral.jpeg', name: 'Elanthendral Gopalsami', role: 'Chief Finance & Human Resource Officer ' },
              { img: '/team/aayushi.jpeg', name: 'Aayushi Kasture', role: 'Chief Procurement and Supply Chain Officer' },
              { img: '/team/leanne.jpeg', name: 'Leanne Fernandes', role: 'Chief Commercial & Global Corporate Affairs Officer ' },
              { img: '/team/sayan.jpeg', name: 'Sayan Ghosh', role: 'Chief Marketing & Business Development Officer ' },
              { img: '/team/surya.jpg', name: 'Surya Selvakumar', role: 'Chief Data & Technology Officer ' },
              { img: '/team/neha.jpg', name: 'Nekha M Mohan', role: 'Chief Administrative Officer' }
            ].map((leader, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  textAlign: 'center',
                  padding: '1.5rem',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
                }}
              >
                <img src={leader.img} alt={leader.name} style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem'
                }} />
                <h3 style={{ color: '#003366', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{leader.name}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
