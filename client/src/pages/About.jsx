import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Target, ArrowRight, Sparkles, Globe, Award, Heart, Check, Handshake, RefreshCw } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';

const StaggeredFadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      if (direction === 'left') return 'translateX(-50px)';
      if (direction === 'right') return 'translateX(50px)';
      return 'translateY(40px)';
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

const DrawingTimelineLine = () => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        position: 'absolute',
        top: '50px',
        bottom: '50px',
        left: '50%',
        width: '1px',
        backgroundColor: 'var(--color-border)',
        transform: 'translateX(-50%)',
        zIndex: 1,
        height: isVisible ? 'calc(100% - 100px)' : '0%',
        transition: 'height 2.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="timeline-line"
    />
  );
};

const About = () => {
  const values = [
    { icon: Leaf, title: 'Purity', desc: '100% clean ingredients. Free from chemicals, synthetic preservatives, and artificial coloring.' },
    { icon: Handshake, title: 'Integrity', desc: 'Transparent supply chains. Honest partnerships with farmers and fair pricing for commercial buyers.' },
    { icon: Award, title: 'Quality', desc: 'Rigorous laboratory testing. Consistent color, moisture, and particle size profiles in every batch.' },
    { icon: RefreshCw, title: 'Sustainability', desc: 'Promoting drip irrigation, reducing carbon footprints, and practicing zero-waste farm cycles.' },
    { icon: Sparkles, title: 'Innovation', desc: 'Utilizing state-of-the-art controlled-heat drying technology to lock in maximum biological nutrients.' },
    { icon: ShieldCheck, title: 'Responsibility', desc: 'Upholding standard labor practices and investing back in agricultural development programs.' }
  ];

  const manufacturingSteps = [
    { step: '01', title: 'Farm Selection', desc: 'Sourcing vegetables directly from verified cooperative networks.' },
    { step: '02', title: 'Cleaning', desc: 'Triple-washing in chlorinated water to remove soil and external impurities.' },
    { step: '03', title: 'Sorting', desc: 'Manual sorting of mature, healthy crop pieces by hand-grading teams.' },
    { step: '04', title: 'Precision Drying', desc: 'Controlled low-heat dehydrators to retain natural enzymes and color.' },
    { step: '05', title: 'Grinding', desc: 'Pulverized to micro-fine mesh sizes (up to 120 mesh) in clean-room systems.' },
    { step: '06', title: 'Quality Testing', desc: 'Moisture, ash, and microbiological count check for batch COA reports.' },
    { step: '07', title: 'Packaging', desc: 'Hygienic vacuum-sealed nitrogen flushed bags preventing moisture entry.' },
    { step: '08', title: 'Delivery', desc: 'Traceable dispatch direct to your warehouse or global port facility.' }
  ];

  const qualityBadges = [
    'Hygienically Processed',
    'Low Moisture (<5%)',
    'Consistent Quality',
    'Batch Tested (COA)',
    'Export Ready',
    'Premium Ingredients'
  ];

  return (
    <div style={{ backgroundColor: '#F8F5F0', color: 'var(--color-dark)', overflowX: 'hidden' }}>

      {/* SECTION 1 — HERO SECTION */}
      <div
        style={{
          position: 'relative',
          height: '75vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: 'var(--color-primary)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(31, 77, 58, 0.78)',
            zIndex: 2
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: "url('images/farmer_nashik.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 3, color: 'var(--color-white)' }}>
          <FadeInSection>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '3px',
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              <Sparkles size={14} /> Rooted in Excellence
            </span>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 7vw, 72px)',
              lineHeight: 1.1,
              color: 'var(--color-white)',
              marginBottom: '24px',
              maxWidth: '800px'
            }}>
              Rooted in Nature.<br />Crafted with Purpose.
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#E8E2D8',
              maxWidth: '680px',
              margin: 0
            }}>
              GreenVeda is dedicated to transforming carefully selected farm-fresh vegetables into premium-quality powders through responsible sourcing, modern processing, and uncompromising quality standards.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* SECTION 2 — OUR STORY */}
      <div className="section" style={{ backgroundColor: 'transparent', padding: '120px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <FadeInSection>
              <div>
                <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Our Story</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', marginBottom: '28px', color: 'var(--color-primary)' }}>
                  Our Journey
                </h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
                  GreenVeda was founded with a vision to bridge the gap between modern food manufacturing and nature. By combining sustainable sourcing with precision processing, we create premium vegetable powders trusted by food brands, restaurants, and manufacturers.
                </p>
                <p style={{ color: 'var(--color-muted)', fontSize: '16px', lineHeight: 1.8 }}>
                  Every batch reflects our commitment to purity, consistency, and innovation. We work hand-in-hand with agricultural experts to refine our drying schedules, locking in maximum nutrients while ensuring minimal moisture so your recipes remain consistently superb.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
                  <img
                    src="images/hero_all_products.png"
                    alt="GreenVeda farm and products"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                {/* Decorative Accent */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  width: '60px',
                  height: '60px',
                  borderTop: '4px solid var(--color-gold)',
                  borderLeft: '4px solid var(--color-gold)',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '60px',
                  height: '60px',
                  borderBottom: '4px solid var(--color-gold)',
                  borderRight: '4px solid var(--color-gold)',
                  pointerEvents: 'none'
                }} />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* SECTION 3 — MISSION & VISION */}
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', position: 'relative', padding: '120px 0' }}>
        {/* Organic subtle background grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 10% 20%, rgba(201, 166, 107, 0.05) 0%, transparent 80%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ gap: '40px' }}>
            <FadeInSection>
              <div className="glass-card" style={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '48px 40px',
                borderRadius: '24px'
              }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '24px' }}>
                  <Target size={36} />
                </div>
                <h3 style={{ color: 'var(--color-white)', fontSize: '28px', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
                  Our Mission
                </h3>
                <p style={{ color: '#E8E2D8', fontSize: '15.5px', lineHeight: 1.7, margin: 0 }}>
                  To deliver premium natural vegetable powders through responsible sourcing, hygienic processing, and consistent quality, serving as a reliable partner to food brands worldwide.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="glass-card" style={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '48px 40px',
                borderRadius: '24px'
              }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '24px' }}>
                  <Globe size={36} />
                </div>
                <h3 style={{ color: 'var(--color-white)', fontSize: '28px', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
                  Our Vision
                </h3>
                <p style={{ color: '#E8E2D8', fontSize: '15.5px', lineHeight: 1.7, margin: 0 }}>
                  To become India's most trusted premium ingredient brand, setting global standards for botanical purity, traceability, and customer-first supply reliability.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* SECTION 4 — CORE VALUES */}
      <div className="section" style={{ backgroundColor: 'transparent', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Integrity</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>Our Core Values</h2>
          </div>

          <div className="grid-3" style={{ gap: '30px' }}>
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <FadeInSection key={idx}>
                  <div className="card" style={{
                    height: '100%',
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '24px',
                    padding: '36px',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ color: 'var(--color-gold)', marginBottom: '20px' }}>
                      <IconComponent size={32} />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '22px',
                      color: 'var(--color-primary)',
                      marginBottom: '12px'
                    }}>
                      {val.title}
                    </h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                      {val.desc}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 5 — MEET OUR LEADERSHIP */}
      <div className="section" style={{ backgroundColor: '#F2EDE4', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Leadership</span>
            <h2 className="section-title" style={{ fontSize: '44px', color: 'var(--color-primary)' }}>
              The People Behind GreenVeda
            </h2>
          </div>

          <div className="grid-3" style={{ gap: '32px', maxWidth: '1140px', margin: '0 auto' }}>
            {/* Portrait Card 1 */}
            <FadeInSection>
              <div className="card" style={{
                textAlign: 'center',
                padding: '40px 24px',
                borderRadius: '24px',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 24px auto',
                    border: '2px solid var(--color-gold)',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <img
                      src="images/zeel_pansuriya.jpeg"
                      alt="Zeel Pansuriya"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.28)', transformOrigin: 'center' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Zeel Pansuriya
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    CEO & Founder
                  </p>
                  <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    Leading GreenVeda with a vision to build a trusted premium ingredient brand through operational excellence, strategic growth, and long-term partnerships with customers and farmers.
                  </p>
                </div>

                <div style={{ 
                  textAlign: 'left', 
                  borderTop: '1px solid var(--color-border)', 
                  paddingTop: '16px',
                  marginTop: '20px'
                }}>
                  <span style={{ 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    color: 'var(--color-accent)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '10px',
                    textAlign: 'center'
                  }}>
                    Core Focus
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                    {['Strategic Growth', 'B2B Relations', 'Operations', 'Supply Chain'].map((resp, i) => (
                      <span key={i} style={{
                        fontSize: '10px',
                        backgroundColor: '#F8F5F0',
                        color: 'var(--color-primary)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontWeight: 500,
                        border: '1px solid var(--color-border)'
                      }}>
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Portrait Card 2 */}
            <FadeInSection>
              <div className="card" style={{
                textAlign: 'center',
                padding: '40px 24px',
                borderRadius: '24px',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 24px auto',
                    border: '2px solid var(--color-gold)',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <img
                      src="images/zeel_bhanderi.png"
                      alt="Zeel Bhanderi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.28)', transformOrigin: 'center' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Zeel Bhanderi
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    CTO & Creative Director
                  </p>
                  <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    Leading GreenVeda's brand identity, packaging design, digital innovation, website experience, visual storytelling, and marketing strategy to create a globally recognizable premium brand.
                  </p>
                </div>

                <div style={{ 
                  textAlign: 'left', 
                  borderTop: '1px solid var(--color-border)', 
                  paddingTop: '16px',
                  marginTop: '20px'
                }}>
                  <span style={{ 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    color: 'var(--color-accent)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '10px',
                    textAlign: 'center'
                  }}>
                    Core Focus
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                    {['Brand Identity', 'UI / UX Design', 'Marketing', 'Digital Strategy'].map((resp, i) => (
                      <span key={i} style={{
                        fontSize: '10px',
                        backgroundColor: '#F8F5F0',
                        color: 'var(--color-primary)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontWeight: 500,
                        border: '1px solid var(--color-border)'
                      }}>
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Portrait Card 3 */}
            <FadeInSection>
              <div className="card" style={{
                textAlign: 'center',
                padding: '40px 24px',
                borderRadius: '24px',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 24px auto',
                    border: '2px solid var(--color-gold)',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <img
                      src="images/yash.png"
                      alt="Yash Pansuriya"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.28)', transformOrigin: 'center' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Yash Pansuriya
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    Head of QA & Laboratory
                  </p>
                  <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    Oversees quality assurance, laboratory testing, and product consistency. Armed with chemical engineering expertise, he ensures every batch meets rigorous standards for purity, moisture control, and safety.
                  </p>
                </div>

                <div style={{ 
                  textAlign: 'left', 
                  borderTop: '1px solid var(--color-border)', 
                  paddingTop: '16px',
                  marginTop: '20px'
                }}>
                  <span style={{ 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    color: 'var(--color-accent)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '10px',
                    textAlign: 'center'
                  }}>
                    Core Focus
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                    {['Lab Testing', 'QA / QC', 'Moisture & Particle', 'Food Safety', 'Compliance'].map((resp, i) => (
                      <span key={i} style={{
                        fontSize: '10px',
                        backgroundColor: '#F8F5F0',
                        color: 'var(--color-primary)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontWeight: 500,
                        border: '1px solid var(--color-border)'
                      }}>
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* SECTION 6 — MANUFACTURING PHILOSOPHY */}
      <div className="section" style={{ backgroundColor: 'transparent', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Traceability</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>
              Precision at Every Step
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 20px auto' }}>
              Every process is documented and every batch remains traceable from source to shipment.
            </p>
          </div>

          {/* Custom Minimalist Process Timeline */}
          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Timeline center line */}
            <DrawingTimelineLine />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {manufacturingSteps.map((item, idx) => (
                <StaggeredFadeIn key={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                    width: '100%',
                    position: 'relative'
                  }} className="timeline-item-wrapper">
                    {/* Circle Node */}
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-white)',
                      border: '2px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '13px',
                      zIndex: 2
                    }} className="timeline-node">
                      {item.step}
                    </div>

                    {/* Card Container */}
                    <div style={{
                      width: '45%',
                      padding: '28px',
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '20px',
                      boxShadow: 'var(--shadow-sm)'
                    }} className="timeline-card-wrapper">
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '20px',
                        color: 'var(--color-primary)',
                        marginBottom: '8px'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ color: 'var(--color-muted)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggeredFadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7 — SUSTAINABILITY */}
      <div className="section" style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(31, 77, 58, 0.82)',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('images/farmer_nashik.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, color: 'var(--color-white)' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <FadeInSection>
              <div>
                <span className="section-tag" style={{ color: 'var(--color-gold)' }}>Sustainability</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'var(--color-white)', marginBottom: '24px' }}>
                  Growing with Farmers
                </h2>
                <p style={{ color: '#E8E2D8', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
                  GreenVeda believes in responsible sourcing and long-term partnerships with farming communities. We provide agronomic training, support local water conservation methods, and guarantee fair buy-back prices to build a sustainable, future-ready agriculture grid.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Support local agriculture',
                    'Reduce post-harvest crop waste',
                    'Promote organic, chemical-free practices',
                    'Build transparent and fully-audited supply chains'
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                        flexShrink: 0
                      }}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '15px', color: '#E8E2D8' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '24px',
                padding: '48px 40px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <div>
                    <div style={{ fontSize: '44px', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>
                      1,000+
                    </div>
                    <div style={{ fontSize: '13px', color: '#E8E2D8', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', fontWeight: 500 }}>
                      Partner Farmers Sourced From
                    </div>
                  </div>

                  <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

                  <div>
                    <div style={{ fontSize: '44px', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>
                      60%
                    </div>
                    <div style={{ fontSize: '13px', color: '#E8E2D8', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', fontWeight: 500 }}>
                      Water Saving via Drip Irrigation
                    </div>
                  </div>

                  <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

                  <div>
                    <div style={{ fontSize: '44px', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>
                      100%
                    </div>
                    <div style={{ fontSize: '13px', color: '#E8E2D8', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', fontWeight: 500 }}>
                      Traceable Supply Chain Logs
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* SECTION 8 — QUALITY COMMITMENT */}
      <div className="section" style={{ backgroundColor: 'transparent', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Standards</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>
              Quality You Can Trust
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Every batch undergoes strict quality control check-ups before final vacuum packaging.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {qualityBadges.map((badge, idx) => (
              <FadeInSection key={idx}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '30px',
                  padding: '12px 24px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-gold)' }} />
                  <span>{badge}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 9 — CLOSING SECTION / CTA */}
      <div className="section" style={{ backgroundColor: '#F2EDE4', padding: '120px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', color: 'var(--color-primary)', marginBottom: '24px', lineHeight: 1.25 }}>
              Building a Better Future Through Natural Ingredients
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16.5px', lineHeight: 1.7, marginBottom: '48px' }}>
              At GreenVeda, we believe the finest products begin at the farm and are perfected through care, innovation, and integrity.
            </p>

            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)', margin: '0 auto 40px auto' }} />

            <h3 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '28px', fontFamily: 'var(--font-body)' }}>
              Let's Grow Together
            </h3>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary" style={{ borderRadius: '30px' }}>
                Explore Products
              </Link>
              <Link to="/bulk-enquiry" className="btn btn-secondary" style={{ borderRadius: '30px' }}>
                B2B Inquiry
              </Link>
              <Link to="/contact" className="btn btn-outline-green" style={{ borderRadius: '30px' }}>
                Contact Us
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>

      <style>{`
        /* Timeline card animations & hover actions */
        .timeline-card-wrapper {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease;
        }
        .timeline-card-wrapper:hover {
          transform: translateY(-4px) scale(1.02) !important;
          box-shadow: var(--shadow-md) !important;
          border-color: var(--color-gold) !important;
        }
        .timeline-node {
          transition: background-color 0.4s ease, transform 0.4s ease, border-color 0.4s ease, color 0.4s ease;
        }
        .timeline-item-wrapper:hover .timeline-node {
          background-color: var(--color-primary) !important;
          color: var(--color-white) !important;
          border-color: var(--color-primary) !important;
          transform: translateX(-50%) scale(1.25) !important;
        }

        /* Timeline Custom Layout overrides for mobile */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item-wrapper {
            justify-content: flex-start !important;
            padding-left: 56px !important;
          }
          .timeline-node {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-item-wrapper:hover .timeline-node {
            transform: translateX(-50%) scale(1.25) !important;
          }
          .timeline-card-wrapper {
            width: 100% !important;
          }
        }
      `}</style>

    </div>
  );
};

export default About;
