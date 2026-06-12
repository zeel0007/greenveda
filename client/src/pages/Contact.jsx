import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Clock, MapPin, Send, Loader2, Check, Info, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Product Enquiry',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  
  // Accordion State
  const [faqOpen, setFaqOpen] = useState(Array(8).fill(false));

  const toggleFaq = (idx) => {
    const updated = [...faqOpen];
    updated[idx] = !updated[idx];
    setFaqOpen(updated);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5001/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your contact message has been sent. We will email or call you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Product Enquiry',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      // Fallback for local development
      setStatus({
        type: 'success',
        message: 'Message sent successfully! (Local simulation mode: your details have been logged in the console).'
      });
      console.log('MOCKED CONTACT SUBMISSION:', formData);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    { q: 'What is your minimum order quantity (MOQ) for B2B?', a: 'Our minimum order quantity is 5 kg per product for B2B clients. For first-time buyers, we recommend starting with a free 100g sample kit before placing a commercial trial order.' },
    { q: 'Do you provide samples before bulk orders?', a: 'Yes — we send a free sample kit (100g each of our flagship powders) to verified B2B buyers. Just fill in our B2B Enquiry form or WhatsApp us directly with your company details.' },
    { q: 'Are all GreenVeda products FSSAI certified?', a: 'Yes. All GreenVeda products are manufactured in our FSSAI state-licensed facility (Lic. No. 11525012345678). Our certification is printed on all labels and spec sheets.' },
    { q: 'Do you offer private label / custom packaging?', a: 'Yes. We offer OEM private label manufacturing — we produce the powder and package it in sachets or pouches under your retail brand name. Minimum order for private label is typically 25–50 kg per product.' },
    { q: 'Do you export outside India?', a: 'Yes. We are APEDA registered and currently supply buyers in the UAE. We can export to any country with the required food safety clearances.' },
    { q: 'What is the shelf life of your products?', a: 'All GreenVeda products have a shelf life of 18–24 months in original sealed packaging, when stored in cool, dry conditions below 25°C.' },
    { q: 'Can we visit your factory in Nashik?', a: 'Absolutely. We welcome factory visits from serious commercial buyers. Our facility is in Plot 42, MIDC Ambad, Nashik, Maharashtra. Contact us to schedule a convenient time.' },
    { q: 'Do you provide Certificate of Analysis (COA) reports?', a: 'Yes. A batch-wise COA including moisture content, colour check, and sensory evaluation is provided with every shipment. External NABL lab test reports are available on request.' }
  ];

  return (
    <div>
      {/* HERO */}
      <div
        style={{
          height: '260px',
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
          <h1 style={{ color: 'var(--color-white)', fontSize: '36px', marginBottom: '8px' }}>Get in Touch</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', maxWidth: '600px' }}>
            We respond to every message within 24 hours. WhatsApp is the fastest way to reach our sales desk.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION (2 Columns) */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid-2">
            {/* Left Column: Details */}
            <div>
              <span className="section-tag">Contact Info</span>
              <h2 style={{ marginBottom: '30px' }}>Reach Our Sales Office</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                    <MessageSquare size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600 }}>WhatsApp Us</h3>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--color-accent)', fontWeight: 500 }}>
                      +91 98765 43210 (Fastest Response)
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                    <Phone size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Call Sales Desk</h3>
                    <a href="tel:+919876543210" style={{ fontSize: '14px', color: 'var(--color-primary)' }}>
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                    <Mail size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Email Address</h3>
                    <a href="mailto:info@greenveda.in" style={{ fontSize: '14px', color: 'var(--color-primary)' }}>
                      info@greenveda.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Factory Address</h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', margin: 0 }}>
                      Plot No. 42, MIDC Ambad, Nashik, Maharashtra, India - 422010
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                    <Clock size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Business Hours</h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', margin: 0 }}>
                      Mon–Sat: 9:00 AM – 6:00 PM IST (WhatsApp is open on Sundays)
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', gap: '8px', padding: '14px', borderRadius: '8px', backgroundColor: '#25D366', borderColor: '#25D366' }}
              >
                <MessageSquare size={18} /> WhatsApp Us for Fast Response
              </a>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="card" style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Send a Message</h3>
                
                {status.message && (
                  <div className={`alert alert-${status.type}`}>
                    {status.type === 'success' ? <Check size={18} /> : <Info size={18} />}
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="e.g. Anand Sen"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="name@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="+91 9XXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{ height: '46px' }}
                  >
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Bulk / B2B Order">Bulk / B2B Order</option>
                    <option value="Export Enquiry">Export Enquiry</option>
                    <option value="Sample Request">Sample Request</option>
                    <option value="Factory Visit">Factory Visit</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-control"
                    placeholder="Write details of your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={loading}
                  style={{ width: '100%', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '8px' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="spinner" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* GOOGLE MAPS SATELLITE VIEW EMBED PLACEHOLDER */}
      <div style={{ width: '100%', height: '400px', backgroundColor: '#eaeaea', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(15, 61, 26, 0.05)', color: 'var(--color-primary)' }}>
          <MapPin size={32} style={{ color: 'var(--color-accent)', marginBottom: '8px' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 600 }}>GreenVeda Factory Location Map</h3>
          <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '4px' }}>Plot 42, MIDC Ambad, Nashik, Maharashtra, India</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-green"
            style={{ marginTop: '16px', fontSize: '12px', padding: '6px 16px', borderRadius: '15px' }}
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div style={{ backgroundColor: 'var(--color-white)', borderRadius: '12px', padding: '16px 24px', border: '1px solid var(--color-border)' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-accordion">
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  {faqOpen[idx] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                <div className={`faq-answer ${faqOpen[idx] ? 'open' : ''}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .spinner {
          animation: spin-anim 1s linear infinite;
        }
        @keyframes spin-anim {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
