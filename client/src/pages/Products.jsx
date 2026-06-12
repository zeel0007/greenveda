import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  FlaskConical, 
  Factory, 
  Package, 
  Globe, 
  Ban, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  MessageSquare, 
  Download, 
  Flame, 
  Sparkles, 
  Utensils, 
  Soup, 
  GlassWater, 
  Wheat, 
  Info,
  Calendar,
  Layers,
  ThermometerSun,
  ShieldCheck,
  Droplets,
  Scissors
} from 'lucide-react';
import FadeInSection from '../components/FadeInSection';

const ScrollFadeIn = ({ children, delay = 0, direction = 'up' }) => {
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
      { threshold: 0.05 }
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
      if (direction === 'left') return 'translateX(-40px)';
      if (direction === 'right') return 'translateX(40px)';
      return 'translateY(30px)';
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFormatIdx, setActiveFormatIdx] = useState(3);

  const collection = [
    {
      id: 'beetroot',
      name: 'Beetroot Powder',
      icon: Sparkles,
      image: 'images/product_beetroot.png',
      tagline: 'Nature\'s most vibrant organic coloring.',
      desc: 'Naturally rich and vibrant. Perfect for smoothies, juices and baking.',
      longDesc: 'Our beetroot powder is crafted from premium beetroots grown in pesticide-free soil, blanched to secure betanin nutrients, and processed under low temperatures to preserve its color and rich nitrate content.',
      sizes: ['100g', '250g', '500g', '1kg'],
      specs: {
        'Moisture': '< 4.5%',
        'Color': 'Deep purple-red / burgundy',
        'Solubility': '95% Water-dispersible',
        'FSSAI Standard': 'Certified Organic Grade',
        'Mesh Size': '80 mesh fine',
        'Shelf Life': '18 months'
      }
    },
    {
      id: 'moringa',
      name: 'Moringa Powder',
      icon: Leaf,
      image: 'images/hero_moringa.png',
      tagline: 'Daily plant nutrition for healthy lifestyles.',
      desc: 'Daily plant nutrition for healthy lifestyles.',
      longDesc: 'Sourced from organic moringa farms in South India. Dried in high-grade dark chambers to lock in vitamins, chlorophyll, and amino acids. An exceptional superfood ingredient for supplements and wellness foods.',
      sizes: ['100g', '250g', '500g', '1kg'],
      specs: {
        'Moisture': '< 5%',
        'Color': 'Vibrant olive green',
        'Chlorophyll': 'High natural preservation',
        'FSSAI Standard': 'Standard Health Supplement',
        'Mesh Size': '100 mesh ultra-fine',
        'Shelf Life': '24 months'
      }
    },
    {
      id: 'onion',
      name: 'Onion Powder',
      icon: Layers,
      image: 'images/product_onion.png',
      tagline: 'Rich caramelized natural onion profile.',
      desc: 'Convenient natural onion flavour for modern cooking.',
      longDesc: 'Dehydrated red and white Nashik onions processed cleanly with zero chemical additives or flowing agents. Delivers unmatched savory notes to premium culinary formulations, dry masalas, and marinades.',
      sizes: ['100g', '250g', '500g', '1kg'],
      specs: {
        'Moisture': '< 4.8%',
        'Color': 'Warm cream / light beige',
        'Flavor': 'Sweet and sharp pungent onion',
        'FSSAI Standard': 'Standard Spice Regulation',
        'Mesh Size': '80 mesh fine',
        'Shelf Life': '18 months'
      }
    },
    {
      id: 'garlic',
      name: 'Garlic Powder',
      icon: ShieldCheck,
      image: 'images/hero_onion_garlic.png',
      tagline: 'Pure roasted garlic richness.',
      desc: 'Rich natural garlic flavour for cooking and seasoning.',
      longDesc: 'Grown in rich soil, sliced cleanly, and processed under controlled atmosphere to retain allicin compounds. Provides instant authentic aroma and flavor to garlic bread seasoning, chips, and industrial snack mixes.',
      sizes: ['100g', '250g', '500g', '1kg'],
      specs: {
        'Moisture': '< 4.0%',
        'Color': 'Off-white to light ivory',
        'Allicin Content': 'Verified active',
        'FSSAI Standard': 'Standard Spice Regulation',
        'Mesh Size': '80 mesh fine',
        'Shelf Life': '18 months'
      }
    }
  ];

  const whyChooseUs = [
    { icon: Leaf, title: 'Farm Fresh Ingredients', desc: 'Sourced directly from our partner farms at peak nutritional ripeness.' },
    { icon: FlaskConical, title: 'Laboratory Tested', desc: 'Every batch undergoes rigid microbiological and physical lab testing.' },
    { icon: Factory, title: 'Hygienically Processed', desc: 'GMP-certified food grade facility with multi-level processing safety.' },
    { icon: Package, title: 'Premium Packaging', desc: 'Multi-layer nitrogen-flushed packages protect flavor and extend shelf life.' },
    { icon: Globe, title: 'Export Quality', desc: 'Adhering to strict international food laws and quality thresholds.' },
    { icon: Ban, title: 'No Artificial Additives', desc: '100% clean label. Absolutely no colorants, preservatives, or anti-caking agents.' }
  ];

  const packTimeline = [
    { 
      size: '10g', 
      type: 'Sachet',
      name: 'Single-Serve Alumino-Barrier Sachet',
      material: 'Triple-layer metallized barrier foil',
      protection: 'Nitrogen flushed, zero moisture permeation, oxygen barrier',
      bestFor: 'Single-use smoothies, B2B sample distribution, travel packs',
      details: {
        'Lid/Closure': 'Heat-sealed tear notch',
        'UV Protection': '100% Light-block rating',
        'Recyclability': 'Category 7 (Other) / Specialized loop',
        'Shelf-Life Factor': 'Maintains freshness up to 24 months'
      }
    },
    { 
      size: '100g', 
      type: 'Retail Jar',
      name: 'UV-Amber Apothecary Jar',
      material: 'Recyclable pharmaceutical-grade amber glass',
      protection: 'Airtight wood-composite lid, 99.8% UV-light blockage',
      bestFor: 'Premium retail shelf, organic wellness brands, cosmetic formulations',
      details: {
        'Lid/Closure': 'Induction sealed cap',
        'UV Protection': '99.8% Blockage of active wavelengths',
        'Recyclability': 'Category 1 (Glass) - 100% Infinitely Recyclable',
        'Shelf-Life Factor': 'Optimizes enzyme & color preservation'
      }
    },
    { 
      size: '250g', 
      type: 'Retail Jar',
      name: 'UV-Amber Apothecary Jar',
      material: 'Recyclable pharmaceutical-grade amber glass',
      protection: 'Airtight wood-composite lid, 99.8% UV-light blockage',
      bestFor: 'Direct retail shelf, wellness clubs, high-end spice collections',
      details: {
        'Lid/Closure': 'Induction sealed cap',
        'UV Protection': '99.8% Blockage of active wavelengths',
        'Recyclability': 'Category 1 (Glass) - 100% Infinitely Recyclable',
        'Shelf-Life Factor': 'Optimizes enzyme & color preservation'
      }
    },
    { 
      size: '500g', 
      type: 'Chef Jar',
      name: 'UV-Amber Apothecary Jar (Medium)',
      material: 'Recyclable pharmaceutical-grade amber glass',
      protection: 'Induction heat sealed, airtight wooden-composite lid',
      bestFor: 'Tabletop display, professional kitchens, juice bars',
      details: {
        'Lid/Closure': 'Induction sealed cap',
        'UV Protection': '99.8% Blockage of active wavelengths',
        'Recyclability': 'Category 1 (Glass) - 100% Infinitely Recyclable',
        'Shelf-Life Factor': 'Maintains raw enzyme stability'
      }
    },
    { 
      size: '1kg', 
      type: 'Chef Jar',
      name: 'UV-Amber Apothecary Jar (Large)',
      material: 'Recyclable pharmaceutical-grade amber glass',
      protection: 'Induction heat sealed, airtight wooden-composite lid',
      bestFor: 'High-paced gourmet kitchens, restaurant prep, table seasonings',
      details: {
        'Lid/Closure': 'Induction sealed cap',
        'UV Protection': '99.8% Blockage of active wavelengths',
        'Recyclability': 'Category 1 (Glass) - 100% Infinitely Recyclable',
        'Shelf-Life Factor': 'Maintains raw enzyme stability'
      }
    },
    { 
      size: '5kg', 
      type: 'Bulk Pack',
      name: 'Eco-Guard Multi-Wall Pouch',
      material: 'Recycled kraft paper with inner food-grade plant polymer liner',
      protection: 'Re-sealable airtight zip-lock, moisture-barrier interior layer',
      bestFor: 'Bakeries, wellness food manufacturers, commercial catering hubs',
      details: {
        'Lid/Closure': 'Heavy-duty airtight zipper',
        'UV Protection': '100% Opaque block',
        'Recyclability': 'Compostable kraft paper / Biodegradable inner liner',
        'Shelf-Life Factor': 'Best consumed within 12 months after opening'
      }
    },
    { 
      size: '25kg', 
      type: 'Industrial Pack',
      name: 'Heavy-Duty HDPE Industrial Drum',
      material: 'Food-grade high-density polyethylene with double inner PE liner',
      protection: 'Lever-lock metal ring seal, desiccant pouches integrated',
      bestFor: 'Industrial food manufacturers, large-scale distributors, export buyers',
      details: {
        'Lid/Closure': 'Steel lever-lock ring clamp',
        'UV Protection': '100% Opaque block',
        'Recyclability': 'Category 2 (HDPE) - High reuse value',
        'Shelf-Life Factor': 'Maximum stable duration for global shipping'
      }
    }
  ];

  const renderPackagingVisual = (item) => {
    if (item.type === 'Sachet') {
      return (
        <div style={{
          width: '120px',
          height: '180px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #E8E5DF 0%, #C8C4BC 50%, #9C988F 100%)',
          boxShadow: '0 15px 35px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.4)',
          border: '1px solid rgba(255,255,255,0.2)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.5s ease'
        }}>
          {/* Crimp marks top & bottom */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '12px', background: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 2px, transparent 2px, transparent 4px)', borderBottom: '1px solid rgba(0,0,0,0.15)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '12px', background: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 2px, transparent 2px, transparent 4px)', borderTop: '1px solid rgba(0,0,0,0.15)' }} />
          {/* Tear notch */}
          <div style={{ position: 'absolute', top: '25px', left: 0, width: '6px', height: '4px', backgroundColor: '#F8F5F0', borderRadius: '0 2px 2px 0' }} />
          {/* Luxury Label */}
          <div style={{
            width: '75%',
            backgroundColor: 'var(--color-primary)',
            padding: '14px 10px',
            borderRadius: '4px',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600 }}>GREENVEDA</div>
            <div style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', marginTop: '4px', fontWeight: 600 }}>10g</div>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>SAMPLE POUCH</div>
          </div>
        </div>
      );
    }
    
    if (item.type.includes('Jar')) {
      let width = 110;
      let height = 150;
      if (item.size === '100g') { width = 100; height = 130; }
      else if (item.size === '250g') { width = 115; height = 150; }
      else if (item.size === '500g') { width = 135; height = 180; }
      else if (item.size === '1kg') { width = 155; height = 210; }
      
      return (
        <div style={{
          width: `${width}px`,
          height: `${height}px`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Wooden cap */}
          <div style={{
            width: '88%',
            height: `${height * 0.14}px`,
            borderRadius: '8px 8px 3px 3px',
            background: 'linear-gradient(90deg, #604932 0%, #876748 50%, #4D3720 100%)',
            border: '1px solid rgba(0,0,0,0.2)',
            boxShadow: '0 3px 5px rgba(0,0,0,0.15)'
          }} />
          {/* Neck */}
          <div style={{
            width: '76%',
            height: `${height * 0.06}px`,
            backgroundColor: 'rgba(84, 39, 10, 0.95)',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            borderRight: '1px solid rgba(0,0,0,0.3)'
          }} />
          {/* Jar Body */}
          <div style={{
            width: '100%',
            height: `${height * 0.8}px`,
            borderRadius: '4px 4px 16px 16px',
            background: 'linear-gradient(90deg, rgba(82, 38, 11, 0.97) 0%, rgba(135, 75, 23, 0.94) 30%, rgba(199, 126, 60, 0.95) 50%, rgba(110, 52, 14, 0.94) 80%, rgba(61, 26, 6, 0.99) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20%',
              width: '12%',
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)'
            }} />
            
            {/* Elegant Label */}
            <div style={{
              width: '74%',
              height: '56%',
              backgroundColor: '#F7F4EE',
              border: '1px solid #E3DCCE',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              zIndex: 1,
              borderRadius: '2px'
            }}>
              <span style={{ fontSize: `${width * 0.08}px`, fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '1px', textAlign: 'center' }}>
                GREENVEDA
              </span>
              <div style={{ width: '40%', height: '1px', backgroundColor: 'var(--color-gold)', margin: '4px 0' }} />
              <span style={{ fontSize: `${width * 0.1}px`, color: 'var(--color-accent)', fontWeight: 600 }}>
                {item.size}
              </span>
            </div>
          </div>
        </div>
      );
    }
    
    if (item.type === 'Bulk Pack') {
      return (
        <div style={{
          width: '150px',
          height: '210px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          transition: 'all 0.5s ease'
        }}>
          {/* Zip Lock strip */}
          <div style={{
            width: '92%',
            height: '16px',
            backgroundColor: '#C5B59E',
            borderRadius: '2px',
            border: '1px solid rgba(0,0,0,0.15)',
            zIndex: 2,
            boxShadow: 'inset 0 -2px 3px rgba(0,0,0,0.1)'
          }} />
          {/* Paper pouch body */}
          <div style={{
            width: '100%',
            height: '196px',
            borderRadius: '4px 4px 16px 16px',
            background: 'linear-gradient(135deg, #E3D9CC 0%, #C7B8A5 60%, #AB9C89 100%)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '12px', backgroundColor: 'rgba(0,0,0,0.04)' }} />
            
            {/* Pouch Label */}
            <div style={{
              width: '74%',
              height: '64%',
              backgroundColor: 'var(--color-primary)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              color: '#F8F5F0',
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Leaf size={22} style={{ color: 'var(--color-gold)', marginBottom: '6px' }} />
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>ORGANIC BULK</span>
              <span style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginTop: '2px' }}>5 KG</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (item.type === 'Industrial Pack') {
      return (
        <div style={{
          width: '165px',
          height: '230px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          transition: 'all 0.5s ease'
        }}>
          {/* Steel clamping lid */}
          <div style={{
            width: '96%',
            height: '20px',
            borderRadius: '6px 6px 0 0',
            background: 'linear-gradient(90deg, #AFAFAF 0%, #E2E2E2 50%, #838383 100%)',
            boxShadow: '0 3px 5px rgba(0,0,0,0.15)',
            border: '1px solid #888',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '12px'
          }}>
            <div style={{ width: '16px', height: '7px', backgroundColor: '#5c5c5c', borderRadius: '1px' }} />
          </div>
          {/* HDPE Body */}
          <div style={{
            width: '100%',
            height: '210px',
            borderRadius: '0 0 16px 16px',
            background: 'linear-gradient(90deg, #102B20 0%, #1F4D3A 30%, #2A664E 60%, #1F4D3A 80%, #0C1E16 100%)',
            boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Structural grooves */}
            <div style={{ position: 'absolute', top: '25%', left: 0, right: 0, height: '4px', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            <div style={{ position: 'absolute', top: '75%', left: 0, right: 0, height: '4px', backgroundColor: 'rgba(0,0,0,0.25)' }} />
            
            {/* Large drum label */}
            <div style={{
              width: '76%',
              height: '46%',
              backgroundColor: '#F8F5F0',
              boxShadow: '0 5px 15px rgba(0,0,0,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '2px',
              border: '1px solid var(--color-border)'
            }}>
              <span style={{ fontSize: '9px', color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '1px' }}>JP GREEN VEDA</span>
              <span style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontWeight: 700, margin: '2px 0' }}>25 KG</span>
              <span style={{ fontSize: '8px', color: 'var(--color-accent)', fontWeight: 600 }}>INDUSTRIAL DRUM</span>
            </div>
          </div>
        </div>
      );
    }
  };

  const applications = [
    { icon: GlassWater, title: 'Smoothies', desc: 'Vibrant colors and nutrient boosts for functional health beverages.' },
    { icon: Sparkles, title: 'Instant Foods', desc: 'Natural powders dissolve instantly in cup-noodles, soup mixes, and instant meals.' },
    { icon: Soup, title: 'Soups', desc: 'Adds rich mouthfeel and authentic flavor profiles without lumps.' },
    { icon: Utensils, title: 'Restaurants', desc: 'Premium ingredients for high-paced gourmet kitchens and table seasonings.' },
    { icon: Factory, title: 'Food Manufacturing', desc: 'Bulk formats optimized for commercial snack and masala manufacturers.' },
    { icon: Flame, title: 'Seasoning Blends', desc: 'Ideal base powders for rubs, gourmet salts, and masala blends.' },
    { icon: Wheat, title: 'Bakery', desc: 'Imparts natural pastel shades and subtle aromas to breads, buns, and crackers.' },
    { icon: Globe, title: 'Export', desc: 'Standardized specifications ready for international buyers and distributors.' }
  ];

  const processTimeline = [
    { step: '01', icon: Leaf, title: 'Farm Selection', desc: 'Identifying fertile lands and verified cooperative growers.' },
    { step: '02', icon: Droplets, title: 'Cleaning', desc: 'Multi-stage washing to clear dirt, outer skin, and surface contaminants.' },
    { step: '03', icon: Scissors, title: 'Slicing', desc: 'Precision mechanical slicing to ensure uniform dehydration.' },
    { step: '04', icon: ThermometerSun, title: 'Precision Drying', desc: 'Low-heat dehydration preserves natural enzymes and color profiles.' },
    { step: '05', icon: Layers, title: 'Grinding', desc: 'Cool-milled grinding to avoid thermal degradation of organic compounds.' },
    { step: '06', icon: FlaskConical, title: 'Quality Testing', desc: 'Rigid tests for moisture, microbial load, and particle size distribution.' },
    { step: '07', icon: Package, title: 'Packaging', desc: 'Nitrogen-flushed vacuum packaging to maintain absolute freshness.' },
    { step: '08', icon: Globe, title: 'Delivery', desc: 'Safe dispatch with complete traceability reports and Certificate of Analysis.' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#F8F5F0', color: '#2B2B2B', overflowX: 'hidden' }}>
      
      {/* SECTION 1 — HERO */}
      <div 
        style={{ 
          position: 'relative', 
          height: '100vh', 
          minHeight: '650px',
          display: 'flex', 
          alignItems: 'center', 
          backgroundImage: "url('images/luxury_kitchen_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Soft elegant warm gradient overlay */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(135deg, rgba(31, 77, 58, 0.86) 0%, rgba(139, 111, 71, 0.45) 100%)',
          zIndex: 2 
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 3, color: 'var(--color-white)' }}>
          <div style={{ maxWidth: '800px' }}>
            <FadeInSection>
              <span style={{ 
                display: 'inline-block', 
                fontSize: '12px', 
                fontWeight: 600, 
                letterSpacing: '3px', 
                color: 'var(--color-gold)', 
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                Nature • Purity • Precision
              </span>
              <h1 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 'clamp(44px, 7vw, 76px)', 
                lineHeight: 1.1, 
                color: 'var(--color-white)', 
                marginBottom: '24px' 
              }}>
                Premium Vegetable Powders
              </h1>
              <p style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: 'clamp(16px, 1.8vw, 20px)', 
                fontWeight: 300, 
                lineHeight: 1.7, 
                color: '#E8E2D8',
                marginBottom: '40px',
                maxWidth: '640px'
              }}>
                Naturally crafted from carefully selected vegetables and processed with precision to preserve purity, flavour, and quality.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => scrollToSection('our-collection')}
                  className="btn btn-primary" 
                  style={{ borderRadius: '30px', padding: '16px 36px', fontSize: '15px' }}
                >
                  Explore Collection
                </button>
                <Link 
                  to="/bulk-enquiry" 
                  className="btn btn-secondary" 
                  style={{ borderRadius: '30px', padding: '16px 36px', fontSize: '15px' }}
                >
                  B2B Inquiry
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: '#E8E2D8',
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          zIndex: 3,
          cursor: 'pointer'
        }} onClick={() => scrollToSection('our-collection')}>
          <span>Scroll Down</span>
          <div style={{
            width: '2px',
            height: '40px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1px'
          }}>
            <div style={{
              width: '100%',
              height: '50%',
              backgroundColor: 'var(--color-gold)',
              position: 'absolute',
              top: 0,
              animation: 'scrollBarAnim 2s cubic-bezier(0.16, 1, 0.3, 1) infinite'
            }} />
          </div>
        </div>
      </div>

      {/* SECTION 2 — OUR COLLECTION */}
      <div id="our-collection" className="section" style={{ padding: '120px 0', backgroundColor: '#F8F5F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Our Collection</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>
              Discover Our Collection
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Choose from our premium range of natural vegetable powders crafted for modern kitchens and food industries.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '30px' }}>
            {collection.map((prod, idx) => (
              <ScrollFadeIn key={prod.id} delay={idx * 150} direction="up">
                <div 
                  className="product-premium-card"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '24px',
                    padding: '30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedProduct(prod)}
                >
                  <div>
                    {/* Image frame */}
                    <div className="product-image-container" style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      height: '240px',
                      backgroundColor: '#F5F2EC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      marginBottom: '24px'
                    }}>
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        style={{ 
                          maxHeight: '88%', 
                          maxWidth: '88%',
                          objectFit: 'contain',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }} 
                        className="jar-image"
                      />
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: '30px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        border: '1px solid var(--color-border)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <prod.icon size={13} style={{ color: 'var(--color-gold)' }} /> Premium
                      </span>
                    </div>

                    <h3 style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '24px', 
                      color: 'var(--color-primary)', 
                      marginBottom: '8px' 
                    }}>
                      {prod.name}
                    </h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '13.5px', lineHeight: 1.5, marginBottom: '20px' }}>
                      {prod.desc}
                    </p>
                  </div>

                  <div>
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-accent)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        Available Formats
                      </span>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {prod.sizes.map(s => (
                          <span key={s} style={{ fontSize: '11.5px', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#F5F2EC', border: '1px solid var(--color-border)', fontWeight: 500 }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      className="btn-text-link"
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        fontSize: '14px', 
                        fontWeight: 600, 
                        color: 'var(--color-accent)',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 3 — WHY CHOOSE JP GREEN VEDA */}
      <div className="section" style={{ padding: '120px 0', backgroundColor: '#F2EDE4' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Our Value</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>
              Quality That Speaks for Itself
            </h2>
          </div>

          <div className="grid-3" style={{ gap: '30px' }}>
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollFadeIn key={idx} delay={idx * 100}>
                  <div 
                    className="glass-card-hover"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(232, 226, 216, 0.8)',
                      borderRadius: '24px',
                      padding: '36px',
                      height: '100%',
                      backdropFilter: 'blur(8px)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                    }}
                  >
                    <div style={{ color: 'var(--color-gold)', marginBottom: '20px' }}>
                      <IconComp size={36} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '22px', 
                      color: 'var(--color-primary)', 
                      marginBottom: '12px' 
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

        </div>
      </div>

      {/* SECTION 4 — AVAILABLE PACKAGING */}
      <div className="section" style={{ padding: '120px 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Formats</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Packaging Designed for Every Need
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              From retail-ready artisan glass jars to heavy-duty industrial bulk containers. Select a format below to inspect packaging details.
            </p>
          </div>

          {/* Visual Interactive Stepper */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            maxWidth: '900px',
            margin: '0 auto 60px auto',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '20px',
            flexWrap: 'wrap'
          }}>
            {packTimeline.map((item, idx) => {
              const isActive = activeFormatIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFormatIdx(idx)}
                  style={{
                    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--color-primary)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                    borderRadius: '30px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  <Package size={14} style={{ color: isActive ? 'var(--color-gold)' : 'var(--color-accent)' }} />
                  {item.size}
                </button>
              );
            })}
          </div>

          {/* Explorer Layout */}
          <div className="grid-2" style={{ gap: '40px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Visual Container Panel */}
            <ScrollFadeIn direction="left" delay={100}>
              <div style={{
                backgroundColor: '#F4F0EA',
                borderRadius: '24px',
                padding: '60px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '380px',
                boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.03)',
                border: '1px solid var(--color-border)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Ambient spotlight glow */}
                <div style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,166,109,0.12) 0%, rgba(201,166,109,0) 70%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Visual representation */}
                {renderPackagingVisual(packTimeline[activeFormatIdx])}
              </div>
            </ScrollFadeIn>

            {/* Specifications Details Panel */}
            <ScrollFadeIn direction="right" delay={200}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '10px 0'
              }}>
                <div>
                  <span style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: 'var(--color-accent)',
                    fontWeight: 700,
                    display: 'inline-block',
                    marginBottom: '10px'
                  }}>
                    {packTimeline[activeFormatIdx].type} Format
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '32px',
                    color: 'var(--color-primary)',
                    marginBottom: '12px'
                  }}>
                    {packTimeline[activeFormatIdx].name}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-muted)',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>
                    {packTimeline[activeFormatIdx].material}. Features {packTimeline[activeFormatIdx].protection}.
                  </p>
                  
                  {/* Key Specs Table Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '24px',
                    marginBottom: '30px'
                  }}>
                    {Object.entries(packTimeline[activeFormatIdx].details).map(([key, val]) => (
                      <div key={key}>
                        <span style={{
                          fontSize: '10.5px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          color: 'var(--color-accent)',
                          fontWeight: 600,
                          display: 'block',
                          marginBottom: '4px'
                        }}>
                          {key}
                        </span>
                        <span style={{
                          fontSize: '13.5px',
                          color: 'var(--color-primary)',
                          fontWeight: 500
                        }}>
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)', fontStyle: 'italic', marginBottom: '24px' }}>
                    <strong>Best Suited For:</strong> {packTimeline[activeFormatIdx].bestFor}
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link 
                      to={`/bulk-enquiry?product=general&format=${packTimeline[activeFormatIdx].size}`}
                      className="btn-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '14px',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Request Quote ({packTimeline[activeFormatIdx].size}) <ArrowRight size={16} />
                    </Link>
                    <Link 
                      to={`/bulk-enquiry?product=general&format=${packTimeline[activeFormatIdx].size}&sample=true`}
                      className="btn-secondary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '14px 28px',
                        borderRadius: '30px',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Request Sample Pack
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

          </div>

        </div>
      </div>

      {/* SECTION 5 — APPLICATIONS */}
      <div className="section" style={{ padding: '120px 0', backgroundColor: '#F8F5F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Use Cases</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>
              Perfect for Every Kitchen & Industry
            </h2>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {applications.map((app, idx) => {
              const IconComp = app.icon;
              return (
                <ScrollFadeIn key={idx} delay={idx * 80}>
                  <div style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '24px',
                    padding: '28px',
                    height: '100%',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      backgroundColor: 'rgba(31,77,58,0.06)', 
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <IconComp size={22} strokeWidth={2} />
                    </div>
                    <h4 style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '18px', 
                      color: 'var(--color-primary)', 
                      marginBottom: '8px' 
                    }}>
                      {app.title}
                    </h4>
                    <p style={{ color: 'var(--color-muted)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                      {app.desc}
                    </p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

        </div>
      </div>

      {/* SECTION 6 — QUALITY PROMISE */}
      <div className="section" style={{ padding: '120px 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            
            {/* Left Column */}
            <ScrollFadeIn direction="left">
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <img 
                    src="images/hero_all_products.png" 
                    alt="JP Green Veda Premium Powders"
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                </div>
                {/* Decorative border frame */}
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
            </ScrollFadeIn>

            {/* Right Column */}
            <ScrollFadeIn direction="right">
              <div>
                <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Promise</span>
                <h2 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '44px', 
                  color: 'var(--color-primary)',
                  lineHeight: 1.15,
                  marginBottom: '32px'
                }}>
                  Every Batch.<br />Every Detail.<br />Every Time.
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Carefully Selected Ingredients',
                    'Low Moisture Technology',
                    'Batch Tested',
                    'Hygienically Packed',
                    'Consistent Quality',
                    'Long Shelf Life'
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(31,77,58,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                        flexShrink: 0
                      }}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-dark)' }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

          </div>
        </div>
      </div>

      {/* SECTION 7 — OUR PROCESS */}
      <div className="section" style={{ padding: '120px 0', backgroundColor: '#F8F5F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Traceability</span>
            <h2 className="section-title" style={{ fontSize: '42px', color: 'var(--color-primary)' }}>
              From Farm to Jar
            </h2>
          </div>

          <div className="grid-4" style={{ gap: '30px', marginBottom: '60px' }}>
            {processTimeline.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollFadeIn key={idx} delay={idx * 80}>
                  <div style={{
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '24px',
                    padding: '30px',
                    height: '100%',
                    position: 'relative',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      opacity: 0.6
                    }}>
                      {item.step}
                    </div>

                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(201,166,109,0.1)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <IconComp size={20} />
                    </div>

                    <h4 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      color: 'var(--color-primary)',
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ color: 'var(--color-muted)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link 
              to="/our-process" 
              className="btn btn-primary"
              style={{ borderRadius: '30px', padding: '14px 32px' }}
            >
              Explore Full Process →
            </Link>
          </div>

        </div>
      </div>

      {/* SECTION 8 — BULK SUPPLY */}
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 20%, rgba(201, 166, 107, 0.15) 0%, transparent 80%)',
          pointerEvents: 'none'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollFadeIn>
              <span style={{ 
                display: 'inline-block', 
                fontSize: '12px', 
                fontWeight: 600, 
                letterSpacing: '3px', 
                color: 'var(--color-gold)', 
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                B2B Solutions
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.15,
                color: 'var(--color-white)',
                marginBottom: '20px'
              }}>
                Looking for Bulk Supply or Private Label Manufacturing?
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#E8E2D8',
                marginBottom: '40px'
              }}>
                We partner with food brands, restaurants, exporters and distributors across India with premium quality vegetable powders.
              </p>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/bulk-enquiry" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 32px' }}>
                  Request Bulk Quote
                </Link>
                <button 
                  onClick={() => alert('JP Green Veda Catalogue download starting soon!')}
                  className="btn btn-secondary" 
                  style={{ borderRadius: '30px', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Download size={16} /> Download Catalogue
                </button>
                <a 
                  href="https://wa.me/919999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-green" 
                  style={{ 
                    borderRadius: '30px', 
                    padding: '14px 32px', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'var(--color-white)', 
                    borderColor: 'rgba(255,255,255,0.4)' 
                  }}
                >
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>

      {/* SECTION 9 — FINAL BRAND MESSAGE */}
      <div className="section" style={{ padding: '120px 0', backgroundColor: '#F8F5F0', textAlign: 'center' }}>
        <div className="container">
          <ScrollFadeIn>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '44px', 
              color: 'var(--color-primary)', 
              marginBottom: '20px',
              letterSpacing: '1px'
            }}>
              Nature. Purity. Trust.
            </h2>
            <p style={{
              color: 'var(--color-muted)',
              fontSize: '16px',
              maxWidth: '640px',
              margin: '0 auto 60px auto',
              lineHeight: 1.6
            }}>
              At JP Green Veda, every jar represents our commitment to delivering carefully crafted natural ingredients with uncompromising quality.
            </p>

            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)'
            }}>
              <img 
                src="images/hero_all_products.png" 
                alt="All JP Green Veda Products" 
                style={{ width: '100%', display: 'block', height: 'auto' }}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      {/* DETAILED SPECIFICATION OVERLAY MODAL */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }} onClick={() => setSelectedProduct(null)}>
          <div style={{
            backgroundColor: '#F8F5F0',
            maxWidth: '800px',
            width: '100%',
            borderRadius: '24px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              <X size={18} />
            </button>

            <div className="grid-2" style={{ gap: '0' }}>
              
              {/* Modal Left Column: Image */}
              <div style={{
                backgroundColor: '#F5F2EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                minHeight: '350px'
              }}>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  style={{ maxHeight: '280px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Modal Right Column: Technical Details */}
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(201,166,109,0.1)',
                    color: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}>
                    <selectedProduct.icon size={20} />
                  </div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '28px', 
                    color: 'var(--color-primary)', 
                    marginBottom: '4px' 
                  }}>
                    {selectedProduct.name}
                  </h3>
                  <p style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontSize: '13.5px', marginBottom: '16px' }}>
                    "{selectedProduct.tagline}"
                  </p>
                  
                  <p style={{ color: 'var(--color-muted)', fontSize: '13.5px', lineHeight: 1.5, marginBottom: '24px' }}>
                    {selectedProduct.longDesc}
                  </p>

                  <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-accent)', fontWeight: 600, borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '12px' }}>
                    Technical Specifications
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', fontSize: '12.5px', marginBottom: '24px' }}>
                    {Object.entries(selectedProduct.specs).map(([label, val]) => (
                      <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{label}</span>
                        <span style={{ color: 'var(--color-dark)' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link 
                    to={`/bulk-enquiry?product=${selectedProduct.id}`} 
                    className="btn btn-primary"
                    style={{ flex: 1, borderRadius: '30px', textAlign: 'center', padding: '12px 0', fontSize: '14px' }}
                    onClick={() => setSelectedProduct(null)}
                  >
                    Request Bulk Quote
                  </Link>
                  <Link 
                    to={`/bulk-enquiry?product=${selectedProduct.id}&sample=true`} 
                    className="btn btn-outline-green"
                    style={{ flex: 1, borderRadius: '30px', textAlign: 'center', padding: '12px 0', fontSize: '14px' }}
                    onClick={() => setSelectedProduct(null)}
                  >
                    Request Sample
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* CUSTOM CSS FOR ANIMATIONS & HOVER GLOWS */}
      <style>{`
        /* Hero indicator animation */
        @keyframes scrollBarAnim {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* Hover animation for luxury cards */
        .product-premium-card {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease;
        }
        .product-premium-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(31,77,58,0.06), 0 1px 3px rgba(31,77,58,0.02) !important;
          border-color: var(--color-gold) !important;
        }
        .product-premium-card:hover .jar-image {
          transform: translateY(-8px) scale(1.04);
        }

        /* Glass card hover */
        .glass-card-hover {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease !important;
        }
        .glass-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--color-gold) !important;
          background-color: rgba(255, 255, 255, 0.8) !important;
        }

        /* Responsive timeline */
        @media (max-width: 991px) {
          .packaging-strip {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .timeline-arrow {
            transform: rotate(90deg);
            margin: 10px 0;
          }
        }
      `}</style>

    </div>
  );
};

export default Products;
