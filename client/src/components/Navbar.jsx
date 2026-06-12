import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Our Process', path: '/process' },
    { name: 'About Us', path: '/about' },
    { name: 'B2B Inquiry', path: '/bulk-enquiry' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        style={{
          height: '72px',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid var(--color-border)',
          transition: 'var(--transition-smooth)'
        }}
        className={isScrolled ? 'navbar-scrolled' : ''}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '24px', fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}>
            <Leaf size={22} className="leaf-icon" style={{ color: 'var(--color-accent)' }} />
            <span>GreenVeda</span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">
            <div style={{ display: 'flex', gap: '24px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-dark)',
                    position: 'relative',
                    padding: '4px 0'
                  }}
                  className="nav-link-hover"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--color-primary)',
                      borderRadius: '2px'
                    }} />
                  )}
                </Link>
              ))}
            </div>

            <Link to="/bulk-enquiry" className="btn btn-outline-green" style={{ padding: '8px 22px', borderRadius: '24px', fontSize: '13px', fontWeight: 600 }}>
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 72px)',
            backgroundColor: '#ffffff',
            zIndex: 998,
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            gap: '24px',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-dark)',
                borderBottom: '1px solid var(--color-border)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/bulk-enquiry"
            className="btn btn-outline-green"
            style={{ marginTop: '16px', width: '100%', padding: '12px', borderRadius: '24px' }}
          >
            Request Quote
          </Link>
        </div>
      )}

      {/* Inline styles for navbar toggles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-accent);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link-hover:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .leaf-icon {
          animation: leaf-sway 6s ease-in-out infinite;
        }
        @keyframes leaf-sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
