import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoMedio from '../assets/logo_medio.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Check initial size
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/clientes', label: 'Clientes' },
    { path: '/contato', label: 'Contato' },
    { path: '/trabalhe-conosco', label: 'Trabalhe Conosco' }
  ];

  return (
    <header style={{ 
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--bg-light)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? 'var(--shadow)' : 'none',
      padding: isScrolled ? '0.8rem 0' : '1.2rem 0',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'var(--transition)',
      animation: 'slideInDown 0.6s ease-out'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src={isMobile ? logo : (isScrolled ? logo : logoMedio)} 
            alt="JK & Frios Logo" 
            className="logo-glow hover-lift logo-quality logo-smooth-transition"
            style={{ 
              height: isMobile ? '50px' : (isScrolled ? '80px' : '100px'),
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'center',
              transition: 'height 0.3s ease-out, filter 0.3s ease-out',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              imageRendering: 'auto',
              maxWidth: '100%',
              borderRadius: '50%'
            }} 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ 
          display: 'flex', 
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{
                color: 'var(--text-dark)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'var(--transition)'
              }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* CTA Button */}
          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido dos produtos JK & Frios."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: 'var(--primary-color)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'var(--transition)',
              boxShadow: '0 4px 15px rgba(0, 31, 147, 0.3)'
            }}
          >
            🛒 Peça Já
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            '@media (max-width: 768px)': { display: 'block' },
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--primary-color)'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          boxShadow: 'var(--shadow)',
          padding: '1rem',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '1rem',
                color: 'var(--text-dark)',
                textDecoration: 'none',
                fontWeight: '600',
                borderBottom: '1px solid #eee'
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            nav {
              display: none !important;
            }
            button {
              display: block !important;
            }
          }
        `}
      </style>
    </header>
  );
}
