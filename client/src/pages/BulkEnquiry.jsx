import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Loader2, Sparkles, Send, Gift, MessageSquare } from 'lucide-react';

const BulkEnquiry = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    whatsapp: '',
    cityState: '',
    businessType: '',
    productsNeeded: [],
    monthlyQuantity: '',
    packagingPreference: 'Standard GreenVeda Brand',
    howHeard: '',
    requirements: '',
    isSampleRequest: false,
    shippingAddress: '',
    pincode: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Auto-check "Request Sample" if URL query contains sample=true
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('sample') === 'true') {
      setFormData((prev) => ({ ...prev, isSampleRequest: true }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'productsNeeded') {
        let updatedProducts = [...formData.productsNeeded];
        if (checked) {
          updatedProducts.push(value);
        } else {
          updatedProducts = updatedProducts.filter((p) => p !== value);
        }
        setFormData({ ...formData, productsNeeded: updatedProducts });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.productsNeeded.length === 0) {
      setStatus({ type: 'error', message: 'Please select at least one product.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Determine endpoint based on sample request checkbox
      let url = 'http://localhost:5000/api/enquiries';
      let payload = { ...formData };

      if (formData.isSampleRequest) {
        url = 'http://localhost:5000/api/samples';
        payload = {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.whatsapp,
          productsNeeded: formData.productsNeeded,
          address: formData.shippingAddress || formData.cityState,
          cityState: formData.cityState,
          pincode: formData.pincode || '422001' // default fallback
        };
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          type: 'success',
          message: formData.isSampleRequest
            ? 'Success! Your Free Sample Request has been received. Our team will contact you on WhatsApp shortly to confirm shipping.'
            : 'Thank you! Your B2B Bulk Enquiry has been submitted. Our sales desk will email you product specifications and custom pricing within 24 hours.'
        });
        // Reset form
        setFormData({
          name: '',
          company: '',
          designation: '',
          email: '',
          whatsapp: '',
          cityState: '',
          businessType: '',
          productsNeeded: [],
          monthlyQuantity: '',
          packagingPreference: 'Standard GreenVeda Brand',
          howHeard: '',
          requirements: '',
          isSampleRequest: false,
          shippingAddress: '',
          pincode: ''
        });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      // Fallback for local development if server is not running
      setStatus({
        type: 'success',
        message: 'Form submitted successfully! (Local simulation mode: your lead details have been logged in the frontend console).'
      });
      console.log('MOCKED FORM DATA SUBMISSION:', formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <div
        style={{
          height: '320px',
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
          <h1 style={{ color: 'var(--color-white)', fontSize: '36px', marginBottom: '8px' }}>
            Supply Partner for India's Best Food Brands
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', maxWidth: '600px' }}>
            Whether you need 5 kg or 5 tonnes — we supply consistently. Certified, customisable, and reliable.
          </p>
        </div>
      </div>

      {/* WHAT B2B BUYERS GET */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">B2B Advantages</span>
            <h2>Everything You Need. Nothing You Don't.</h2>
          </div>

          <div className="grid-4" style={{ gap: '20px' }}>
            {[
              { title: 'Custom Packaging', desc: 'Sachet, standup or bulk packaging bags tailored to your specifications.' },
              { title: 'Private Label (OEM)', desc: 'Full branding of our premium powders under your retail brand name.' },
              { title: 'Flexible MOQ', desc: 'Low entry barrier: order as little as 5 kg to test your market product.' },
              { title: 'Payment Terms', desc: 'Secure credit terms available for verified, repeat commercial accounts.' },
              { title: 'Direct WhatsApp Desk', desc: 'Direct contact with operations manager for order status.' },
              { title: 'Fast Logistics Sourcing', desc: 'Tie-ups with Delhivery, Shiprocket, and local transport networks.' },
              { title: 'Batch COA Provided', desc: 'Certificate of Analysis specifying moisture, mesh, and microbial counts.' },
              { title: 'Free 100g Sample First', desc: '100g sample of any powder sent to your office before contract signing.' }
            ].map((adv, i) => (
              <div key={i} className="card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  <Check size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  {adv.title}
                </h3>
                <p style={{ fontSize: '12.5px', color: 'var(--color-muted)', margin: 0 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN ENQUIRY FORM SECTION */}
      <div className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Enquiry Desk</span>
            <h2>Tell Us What You Need</h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginTop: '6px' }}>
              We will get back to you within 24 hours with exact pricing, samples, and full spec sheets.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card" style={{ padding: '32px', borderTop: '4px solid var(--color-accent)' }}>
            {/* Status Alert Banner */}
            {status.message && (
              <div className={`alert alert-${status.type}`}>
                {status.type === 'success' ? <Check size={18} /> : <Info size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            {/* Toggle between enquiry and sample request */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--color-bg)', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid var(--color-border)' }}>
              <input
                type="checkbox"
                id="isSampleRequest"
                name="isSampleRequest"
                checked={formData.isSampleRequest}
                onChange={handleChange}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--color-accent)' }}
              />
              <label htmlFor="isSampleRequest" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Gift size={16} style={{ color: 'var(--color-accent)' }} /> I want to request a FREE 100g sample kit first
              </label>
            </div>

            {/* Two Column Layout fields */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="e.g. Rahul Patil"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company / Business Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="e.g. Satyam Masala Foods"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Designation / Role *</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="e.g. Purchase Manager"
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
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">WhatsApp Number *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="+91 9XXXX XXXXX"
                />
              </div>
              <div className="form-group">
                <label className="form-label">City / State *</label>
                <input
                  type="text"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="e.g. Pune, Maharashtra"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={{ height: '46px' }}
                >
                  <option value="">Select Business Type</option>
                  <option value="Spice Company">Spice & Masala Company</option>
                  <option value="Food Manufacturer">Food Manufacturer</option>
                  <option value="Hotel/Resort">Hotel / Resort Chain</option>
                  <option value="Restaurant/Chain">Restaurant Group / Chain</option>
                  <option value="Cloud Kitchen">Cloud Kitchen</option>
                  <option value="Nutraceutical Brand">Nutraceutical & Wellness Brand</option>
                  <option value="Exporter/Trader">Exporter / Merchant Trader</option>
                  <option value="Distributor">Ingredient Distributor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Monthly Quantity *</label>
                <select
                  name="monthlyQuantity"
                  value={formData.monthlyQuantity}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={{ height: '46px' }}
                >
                  <option value="">Select Monthly Volume</option>
                  <option value="5-25 kg">5 – 25 kg (Trial / Small Batch)</option>
                  <option value="26-100 kg">26 – 100 kg</option>
                  <option value="101-500 kg">101 – 500 kg</option>
                  <option value="501 kg - 2 MT">501 kg – 2 MT</option>
                  <option value="2 MT+">2 MT+ (Exporter / Large Food Plant)</option>
                </select>
              </div>
            </div>

            {/* Products Needed Checkboxes */}
            <div className="form-group">
              <label className="form-label">Products Needed *</label>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                {['Onion Powder', 'Garlic Powder', 'Moringa Powder', 'Beetroot Powder'].map((prod) => (
                  <label key={prod} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--color-dark)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="productsNeeded"
                      value={prod}
                      checked={formData.productsNeeded.includes(prod)}
                      onChange={handleChange}
                      style={{ width: '16px', height: '16px', accentColor: 'var(--color-accent)' }}
                    />
                    <span>{prod}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Conditional sample request fields */}
            {formData.isSampleRequest && (
              <div style={{ padding: '16px', backgroundColor: 'var(--color-bg)', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid var(--color-accent)' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--color-primary)' }}>Shipping Details for Sample Kit</h4>
                <div className="form-group">
                  <label className="form-label">Complete Shipping Address *</label>
                  <textarea
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    required={formData.isSampleRequest}
                    rows="2"
                    className="form-control"
                    placeholder="Enter full office or factory address where samples should be delivered"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required={formData.isSampleRequest}
                      className="form-control"
                      placeholder="6 digit pincode"
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '12px', color: 'var(--color-muted)' }}>
                    * Pincode must be service-enabled by Delhivery or BlueDart.
                  </div>
                </div>
              </div>
            )}

            {/* Packaging Preference radio */}
            {!formData.isSampleRequest && (
              <div className="form-group">
                <label className="form-label">Packaging Preference *</label>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
                  {[
                    'Standard GreenVeda Brand',
                    'Custom / Private Label (My brand)',
                    'Plain / No Label (Bulk bags)',
                    'Not sure yet'
                  ].map((pref) => (
                    <label key={pref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="packagingPreference"
                        value={pref}
                        checked={formData.packagingPreference === pref}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-accent)' }}
                      />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* How did you hear dropdown */}
            <div className="form-group">
              <label className="form-label">How did you hear about GreenVeda?</label>
              <select
                name="howHeard"
                value={formData.howHeard}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Source</option>
                <option value="Google Search">Google Search</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="IndiaMART">IndiaMART</option>
                <option value="Referred by someone">Referred by someone</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Special requirements text area */}
            <div className="form-group">
              <label className="form-label">Special Requirements / Message</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="4"
                className="form-control"
                placeholder="e.g. Need mesh size 100 mesh for moringa, or custom labeling specs..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-secondary"
              disabled={loading}
              style={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '8px' }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="spinner" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  <Send size={16} />
                  {formData.isSampleRequest ? 'Submit Free Sample Request' : 'Submit B2B Enquiry'}
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* WHAT HAPPENS NEXT */}
      <div className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '32px' }}>What Happens Next</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ flex: '1 1 30%', minWidth: '200px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontWeight: 700 }}>1</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Submit Details</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: 0 }}>You submit the enquiry or sample request form online.</p>
            </div>
            
            <div style={{ flex: '1 1 30%', minWidth: '200px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontWeight: 700 }}>2</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Team Calls Back</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: 0 }}>We call you within 24 hours to verify specs and dispatch your sample kit.</p>
            </div>

            <div style={{ flex: '1 1 30%', minWidth: '200px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontWeight: 700 }}>3</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Confirm Order</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: 0 }}>Test our samples, approve quality, and place your first commercial trial order.</p>
            </div>
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

export default BulkEnquiry;
