import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Leaf, Globe, Sparkles, MessageCircle, ChevronLeft, ChevronRight, CheckCircle2, FlaskConical, DropletOff, Layers, Search, Eye, Compass, Heart, ClipboardCheck, PackageCheck, Send, MapPin, Phone, Mail } from 'lucide-react';
import Marquee from '../components/Marquee';
import FadeInSection from '../components/FadeInSection';
import StatCounter from '../components/StatCounter';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const slides = [
    {
      image: 'images/hero_all_products.png',
      headline: "Nature's Purest Nutrition",
      subheadline: "Premium vegetable powders crafted from carefully selected farm-fresh ingredients for food manufacturers, restaurants and export markets.",
      primaryBtn: "Explore Products",
      primaryUrl: "/products",
      secondaryBtn: "B2B Inquiry",
      secondaryUrl: "/bulk-enquiry"
    },
    {
      image: 'images/rawgar.jpeg',
      headline: "From Farm to Global Markets",
      subheadline: "Supplying premium quality vegetable powders with consistent quality and complete traceability.",
      primaryBtn: "Explore Products",
      primaryUrl: "/products",
      secondaryBtn: "B2B Inquiry",
      secondaryUrl: "/bulk-enquiry"
    },
    {
      image: 'images/rawbeet.jpeg',
      headline: "Pure Ingredients. Trusted Supply.",
      subheadline: "Low moisture. Long shelf life. Export quality.",
      primaryBtn: "Explore Products",
      primaryUrl: "/products",
      secondaryBtn: "B2B Inquiry",
      secondaryUrl: "/bulk-enquiry"
    }
  ];

  const testimonials = [
    {
      text: "Exceptional quality and consistency in every batch.",
      author: "Food Manufacturer",
      rating: 5
    },
    {
      text: "Excellent documentation and export support.",
      author: "International Buyer",
      rating: 5
    },
    {
      text: "Reliable weekly supply with premium standards.",
      author: "Restaurant Chain",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}>

      {/* SECTION 1 — HERO CAROUSEL */}
      <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-primary)' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
              zIndex: currentSlide === index ? 2 : 1
            }}
          >
            {/* Background Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(31, 77, 58, 0.55)', // overlay colored with Deep Green
                zIndex: 2
              }}
            />
            {/* Image */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: currentSlide === index ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 8s ease-out'
              }}
            />
            {/* Content Container */}
            <div
              className="container hero-container"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '72px'
              }}
            >
              <div className="hero-content" style={{ maxWidth: '640px', color: 'var(--color-white)' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    color: 'var(--color-gold)',
                    marginBottom: '24px',
                    opacity: currentSlide === index ? 1 : 0,
                    transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s ease-out 0.2s'
                  }}
                >
                  <Sparkles size={14} /> GreenVeda Premium Ingredients
                </span>

                <h1
                  style={{
                    fontSize: 'clamp(40px, 6vw, 68px)',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1.1,
                    marginBottom: '24px',
                    color: 'var(--color-white)',
                    opacity: currentSlide === index ? 1 : 0,
                    transform: currentSlide === index ? 'translateY(0)' : 'translateY(25px)',
                    transition: 'all 0.8s ease-out 0.4s'
                  }}
                >
                  {slide.headline}
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(16px, 2vw, 19px)',
                    lineHeight: 1.6,
                    color: '#E8E2D8',
                    marginBottom: '40px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    opacity: currentSlide === index ? 1 : 0,
                    transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out 0.6s'
                  }}
                >
                  {slide.subheadline}
                </p>

                <div
                  className="hero-buttons"
                  style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    opacity: currentSlide === index ? 1 : 0,
                    transform: currentSlide === index ? 'translateY(0)' : 'translateY(35px)',
                    transition: 'all 0.8s ease-out 0.8s'
                  }}
                >
                  <Link to={slide.primaryUrl} className="btn btn-white" style={{ borderRadius: '30px' }}>
                    {slide.primaryBtn} <ArrowRight size={15} style={{ marginLeft: '8px' }} />
                  </Link>
                  <Link to={slide.secondaryUrl} className="btn btn-outline-white" style={{ borderRadius: '30px' }}>
                    {slide.secondaryBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'var(--color-white)',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)'
          }}
          className="carousel-arrow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'var(--color-white)',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)'
          }}
          className="carousel-arrow"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '12px' }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: currentSlide === idx ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentSlide === idx ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            />
          ))}
        </div>
      </div>

      {/* SECTION 2 — TRUST METRICS */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>

            <div className="card" style={{ textAlign: 'center', border: '1px solid var(--color-border)', padding: '36px 24px', borderRadius: '24px' }}>
              <div style={{ fontSize: '42px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>
                <StatCounter target={500} suffix="+" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                B2B Clients Served
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', border: '1px solid var(--color-border)', padding: '36px 24px', borderRadius: '24px' }}>
              <div style={{ fontSize: '42px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>
                <StatCounter target={4} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Premium Products
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', border: '1px solid var(--color-border)', padding: '36px 24px', borderRadius: '24px' }}>
              <div style={{ fontSize: '42px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>
                <StatCounter target={12} suffix="+" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Global Markets
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', border: '1px solid var(--color-border)', padding: '36px 24px', borderRadius: '24px' }}>
              <div style={{ fontSize: '42px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>
                &lt; <StatCounter target={5} suffix="%" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Moisture Content
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', border: '1px solid var(--color-border)', padding: '36px 24px', borderRadius: '24px' }}>
              <div style={{ fontSize: '42px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>
                <StatCounter target={24} /> Mo
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Shelf Life
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3 — ABOUT SECTION */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '120px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <FadeInSection>
              <div style={{ position: 'relative', paddingRight: '20px' }}>
                <div style={{ overflow: 'hidden', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', backgroundColor: '#eaeaea' }}>
                  <img
                    src="images/farmer_nashik.png"
                    alt="Sustainable Indian farming network"
                    style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)', transition: 'transform 0.8s ease' }}
                  />
                </div>
                {/* Decorative absolute element */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-10px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    fontWeight: 500,
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  Direct Sourcing Network
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div style={{ paddingLeft: '20px' }}>
                <span className="section-tag" style={{ color: 'var(--color-accent)' }}>About GreenVeda</span>
                <h2 className="section-title" style={{ fontSize: '44px', marginBottom: '28px' }}>
                  Nature Preserved Through Innovation
                </h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
                  GreenVeda transforms carefully selected vegetables into premium powders using controlled drying technology while preserving natural quality, taste and nutrition.
                  <br /><br />
                  Our engineering systems monitor and regulate airflow, humidity, and heat to lock in natural antioxidants, dietary fibers, and flavors. This process yields products that boast near-zero clumping, extended shelf-life, and rich culinary utility for businesses.
                </p>
                <Link to="/about" className="btn btn-primary" style={{ borderRadius: '30px' }}>
                  Learn More <ArrowRight size={15} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* SECTION 4 — FEATURED PRODUCTS */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Featured Products</span>
            <h2 className="section-title" style={{ fontSize: '44px' }}>Luxury Organic Botanicals</h2>
          </div>

          <div className="grid-4 home-product-grid" style={{ gap: '30px' }}>

            {/* Beetroot Card */}
            <div className="card product-hover-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px' }}>
              <div className="product-image-container" style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '20px', backgroundColor: '#eaeaea' }}>
                <img
                  src="images/product_beetroot.png"
                  alt="Beetroot Powder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>❤️</span>
                  <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Beetroot Powder</h3>
                </div>
                <span className="product-badge" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '11px', padding: '4px 10px', borderRadius: '30px', fontWeight: 600, display: 'inline-block', marginBottom: '12px' }}>
                  Natural Nutrition
                </span>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  Glow & Wellness. Rich source of nitric oxide and dietary nitrates. Perfect natural dye.
                </p>
              </div>
            </div>

            {/* Moringa Card */}
            <div className="card product-hover-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px' }}>
              <div className="product-image-container" style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '20px', backgroundColor: '#eaeaea' }}>
                <img
                  src="images/hero_moringa.png"
                  alt="Moringa Powder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>🌿</span>
                  <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Moringa Powder</h3>
                </div>
                <span className="product-badge" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '11px', padding: '4px 10px', borderRadius: '30px', fontWeight: 600, display: 'inline-block', marginBottom: '12px' }}>
                  Daily Wellness
                </span>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  Plant Nutrition. Deep green, highly potent superfood powder sourced from clean farms.
                </p>
              </div>
            </div>

            {/* Onion Card */}
            <div className="card product-hover-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px' }}>
              <div className="product-image-container" style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '20px', backgroundColor: '#eaeaea' }}>
                <img
                  src="images/product_onion.png"
                  alt="Onion Powder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>🧅</span>
                  <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Onion Powder</h3>
                </div>
                <span className="product-badge" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '11px', padding: '4px 10px', borderRadius: '30px', fontWeight: 600, display: 'inline-block', marginBottom: '12px' }}>
                  Instant Kitchen Essential
                </span>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  Dehydrated red and white onions ground to a perfect mesh. Rich culinary base.
                </p>
              </div>
            </div>

            {/* Garlic Card */}
            <div className="card product-hover-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px' }}>
              <div className="product-image-container" style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: '16px', marginBottom: '20px', backgroundColor: '#eaeaea' }}>
                <img
                  src="images/hero_onion_garlic.png"
                  alt="Garlic Powder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>🧄</span>
                  <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Garlic Powder</h3>
                </div>
                <span className="product-badge" style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '11px', padding: '4px 10px', borderRadius: '30px', fontWeight: 600, display: 'inline-block', marginBottom: '12px' }}>
                  Rich Natural Flavor
                </span>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  Sun-kissed garlic dehydrated and sieved. Strong antimicrobial and savory values.
                </p>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/products" className="btn btn-outline-green" style={{ borderRadius: '30px' }}>
              View Products <ArrowRight size={15} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 5 — WHY CHOOSE GREENVEDA */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Why Choose Us</span>
            <h2 className="section-title" style={{ fontSize: '44px', marginBottom: '8px' }}>Quality You Can Taste.</h2>
            <h2 className="section-title" style={{ fontSize: '44px', color: 'var(--color-accent)' }}>Trust You Can Verify.</h2>
          </div>

          <div className="grid-3" style={{ gap: '30px' }}>

            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                <Leaf size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Farm Fresh Ingredients</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.6 }}>Directly sourced from partner farms ensuring rich biological flavor extraction.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Hygienically Processed</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.6 }}>Operated under clean, state-of-the-art standards with zero chemical residue.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                <FlaskConical size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Laboratory Tested</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.6 }}>Subjected to continuous batches validation for moisture, ash, and sieve profile.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                <DropletOff size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Low Moisture Technology</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.6 }}>Secured at &lt; 5% moisture profile preventing early decay or clumping issues.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                <Globe size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Export Ready</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.6 }}>Certified for global markets transit with complete compliance documentation.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                <Layers size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Traceable Supply Chain</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', lineHeight: 1.6 }}>Full verification logs from raw harvest to final dispatch at your facility.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 6 — OUR PROCESS */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Manufacturing</span>
            <h2 className="section-title" style={{ fontSize: '44px', marginBottom: '8px' }}>From Field to Your Shelf</h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16px' }}>Every step documented. Every batch traceable.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '60px' }} className="process-timeline">

            <div style={{ textAlign: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContainer: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '16px', border: '1px solid var(--color-border)' }}>1</div>
              <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Farm Sourcing</h4>
            </div>

            <div className="timeline-arrow" style={{ color: 'var(--color-gold)', fontSize: '24px', fontWeight: 300 }}></div>

            <div style={{ textAlign: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContainer: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '16px', border: '1px solid var(--color-border)' }}>2</div>
              <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Wash & Sort</h4>
            </div>

            <div className="timeline-arrow" style={{ color: 'var(--color-gold)', fontSize: '24px', fontWeight: 300 }}></div>

            <div style={{ textAlign: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContainer: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '16px', border: '1px solid var(--color-border)' }}>3</div>
              <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Precision Dry</h4>
            </div>

            <div className="timeline-arrow" style={{ color: 'var(--color-gold)', fontSize: '24px', fontWeight: 300 }}></div>

            <div style={{ textAlign: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContainer: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '16px', border: '1px solid var(--color-border)' }}>4</div>
              <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Grind & Sieve</h4>
            </div>

            <div className="timeline-arrow" style={{ color: 'var(--color-gold)', fontSize: '24px', fontWeight: 300 }}></div>

            <div style={{ textAlign: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContainer: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '16px', border: '1px solid var(--color-border)' }}>5</div>
              <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Quality Test</h4>
            </div>

            <div className="timeline-arrow" style={{ color: 'var(--color-gold)', fontSize: '24px', fontWeight: 300 }}></div>

            <div style={{ textAlign: 'center', flex: 1, minWidth: '130px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContainer: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 600, marginBottom: '16px', border: '1px solid var(--color-border)' }}>6</div>
              <h4 style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Pack & Seal</h4>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/process" className="btn btn-outline-green" style={{ borderRadius: '30px' }}>
              Explore Process <ArrowRight size={15} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 7 — INDUSTRIES WE SERVE */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Partnership</span>
            <h2 className="section-title" style={{ fontSize: '44px' }}>From Farm To Global Markets</h2>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {[
              "Hotels",
              "Restaurants",
              "Food Manufacturing",
              "Beverages",
              "Private Label",
              "Seasoning",
              "Cloud Kitchens",
              "Export"
            ].map((industry, index) => (
              <div
                key={index}
                className="card industry-card"
                style={{
                  padding: '30px 24px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', display: 'inline-block', marginBottom: '14px' }}></div>
                <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontWeight: 600 }}>{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 8 — SUSTAINABILITY */}
      <div className="section" style={{ position: 'relative', minHeight: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(31, 77, 58, 0.75)',
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
            backgroundImage: `url('images/farmer_nashik.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 3, color: 'var(--color-white)' }}>
          <div style={{ maxWidth: '600px' }}>
            <span className="section-tag" style={{ color: 'var(--color-gold)' }}>Eco-farming</span>
            <h2 className="section-title" style={{ fontSize: '48px', color: 'var(--color-white)', marginBottom: '24px' }}>
              Growing Together with Farmers
            </h2>
            <p style={{ color: '#E8E2D8', fontSize: '16.5px', lineHeight: 1.7, marginBottom: '40px' }}>
              We collaborate with farming cooperatives to enforce smart drip-irrigation schedules and zero-waste harvesting cycles. By establishing secure, forward-buy contracts, we ensure reliable fair-trade revenues for rural communities while sustaining traceability for our global brands.
            </p>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '36px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>1,000+</div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#E8E2D8' }}>Partner Farmers</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <div style={{ fontSize: '36px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>60%</div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#E8E2D8' }}>Water Saved</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <div style={{ fontSize: '36px', fontWeight: 500, fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>100%</div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#E8E2D8' }}>Traceable Supply</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 9 — CERTIFICATIONS */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)', padding: '60px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.65 }}>
            {["FSSAI", "ISO 22000", "APEDA", "MSME", "Lab Tested", "Export Ready"].map((cert, idx) => (
              <div key={idx} style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-body)', color: 'var(--color-primary)' }}>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 10 — CLIENT TESTIMONIALS */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Testimonials</span>
            <h2 className="section-title" style={{ fontSize: '44px' }}>Client Trust</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
            <div style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px', color: 'var(--color-gold)' }}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p style={{ fontSize: '26px', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', lineHeight: 1.4, marginBottom: '24px' }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-muted)', fontWeight: 600 }}>
                {testimonials[currentTestimonial].author}
              </h4>
            </div>

            {/* Testimonials controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
              <button
                onClick={prevTestimonial}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-primary)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-primary)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11 — CALL TO ACTION */}
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'center', padding: '100px 0', overflow: 'hidden' }}>
        {/* Subtle leaf background illustration or pattern styling */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>Contact Desk</span>
          <h2 style={{ color: 'var(--color-white)', fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-heading)', fontWeight: 500, marginBottom: '20px' }}>
            Ready to Source Premium Vegetable Powders?
          </h2>
          <p style={{ color: '#E8E2D8', fontSize: '17px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6, fontWeight: 300 }}>
            Request a free sample kit and product catalogue. Sized for R&D trial evaluation batches.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/bulk-enquiry?sample=true" className="btn btn-white" style={{ borderRadius: '30px' }}>
              Request Sample <ArrowRight size={15} style={{ marginLeft: '8px' }} />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20GreenVeda!%20I%20am%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
              style={{ borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Extra styles for interactive card enhancements */}
      <style>{`
        .product-hover-card {
          border-radius: 24px !important;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
        }
        .product-hover-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          box-shadow: 0 30px 60px rgba(31, 77, 58, 0.08) !important;
          border-color: var(--color-gold) !important;
        }
        .industry-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: var(--shadow-md) !important;
          border-color: var(--color-gold) !important;
          background-color: var(--color-white) !important;
        }
        @media (max-width: 768px) {
          .timeline-arrow {
            transform: rotate(90deg);
            margin: 10px 0;
          }
          .process-timeline {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

    </div>
  );
};

export default Home;
