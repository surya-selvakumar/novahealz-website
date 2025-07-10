import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <img src="/logo/logo.jpg" alt="NovaHealz Logo" style={{ height: '40px' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0066cc' }}>NovaHealZ</span>
      </a>

      <nav className="nav-links">
        {/* Direct nav items */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/achievements">Achievements</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        

        {/* More dropdown */}
        <div 
          className="more-menu" 
          onMouseEnter={() => setMoreOpen(true)} 
          onMouseLeave={() => setMoreOpen(false)}
          style={{ position: 'relative' }}
        >
          <span style={{ cursor: 'pointer', fontWeight: '600' }}>
            More ▾
          </span>
          {moreOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              background: '#fff',
              boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
              borderRadius: '6px',
              overflow: 'hidden',
              zIndex: 100,
              width: '220px'
            }}>
              <NavLink to="/" className="dropdown-link">Home</NavLink>
              <NavLink to="/investors" className="dropdown-link">Investors</NavLink>
              <NavLink to="/responsibility" className="dropdown-link">Responsibility</NavLink>
              <NavLink to="/code-of-conduct" className="dropdown-link">Code of Conduct</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
