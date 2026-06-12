import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, Info, ShieldAlert, Award, FileText, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();

  const productsData = [
    {
      id: 'onion',
      name: 'Onion Powder',
      tagline: 'The foundation of every spice blend.',
      desc: 'Finely ground from premium red and white onions grown in Nashik, Maharashtra — India’s most celebrated onion-growing region. Our onion powder delivers a rich, consistent flavor profile with no caramelisation or burning during the drying process, thanks to precise temperature control.',
      image: 'images/product_onion.png',
      badge: 'Best Seller',
      badgeColor: '#e53e3e',
      priceRange: '₹230/kg - ₹290/kg (based on volume)',
      specs: {
        'Moisture Content': '< 5%',
        'Mesh Size': '60–80 mesh',
        'Colour': 'Off-white to light cream',
        'Aroma': 'Characteristic pungent onion aroma',
        'Shelf Life': '18–24 months',
        'Storage': 'Cool & dry, <25°C',
        'FSSAI Standard': 'FSSAI 2.4.6(14)',
        'Packaging': 'Airtight nitrogen-flushed pouch'
      },
      b2bSizes: ['1 kg', '5 kg', '10 kg', '25 kg bags'],
      b2cSizes: ['50g', '100g', '200g', '500g'],
      usages: ['Masala & seasoning mixes', 'Instant soups & gravies', 'Namkeen, chips & snack seasoning', 'Marinades & culinary sauces', 'Ready-to-eat meals', 'Bakery seasoning']
    },
    {
      id: 'garlic',
      name: 'Garlic Powder',
      tagline: 'Pungent. Consistent. Long shelf life.',
      desc: 'Sun-kissed garlic sourced from Madhya Pradesh’s Mandsaur region — India’s garlic capital. Dried at precisely controlled temperatures to preserve the active allicin compound responsible for garlic’s distinctive aroma and antimicrobial health benefits. Uniform fine powder with no artificial anti-caking agents.',
      image: 'images/hero_onion_garlic.png',
      badge: 'High Demand',
      badgeColor: '#dd6b20',
      priceRange: '₹600/kg - ₹680/kg (based on volume)',
      specs: {
        'Moisture Content': '< 5%',
        'Mesh Size': '60–80 mesh',
        'Colour': 'Off-white to pale yellow',
        'Aroma': 'Characteristic strong garlic aroma',
        'Shelf Life': '18–24 months',
        'Storage': 'Cool & dry, <25°C',
        'FSSAI Standard': 'FSSAI 2.4.6(3)',
        'Packaging': 'Airtight nitrogen-flushed pouch'
      },
      b2bSizes: ['1 kg', '5 kg', '10 kg', '25 kg bags'],
      b2cSizes: ['50g', '100g', '200g', '500g'],
      usages: ['Garlic bread & pizza seasoning', 'Dry spice mixes & marinades', 'Salad dressings & dips', 'Instant noodle tastemakers', 'RTE food manufacturing', 'Restaurant table seasoning']
    },
    {
      id: 'moringa',
      name: 'Moringa Powder',
      tagline: "The world's most nutritious green superfood.",
      desc: 'Shade-dried, nutrient-dense moringa leaves sourced directly from our partner farms in Tamil Nadu. Micro-ground to a fine, vibrant green powder. High-grade purity that complies with strict EU and US health standards. Ideal for wellness supplement brands and food fortification.',
      image: 'images/hero_moringa.png',
      badge: 'Export Ready',
      badgeColor: '#3182ce',
      priceRange: '₹500/kg - ₹580/kg (based on volume)',
      specs: {
        'Moisture Content': '< 5%',
        'Mesh Size': '80–100 mesh (Ultra-fine)',
        'Colour': 'Vibrant dark olive green',
        'Aroma': 'Mild, earthy, green leaf aroma',
        'Shelf Life': '24 months',
        'Storage': 'Store below 20°C in airtight container',
        'FSSAI Standard': 'FSSAI Health Supplements Regs',
        'Packaging': 'Double-walled laminated export bags'
      },
      b2bSizes: ['1 kg', '5 kg', '10 kg', '25 kg drum packs'],
      b2cSizes: ['100g', '200g', '250g'],
      usages: ['Green health drinks & smoothies', 'Nutraceutical capsules & tablets', 'Ayurvedic formulations', 'Energy bars & protein powders', 'Healthy bakery fortification', 'Herbal teas']
    },
    {
      id: 'beetroot',
      name: 'Beetroot Powder',
      tagline: "Nature's most vibrant natural colouring agent.",
      desc: 'Farm-fresh, deep red beetroots from Maharashtra and Karnataka, blanched to lock in active betanin, then precision-dried and ground into a fine, highly water-soluble powder. Perfect clean-label natural food colorant and nitrate-rich stamina booster for sports nutrition.',
      image: 'images/product_beetroot.png',
      badge: 'Trending',
      badgeColor: '#805ad5',
      priceRange: '₹450/kg - ₹520/kg (based on volume)',
      specs: {
        'Moisture Content': '< 5%',
        'Mesh Size': '60–80 mesh',
        'Colour': 'Deep purple-red',
        'Aroma': 'Mild earthy-sweet aroma',
        'Shelf Life': '18–24 months',
        'Storage': 'Cool & dry, protect from light',
        'FSSAI Standard': 'FSSAI 2.4.6 Regulations',
        'Packaging': 'Light-protected vacuum sealed bag'
      },
      b2bSizes: ['1 kg', '5 kg', '10 kg', '25 kg bags'],
      b2cSizes: ['100g', '200g', '500g'],
      usages: ['Natural pink/red food coloring', 'Wellness juice shots & smoothies', 'Sports pre-workout powders', 'Confectionery & bakery products', 'Pink pasta, noodles & snacks', 'Gourmet dessert plating']
    }
  ];

  // Handle smooth scroll to section
  const scrollToSection = (id) => {
    setActiveFilter(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounts for navbar + filter bar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to section from URL hash if present
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(targetId), 300);
    }
  }, [location]);

  return (
    <div>
      {/* COMPACT HERO */}
      <div
        style={{
          height: '300px',
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
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Home</Link> &gt; <span style={{ color: 'var(--color-white)' }}>Products</span>
          </div>
          <h1 style={{ color: 'var(--color-white)', fontSize: '36px', marginBottom: '8px' }}>Our Products</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', maxWidth: '600px' }}>
            All products are FSSAI certified, NABL lab tested, and nitrogen-flushed for maximum shelf life.
          </p>
        </div>
      </div>

      {/* STICKY FILTER BAR */}
      <div
        style={{
          position: 'sticky',
          top: '64px',
          backgroundColor: 'var(--color-white)',
          borderBottom: '1px solid var(--color-border)',
          zIndex: 100,
          padding: '16px 0',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="container" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              backgroundColor: activeFilter === 'all' ? 'var(--color-accent)' : 'transparent',
              color: activeFilter === 'all' ? 'var(--color-white)' : 'var(--color-dark)',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '13px',
              transition: 'var(--transition-smooth)'
            }}
          >
            All Products
          </button>
          {productsData.map((prod) => (
            <button
              key={prod.id}
              onClick={() => scrollToSection(prod.id)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid var(--color-border)',
                backgroundColor: activeFilter === prod.id ? 'var(--color-accent)' : 'transparent',
                color: activeFilter === prod.id ? 'var(--color-white)' : 'var(--color-dark)',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '13px',
                transition: 'var(--transition-smooth)'
              }}
            >
              {prod.name}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS DETAIL LIST */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {productsData.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                id={product.id}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'flex-start',
                  gap: '50px',
                  flexWrap: 'wrap',
                  backgroundColor: 'var(--color-white)',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="product-detail-card"
              >
                {/* Left/Right Column: Image Panel */}
                <div style={{ flex: '1 1 40%', minWidth: '300px' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', height: '350px', backgroundColor: '#eaeaea' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        backgroundColor: product.badgeColor,
                        color: 'var(--color-white)',
                        fontWeight: 600,
                        fontSize: '12px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Thumbnail gallery */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                    <div className="thumb-item"><img src={product.image} alt="thumb" /></div>
                    <div className="thumb-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '11px', fontWeight: 600, border: '1px solid var(--color-border)', borderRadius: '6px', height: '60px', flex: 1 }}>Pure Dried</div>
                    <div className="thumb-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '11px', fontWeight: 600, border: '1px solid var(--color-border)', borderRadius: '6px', height: '60px', flex: 1 }}>Hygienic</div>
                  </div>
                </div>

                {/* Right/Left Column: Content Panel */}
                <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
                  <h2 style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '4px' }}>{product.name}</h2>
                  <p style={{ fontSize: '15px', fontStyle: 'italic', color: 'var(--color-accent)', marginBottom: '16px', fontWeight: 500 }}>
                    "{product.tagline}"
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                    {product.desc}
                  </p>

                  {/* Specifications Table */}
                  <h3 style={{ fontSize: '16px', marginBottom: '12px', borderBottom: '2px solid var(--color-accent)', paddingBottom: '4px', display: 'inline-block' }}>
                    Technical Specifications
                  </h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '24px' }}>
                    <tbody>
                      {Object.entries(product.specs).map(([param, val]) => (
                        <tr key={param} style={{ borderBottom: '1px solid var(--color-border)' }}>
                          <td style={{ padding: '8px 0', fontWeight: 600, color: 'var(--color-primary)', width: '40%' }}>{param}</td>
                          <td style={{ padding: '8px 0', color: 'var(--color-dark)' }}>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pack Sizes */}
                  <div className="grid-2" style={{ marginBottom: '20px', gap: '20px' }}>
                    <div>
                      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-muted)', marginBottom: '8px' }}>B2B Bulk Formats</h4>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {product.b2bSizes.map((size) => (
                          <span key={size} style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '4px 8px', fontSize: '12px', fontWeight: 500 }}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-muted)', marginBottom: '8px' }}>Retail Packs Available</h4>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {product.b2cSizes.map((size) => (
                          <span key={size} style={{ backgroundColor: 'var(--color-mint)', border: '1px solid rgba(76, 175, 80, 0.2)', borderRadius: '4px', padding: '4px 8px', fontSize: '12px', fontWeight: 500, color: 'var(--color-primary)' }}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Hint */}
                  <div style={{ backgroundColor: 'var(--color-bg)', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px', fontSize: '13px', borderLeft: '4px solid var(--color-accent)' }}>
                    <Info size={16} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-accent)', verticalAlign: 'middle' }} />
                    <span style={{ fontWeight: 500, color: 'var(--color-primary)' }}>B2B Commercial Pricing:</span> {product.priceRange}. Custom quotes available for contract orders above 100 kg.
                  </div>

                  {/* Usages */}
                  <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-muted)', marginBottom: '10px' }}>Common Applications</h4>
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: '32px' }}>
                    {product.usages.map((use, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-dark)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Link to="/bulk-enquiry" className="btn btn-secondary">
                      Get Bulk Quote
                    </Link>
                    <Link to="/bulk-enquiry?sample=true" className="btn btn-outline-green">
                      Request Sample
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CERTIFICATIONS STRIP */}
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'center', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <span className="footer-cert-badge">FSSAI STATE LICENSE</span>
            <span className="footer-cert-badge">ISO 22000 SYSTEM</span>
            <span className="footer-cert-badge">APEDA REGISTERED</span>
            <span className="footer-cert-badge">NABL LAB PARTNER</span>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            All quality certificates available on request. A Certificate of Analysis (COA) is provided with every shipment.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .product-detail-card {
            flex-direction: column !important;
            padding: 20px !important;
          }
        }
        .thumb-item {
          height: 60px;
          flex: 1;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }
        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .footer-cert-badge {
          background-color: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
};

export default Products;
