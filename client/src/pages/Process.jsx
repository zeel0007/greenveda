import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, ClipboardCheck, Droplet, Layers, Thermometer, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: '1',
      title: 'We Start at the Source',
      subtitle: 'STEP 1 — FARM SOURCING',
      icon: <Tractor size={32} />,
      content: 'We partner directly with Farmer Producer Organisations (FPOs) in Maharashtra (onion, garlic, beetroot), Tamil Nadu (moringa), and Madhya Pradesh (garlic). Every farm is vetted for pesticide use, water quality, and farming practices before we onboard them. We visit farms personally at least twice per crop season. This direct relationship means we know exactly where every kilogram of raw material comes from — and so do you.',
      fact: '20+ direct farm partners across 5 states'
    },
    {
      step: '2',
      title: 'Quality Check Before Production Begins',
      subtitle: 'STEP 2 — RECEIVING & INSPECTION',
      icon: <ClipboardCheck size={32} />,
      content: 'Every incoming batch of raw material is inspected before it enters our facility. We check: visual quality (colour, size, damage), moisture content of the incoming vegetable, absence of foreign matter, and pesticide residue status. Rejected batches are returned immediately. We never compromise at this stage — a bad raw material cannot produce a good powder.',
      fact: '100% incoming batches inspected before acceptance'
    },
    {
      step: '3',
      title: 'Cleaned to Food-Grade Standards',
      subtitle: 'STEP 3 — WASHING & SORTING',
      icon: <Droplet size={32} />,
      content: 'Accepted raw material is washed in food-grade sanitised water (50–100 ppm chlorinated solution, pH 6.5–7.5). Workers in protective gear manually sort and remove any remaining damaged or discoloured pieces. Only the cleanest, best-quality vegetable pieces move to the next stage. Our washing area is designed for FSSAI compliance with proper drainage, non-slip flooring, and stainless steel wash tanks.',
      fact: 'Multi-stage washing — no soil, no contaminants'
    },
    {
      step: '4',
      title: 'Precision Cutting for Even Drying',
      subtitle: 'STEP 4 — SLICING & BLANCHING',
      icon: <Layers size={32} />,
      content: 'Vegetables are sliced to a precise 3–5mm thickness using our food-grade slicer. Uniform thickness ensures that all pieces dry at the same rate, giving consistent moisture content throughout the batch. Beetroot and moringa are steam-blanched at 85–90°C for 2–3 minutes before drying. Blanching destroys enzymes that cause browning and colour loss, and ensures the final powder retains its characteristic vibrant colour.',
      fact: 'Uniform 3–5mm slicing ensures consistent drying'
    },
    {
      step: '5',
      title: 'Dried, Not Cooked',
      subtitle: 'STEP 5 — PRECISION DRYING',
      icon: <Thermometer size={32} />,
      content: 'This is the most critical step. Our tray dryers maintain a precise temperature of 55–65°C with controlled airflow and humidity monitoring. This temperature is hot enough to bring moisture below 5%, but cool enough to preserve nutrition, natural colour, and aroma. Each batch takes 6–14 hours depending on the starting moisture. We never rush the drying process. Every batch is checked with a moisture analyzer before moving to grinding.',
      fact: '55–65°C controlled drying — nutrition preserved'
    },
    {
      step: '6',
      title: '60–100 Mesh Uniform Powder',
      subtitle: 'STEP 6 — GRINDING & SIEVING',
      icon: <Sparkles size={32} />,
      content: 'Dried material is ground in our industrial pulveriser (hammer mill) to produce a fine powder. The ground material is then passed through our vibro-sifter to achieve uniform particle size — 60 to 80 mesh for most products, 80–100 mesh for moringa (finer, for better dispersion in liquids). Any oversized particles are returned to the pulveriser for re-grinding. The result is a completely uniform, lump-free powder.',
      fact: '60–100 mesh uniform — no lumps, no coarse particles'
    },
    {
      step: '7',
      title: 'Tested, Approved, and Sealed',
      subtitle: 'STEP 7 (FINAL) — QUALITY TESTING & PACKAGING',
      icon: <ShieldAlert size={32} />,
      content: 'Before any powder is packaged, our quality control team tests every batch for moisture content (must be < 5%), colour, aroma and taste, and microbial count (TPC, E.Coli, Salmonella). Approved batches are filled into multilayer airtight pouches, nitrogen-flushed to remove oxygen, and heat-sealed. Each pouch is labelled with batch number, production date, and expiry date for full traceability.',
      fact: 'Zero batch leaves without quality approval'
    }
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
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Home</Link> &gt; <span style={{ color: 'var(--color-white)' }}>Our Process</span>
          </div>
          <h1 style={{ color: 'var(--color-white)', fontSize: '36px', marginBottom: '8px' }}>From Farm to Your Shelf</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', maxWidth: '600px' }}>
            Every batch is fully traceable. Every step is documented and quality-controlled. No shortcuts. No compromises.
          </p>
        </div>
      </div>

      {/* PHILOSOPHY INTRO */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <span className="section-tag">Our Philosophy</span>
          <h2 style={{ fontSize: '28px', color: 'var(--color-primary)', marginBottom: '20px' }}>What Goes Into Your Food Matters</h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '15px', marginBottom: '16px', lineHeight: 1.7 }}>
            At GreenVeda, we believe that what goes into your food matters. That’s why we don’t just manufacture vegetable powders — we manage the entire journey, from choosing the right farms to sealing the final pouch.
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '15px', lineHeight: 1.7 }}>
            Every decision we make — which farm to source from, what temperature to dry at, which mesh size to sieve to — is made with one goal: delivering the purest, most consistent vegetable powder possible to your facility.
          </p>
        </div>
      </div>

      {/* 7-STEP TIMELINE PROCESS */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)', padding: '60px 0' }}>
        <div className="container" style={{ position: 'relative' }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50px',
              bottom: '100px',
              width: '2px',
              borderLeft: '2px dotted var(--color-accent)',
              transform: 'translateX(-50%)'
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.step}
                  style={{
                    display: 'flex',
                    flexDirection: isLeft ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    position: 'relative'
                  }}
                  className="timeline-row"
                >
                  {/* Content Column */}
                  <div style={{ width: '45%' }} className="timeline-content-wrapper">
                    <div className="card" style={{ padding: '24px', borderLeft: '4px solid var(--color-accent)' }}>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '1px' }}>
                        {step.subtitle}
                      </span>
                      <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', margin: '8px 0 12px 0' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                        {step.content}
                      </p>
                      <span style={{ display: 'inline-block', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '4px' }}>
                        Fact: {step.fact}
                      </span>
                    </div>
                  </div>

                  {/* Icon Node in the Center */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-white)',
                      border: '3px solid var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      zIndex: 5,
                      boxShadow: 'var(--shadow-md)'
                    }}
                    className="timeline-icon-node"
                  >
                    {step.icon}
                  </div>

                  {/* Empty Spacer Column (renders as styling element) */}
                  <div style={{ width: '45%' }} className="timeline-spacer" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* QUALITY STANDARDS TABLE */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Quality Control</span>
            <h2>What We Test For, Every Batch</h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginTop: '6px' }}>Our quality parameters meet and exceed FSSAI food safety regulations.</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', border: '1px solid var(--color-border)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'left' }}>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Parameter</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Standard/Target</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Test Method</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600 }}>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: 'Moisture Content', std: '< 5%', method: 'Halogen Moisture Analyser', freq: 'Every batch' },
                  { param: 'Microbial Count (TPC)', std: '< 1,00,000 CFU/g', method: 'Standard Plate Count (SPC)', freq: 'Every batch' },
                  { param: 'E. Coli & Salmonella', std: 'Absent', method: 'Culture Test / ISO 6579', freq: 'Monthly validation' },
                  { param: 'Heavy Metals (Pb, As, Cd)', std: 'Within FSSAI limits', method: 'AAS Method / NABL partner lab', freq: 'Quarterly' },
                  { param: 'Pesticide Residues', std: 'Compliant with FSSAI regulations', method: 'GC-MS / NABL partner lab', freq: 'Quarterly' },
                  { param: 'Colour, Aroma & Taste', std: 'Characteristic (100% natural)', method: 'Organoleptic / Sensory evaluation', freq: 'Every batch' },
                  { param: 'Foreign Matter', std: 'Absent', method: 'Visual evaluation / vibro-sieving', freq: 'Every batch' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: idx % 2 === 0 ? 'var(--color-bg)' : 'transparent' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-primary)' }}>{row.param}</td>
                    <td style={{ padding: '12px 16px' }}>{row.std}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--color-muted)' }}>{row.method}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* HYGIENE & FACILITY STANDARDS */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Facility Hygiene</span>
            <h2>Our Facility is Built for Food Safety</h2>
          </div>

          <div className="grid-3">
            {[
              'Epoxy food-grade non-slip flooring throughout',
              'Stainless Steel (SS 304) worktables — zero rust, zero contaminants',
              'Pest-controlled facility with monthly audits by registered agency',
              'Full CCTV coverage of all raw material, processing and packing lines',
              'Strict employee health guidelines: hairnets, clean coats and sanitized gloves',
              'Completely separated zones for raw materials, processing and finished stock'
            ].map((facility, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Building2 size={24} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <p style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 500 }}>{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FACTORY VISIT CTA */}
      <div className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ color: 'var(--color-white)', fontSize: '28px', marginBottom: '16px' }}>We Welcome Factory Visits from Serious B2B Buyers</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Verify our cleanliness, machinery, standards, and quality controls in person. Let us host you at our facility in Nashik.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white">
              Schedule Factory Visit
            </Link>
            <Link to="/bulk-enquiry?sample=true" className="btn btn-outline-white">
              Request a Sample
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            padding-left: 50px !important;
          }
          .timeline-content-wrapper {
            width: 100% !important;
          }
          .timeline-icon-node {
            left: 20px !important;
            transform: translateX(-50%) !important;
            width: 40px !important;
            height: 40px !important;
          }
          .timeline-icon-node svg {
            width: 20px !important;
            height: 20px !important;
          }
          .timeline-spacer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Process;
