import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      {/* Logo (placeholder text) */}
      <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <img src="/logo/logo.jpg" alt="NovaHealz Logo" style={{ height: '40px' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0066cc' }}>NovaHealZ</span>
      </a>
      {/* Navigation Links */}
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Products
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? 'active' : ''}>
          Research
        </NavLink>
        <NavLink to="/responsibility" className={({ isActive }) => isActive ? 'active' : ''}>
          Responsibility
        </NavLink>
        <NavLink to="/investors" className={({ isActive }) => isActive ? 'active' : ''}>
          Investors
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
          Blog
        </NavLink>
        <NavLink to="/code-of-conduct" className={({ isActive }) => isActive ? 'active' : ''}>
          Code of Conduct
        </NavLink>
      </nav>
    </header>
  );
}
