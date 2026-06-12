import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
      {/* Newsletter Strip */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '30px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>
              Stay Updated with Industry & Crop Insights
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
              Get monthly crop reports, vegetable price trends & product updates.
            </p>
          </div>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '400px' }}>
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--color-white)',
                fontSize: '14px'
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '24px' }}>
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="section" style={{ padding: '60px 0 40px 0' }}>
        <div className="container grid-4">
          {/* Column 1 - Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Leaf size={22} style={{ color: 'var(--color-gold)' }} />
              <span style={{ fontSize: '22px', fontWeight: 500, color: 'var(--color-white)', fontFamily: 'var(--font-heading)' }}>GreenVeda</span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>
              "Nature's Purest Nutrition"
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '13px', marginBottom: '20px' }}>
              Premium vegetable powder manufacturer supplying B2B clients and export markets.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Instagram */}
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="IndiaMART" style={{ fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>iM</a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '16px', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/process" className="footer-link">Our Process</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/bulk-enquiry" className="footer-link">B2B Inquiry</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Our Products */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '16px', marginBottom: '20px' }}>Our Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li><Link to="/products#onion" className="footer-link">Onion Powder</Link></li>
              <li><Link to="/products#garlic" className="footer-link">Garlic Powder</Link></li>
              <li><Link to="/products#moringa" className="footer-link">Moringa Powder</Link></li>
              <li><Link to="/products#beetroot" className="footer-link">Beetroot Powder</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Details */}
          <div>
            <h4 style={{ color: 'var(--color-white)', fontSize: '16px', marginBottom: '20px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                <a href="tel:+919876543210" className="footer-link">+91 98765 43210</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                <a href="mailto:info@greenveda.in" className="footer-link">info@greenveda.in</a>
              </li>
              <li style={{ display: 'flex', gap: '8px' }}>
                <Clock size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '4px' }} />
                <span>Mon–Sat, 9 AM – 6 PM IST</span>
              </li>
              <li style={{ fontSize: '13px', lineHeight: '1.4', color: 'rgba(255, 255, 255, 0.5)' }}>
                Factory Address: Plot No. 42, MIDC Ambad, Nashik, Maharashtra, India - 422010
              </li>
            </ul>
            <a
              href="https://wa.me/919876543210?text=Hi%20GreenVeda!%20I%20am%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-green"
              style={{ marginTop: '16px', width: '100%', fontSize: '13px', padding: '8px 16px', borderColor: 'var(--color-gold)', color: 'var(--color-white)', borderRadius: '20px' }}
            >
              <MessageSquare size={14} style={{ marginRight: '6px' }} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div style={{ backgroundColor: '#122f23', color: 'rgba(255, 255, 255, 0.5)', padding: '20px 0', fontSize: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            © {new Date().getFullYear()} GreenVeda. All Rights Reserved.
          </div>
          <div style={{ fontWeight: 500 }}>
            FSSAI Lic. No. 11525012345678
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="cert-pill">FSSAI Certified</span>
            <span className="cert-pill">ISO 22000</span>
            <span className="cert-pill">APEDA Member</span>
            <span className="cert-pill">MSME Registered</span>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon {
          color: rgba(255, 255, 255, 0.6);
          transition: var(--transition-smooth);
        }
        .social-icon:hover {
          color: var(--color-accent);
          transform: translateY(-2px);
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: var(--color-white);
          padding-left: 2px;
        }
        .cert-pill {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 10px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
