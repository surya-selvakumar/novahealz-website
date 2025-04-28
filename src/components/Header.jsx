import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <img src="/logo/logo.jpg" alt="NovaHealz Logo" style={{ height: '40px' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0066cc' }}>NovaHealZ</span>
      </a>

      {/* Hamburger Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
        <NavLink to="/research" onClick={() => setMenuOpen(false)}>Research</NavLink>
        <NavLink to="/responsibility" onClick={() => setMenuOpen(false)}>Responsibility</NavLink>
        <NavLink to="/investors" onClick={() => setMenuOpen(false)}>Investors</NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/code-of-conduct" onClick={() => setMenuOpen(false)}>Code of Conduct</NavLink>
      </nav>
    </header>
  );
}
