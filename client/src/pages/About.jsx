import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, Building2, Calendar, Target, ShieldCheck, MessageSquare } from 'lucide-react';

const About = () => {
  const milestones = [
    { period: 'Q1 2025', title: 'Company Foundation', desc: 'Registered GreenVeda India LLP/Pvt Ltd and secured industrial workspace.' },
    { period: 'Q2 2025', title: 'FSSAI License & Factory Setup', desc: 'Obtained FSSAI state manufacturing license. Trial runs of tray dryers and hammer mill completed.' },
    { period: 'Q3 2025', title: 'B2B Launch & Online Listing', desc: 'Acquired first 15 repeat B2B masala & snack brands. Launched Garlic & Moringa retail packs on Amazon India.' },
    { period: 'Q4 2025', title: 'APEDA Registration', desc: 'Registered under APEDA to initiate export operations for international markets.' },
    { period: 'Q1 2026', title: 'First Export Consignment', desc: 'Successfully exported first container of moringa and garlic powder to Dubai, UAE.' },
    { period: 'Q2 2026', title: 'ISO 22000 Certification', desc: 'Achieved ISO 22000:2018 food safety certification for processing and packaging lines.' }
  ];

  return (
    <div>
      {/* HERO */}
      <div
        style={{
          height: '350px',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(15, 61, 26, 0.9), rgba(15, 61, 26, 0.95))',
            zIndex: 1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '8px' }}>
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Home</Link> &gt; <span style={{ color: 'var(--color-white)' }}>About Us</span>
          </div>
          <h1 style={{ color: 'var(--color-white)', fontSize: '36px', marginBottom: '8px' }}>Who We Are</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', maxWidth: '600px' }}>
            A founder-led Indian food business built on one simple principle: if we wouldn’t use it in our own kitchen, we won’t sell it to yours.
          </p>
        </div>
      </div>

      {/* OUR STORY SECTION */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Our Story</span>
              <h2>How GreenVeda Began</h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '15px', marginBottom: '16px', lineHeight: 1.7 }}>
                GreenVeda was born out of frustration. As someone who worked closely with food businesses, I saw the same problem over and over — restaurants, spice companies, and food manufacturers struggling to find vegetable powders that were consistently good. Either the moisture content was too high, resulting in early clumping, or there was zero transparency about the sourcing and hygienic conditions of the processing plant.
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: '15px', marginBottom: '16px', lineHeight: 1.7 }}>
                In 2025, I decided to solve this. I set up a small but state-licensed and properly equipped manufacturing facility in Nashik, Maharashtra, built relationships with farmers I trust, and started supplying to local spice blending businesses. The response was immediate. Within three months, we had 15 repeat B2B clients who appreciated our documentation, batch-wise testing, and consistent quality.
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: '15px', lineHeight: 1.7 }}>
                Today, GreenVeda supplies premium onion, garlic, moringa, and beetroot powders to food manufacturers, hotel chains, restaurant groups, and exporters. Our mission remains simple: make the purest vegetable powders in India, and make them available to every food business, large or small.
              </p>
            </div>
            
            {/* Founder Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="card" style={{ maxWidth: '480px', width: '100%', padding: '30px', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px auto', border: '3px solid var(--color-accent)', backgroundColor: '#ddd' }}>
                  <img src="images/farmer_nashik.png" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', marginBottom: '4px' }}>Vikram Salunkhe</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', marginBottom: '16px' }}>
                  Founder & Managing Director
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--color-primary)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6, marginBottom: '24px', backgroundColor: 'var(--color-white)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--color-accent)' }}>
                  "Our promise is simple — if we wouldn't use it in our own kitchen, we won't sell it to yours."
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-green" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg> Connect
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <MessageSquare size={14} /> WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION, VISION, VALUES */}
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid-3">
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '16px' }}><Target size={32} /></div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '20px', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                To manufacture and supply the purest vegetable powders in India — fully traceable, FSSAI certified, and completely free from artificial additives — to food businesses of every size.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '16px' }}><Leaf size={32} /></div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '20px', marginBottom: '12px' }}>Our Vision</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                To become India’s most trusted vegetable powder brand — present in food manufacturing facilities, restaurant kitchens, and health-conscious homes across India and the globe.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '16px' }}><Award size={32} /></div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '20px', marginBottom: '12px' }}>Core Values</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={14} style={{ color: 'var(--color-accent)' }} /> Purity First</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={14} style={{ color: 'var(--color-accent)' }} /> Sourcing Transparency</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={14} style={{ color: 'var(--color-accent)' }} /> Farmer Partnerships</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={14} style={{ color: 'var(--color-accent)' }} /> Consistent Quality</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={14} style={{ color: 'var(--color-accent)' }} /> Zero Artificial Adulterants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* OUR FACTORY */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Manufacturing</span>
              <h2>Our Manufacturing Facility</h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '24px' }}>
                Located in Plot No. 42, MIDC Ambad, Nashik, Maharashtra, India - 422010. Established in 2025.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <Building2 size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px' }}>Facility Specs</strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>800 sq. ft. FSSAI-licensed facility, expandable up to 2,000 sq. ft.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <Building2 size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px' }}>Processing Capacity</strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Handles 200 kg of incoming fresh vegetables per day.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <Building2 size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px' }}>Key Equipment</strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Precision tray dryers, impact pulverisers, vibro-sifters, nitrogen flushing machinery, halogen moisture analyzer.</span>
                  </div>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '13px' }}>
                  View on Google Maps
                </a>
                <Link to="/contact" className="btn btn-outline-green" style={{ fontSize: '13px' }}>
                  Schedule Factory Visit
                </Link>
              </div>
            </div>

            {/* Photo Gallery Grid Mockup */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '140px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <img src="images/hero_all_products.png" alt="factory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '140px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', backgroundColor: 'var(--color-mint)' }}>Clean Room Area</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '140px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', backgroundColor: 'var(--color-mint)' }}>Drying Station</div>
              </div>
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '140px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <img src="images/farmer_nashik.png" alt="factory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Milestones</span>
            <h2>Our Journey So Far</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }} className="milestone-card">
                <div style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-white)', padding: '6px 16px', borderRadius: '20px', fontWeight: 600, fontSize: '13px', flexShrink: 0 }}>
                  {m.period}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-primary)', marginBottom: '4px' }}>{m.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CREDENTIALS SECTION */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Accreditation</span>
            <h2>Our Credentials & Licenses</h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginTop: '6px' }}>Quality verified by independent authorities.</p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ borderLeft: '4px solid var(--color-accent)', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '16px', color: 'var(--color-primary)', marginBottom: '4px' }}>FSSAI State License</h3>
                <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Active Registration: 11525012345678</p>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--color-accent)', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '16px', color: 'var(--color-primary)', marginBottom: '4px' }}>APEDA Export License</h3>
                <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Active exporter registration for international food safety.</p>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--color-accent)', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '16px', color: 'var(--color-primary)', marginBottom: '4px' }}>ISO 22000 Registered</h3>
                <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Food safety management system certified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .milestone-card {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .milestone-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
