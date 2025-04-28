import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <footer className={isHomePage ? 'footer home-footer' : 'footer'}>
      <p>&copy; {currentYear} HealTech. All rights reserved.</p>
      <p>Contact: <a href="mailto:info@healtech.com">info@healtech.com</a></p>
    </footer>
  );
}
