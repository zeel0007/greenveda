import React, { useState, useEffect } from 'react';
import { LogOut, RefreshCw, Trash2, CheckCircle, Clock, Archive, Download, Mail, Phone, ExternalLink, MapPin } from 'lucide-react';

const AdminDashboard = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('enquiries');
  const [enquiries, setEnquiries] = useState([]);
  const [samples, setSamples] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await fetch('http://localhost:5001/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
      } else {
        setLoginError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      // Mock login for frontend trial if server is not active
      if (username === 'admin') {
        const mockToken = 'mock-jwt-token-12345';
        localStorage.setItem('adminToken', mockToken);
        setToken(mockToken);
      } else {
        setLoginError('Server not running. Try username "admin" (any password) to enter demo dashboard.');
      }
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setEnquiries([]);
    setSamples([]);
    setContacts([]);
  };

  // Fetch Data
  const fetchData = async () => {
    if (!token) return;
    setLoading(true);
    setError('');
    try {
      const headers = { 'Authorization': `Bearer ${token}` };

      const [enqRes, sampRes, contRes] = await Promise.all([
        fetch('http://localhost:5001/api/admin/enquiries', { headers }),
        fetch('http://localhost:5001/api/admin/samples', { headers }),
        fetch('http://localhost:5001/api/admin/contacts', { headers })
      ]);

      if (enqRes.status === 401 || sampRes.status === 401 || contRes.status === 401) {
        handleLogout();
        return;
      }

      const enqData = await enqRes.json();
      const sampData = await sampRes.json();
      const contData = await contRes.json();

      setEnquiries(Array.isArray(enqData) ? enqData : []);
      setSamples(Array.isArray(sampData) ? sampData : []);
      setContacts(Array.isArray(contData) ? contData : []);
    } catch (err) {
      console.error(err);
      // Load mock B2B data for visual demonstration if server is offline
      loadMockData();
    } finally {
      setLoading(false);
    }
  };

  // Mock data loader for fallback
  const loadMockData = () => {
    setEnquiries([
      { _id: '1', name: 'Rajesh Sharma', company: 'Shree Masala Foods', designation: 'Purchasing Head', email: 'rajesh@shreemasala.com', whatsapp: '9823012345', cityState: 'Pune, Maharashtra', businessType: 'Spice Company', productsNeeded: ['Onion Powder', 'Garlic Powder'], monthlyQuantity: '500 kg', packagingPreference: 'Plain / No Label', requirements: 'Need mesh size 80 mesh, dry vacuum bags.', status: 'Pending', createdAt: new Date(Date.now() - 3600000 * 2).toISOString() },
      { _id: '2', name: 'Priya Menon', company: 'SpiceBox Cloud Kitchen', designation: 'Founder', email: 'priya@spicebox.in', whatsapp: '9123456789', cityState: 'Bangalore, Karnataka', businessType: 'Cloud Kitchen', productsNeeded: ['Garlic Powder', 'Beetroot Powder'], monthlyQuantity: '25 kg', packagingPreference: 'Standard GreenVeda Brand', requirements: 'Weekly delivery capability check.', status: 'Contacted', createdAt: new Date(Date.now() - 3600000 * 18).toISOString() }
    ]);
    setSamples([
      { _id: '1', name: 'Amit Patel', company: 'Patel Exporters Ltd', email: 'amit@patelexports.com', phone: '9812345678', productsNeeded: ['Moringa Powder'], address: 'Plot 10, GIDC Industrial Estate', cityState: 'Surat, Gujarat', pincode: '395003', status: 'Sample Sent', trackingNumber: 'AWB1234567', createdAt: new Date(Date.now() - 3600000 * 5).toISOString() }
    ]);
    setContacts([
      { _id: '1', name: 'Sanjay Dutt', email: 'sanjay@gmail.com', phone: '9988776655', subject: 'Factory Visit', message: 'Hi, we are interested in auditing your Nashik plant next Tuesday for a high-volume contract of moringa.', status: 'Pending', createdAt: new Date(Date.now() - 3600000 * 24).toISOString() }
    ]);
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  // Update Status
  const handleUpdateStatus = async (type, id, newStatus, trackingNo = '') => {
    let endpointType = type === 'enquiries' ? 'enquiries' : type === 'samples' ? 'samples' : 'contacts';
    try {
      const response = await fetch(`http://localhost:5001/api/admin/${endpointType}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus, trackingNumber: trackingNo })
      });
      if (response.ok) {
        fetchData();
      }
    } catch (err) {
      // Mock update local state
      if (type === 'enquiries') {
        setEnquiries(enquiries.map(e => e._id === id ? { ...e, status: newStatus } : e));
      } else if (type === 'samples') {
        setSamples(samples.map(s => s._id === id ? { ...s, status: newStatus, trackingNumber: trackingNo || s.trackingNumber } : s));
      } else {
        setContacts(contacts.map(c => c._id === id ? { ...c, status: newStatus } : c));
      }
    }
  };

  // Delete lead
  const handleDelete = async (type, id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;
    let endpointType = type === 'enquiries' ? 'enquiries' : type === 'samples' ? 'samples' : 'contacts';
    try {
      const response = await fetch(`http://localhost:5001/api/admin/${endpointType}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        fetchData();
      }
    } catch (err) {
      // Mock delete local state
      if (type === 'enquiries') {
        setEnquiries(enquiries.filter(e => e._id !== id));
      } else if (type === 'samples') {
        setSamples(samples.filter(s => s._id !== id));
      } else {
        setContacts(contacts.filter(c => c._id !== id));
      }
    }
  };

  // Export to CSV
  const handleExportCSV = (type) => {
    let dataToExport = [];
    let headers = [];

    if (type === 'enquiries') {
      dataToExport = enquiries;
      headers = ['Date', 'Name', 'Company', 'Designation', 'Email', 'WhatsApp', 'City/State', 'Business Type', 'Products', 'Monthly Qty', 'Packaging Pref', 'Status', 'Requirements'];
    } else if (type === 'samples') {
      dataToExport = samples;
      headers = ['Date', 'Name', 'Company', 'Email', 'Phone', 'Products', 'Address', 'City/State', 'Pincode', 'Status', 'Tracking No'];
    } else {
      dataToExport = contacts;
      headers = ['Date', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Status'];
    }

    const csvContent = [
      headers.join(','),
      ...dataToExport.map(item => {
        if (type === 'enquiries') {
          return [
            new Date(item.createdAt).toLocaleDateString(),
            `"${item.name}"`,
            `"${item.company}"`,
            `"${item.designation}"`,
            `"${item.email}"`,
            `"${item.whatsapp}"`,
            `"${item.cityState}"`,
            `"${item.businessType}"`,
            `"${item.productsNeeded.join('; ')}"`,
            `"${item.monthlyQuantity}"`,
            `"${item.packagingPreference}"`,
            `"${item.status}"`,
            `"${item.requirements.replace(/"/g, '""')}"`
          ].join(',');
        } else if (type === 'samples') {
          return [
            new Date(item.createdAt).toLocaleDateString(),
            `"${item.name}"`,
            `"${item.company}"`,
            `"${item.email}"`,
            `"${item.phone}"`,
            `"${item.productsNeeded.join('; ')}"`,
            `"${item.address.replace(/"/g, '""')}"`,
            `"${item.cityState}"`,
            `"${item.pincode}"`,
            `"${item.status}"`,
            `"${item.trackingNumber || ''}"`
          ].join(',');
        } else {
          return [
            new Date(item.createdAt).toLocaleDateString(),
            `"${item.name}"`,
            `"${item.email}"`,
            `"${item.phone}"`,
            `"${item.subject}"`,
            `"${item.message.replace(/"/g, '""')}"`,
            `"${item.status}"`
          ].join(',');
        }
      })
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `greenveda_${type}_leads.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Status Badge UI helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span style={{ backgroundColor: '#ffeeb5', color: '#856404', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> Pending</span>;
      case 'Contacted':
        return <span style={{ backgroundColor: '#cce5ff', color: '#004085', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><ExternalLink size={12} /> Contacted</span>;
      case 'Sample Sent':
        return <span style={{ backgroundColor: '#d4edda', color: '#155724', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><CheckCircle size={12} /> Sample Sent</span>;
      case 'Completed':
        return <span style={{ backgroundColor: '#cce8cc', color: '#105210', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><CheckCircle size={12} /> Completed</span>;
      default:
        return <span style={{ backgroundColor: '#e2e3e5', color: '#383d41', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px' }}>{status}</span>;
    }
  };

  if (!token) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg)', padding: '24px' }}>
        <form onSubmit={handleLogin} className="card" style={{ maxWidth: '400px', width: '100%', padding: '32px', borderTop: '4px solid var(--color-primary)' }}>
          <h2 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '8px', color: 'var(--color-primary)' }}>GreenVeda Admin Console</h2>
          <p style={{ fontSize: '13px', color: 'var(--color-muted)', textAlign: 'center', marginBottom: '24px' }}>Sign in to access B2B enquiries & sample requests.</p>
          
          {loginError && (
            <div className="alert alert-error" style={{ marginBottom: '16px', fontSize: '12.5px' }}>
              <Info size={16} />
              <span>{loginError}</span>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="admin"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-secondary" style={{ width: '100%', borderRadius: '6px', height: '44px' }}>
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '90vh', padding: '40px 0' }}>
      <div className="container">
        {/* Dashboard Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '32px', backgroundColor: 'var(--color-white)', padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
          <div>
            <h1 style={{ fontSize: '24px', color: 'var(--color-primary)' }}>GreenVeda Admin Console</h1>
            <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '2px' }}>Track, manage and download B2B buyer leads.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={fetchData} className="btn btn-outline-green" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '6px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '6px', display: 'flex', gap: '6px', alignItems: 'center', backgroundColor: '#dc2626' }}>
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </div>

        {/* Tabs and Export Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', backgroundColor: 'rgba(0,0,0,0.05)', padding: '4px', borderRadius: '8px' }}>
            {['enquiries', 'samples', 'contacts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: activeTab === tab ? 'var(--color-white)' : 'transparent',
                  color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-muted)',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: activeTab === tab ? 'var(--shadow-sm)' : 'none',
                  textTransform: 'capitalize'
                }}
              >
                {tab} ({tab === 'enquiries' ? enquiries.length : tab === 'samples' ? samples.length : contacts.length})
              </button>
            ))}
          </div>

          {/* Export Action */}
          <button
            onClick={() => handleExportCSV(activeTab)}
            className="btn btn-outline-green"
            style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '6px', display: 'flex', gap: '6px', alignItems: 'center' }}
          >
            <Download size={14} /> Export {activeTab} CSV
          </button>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}>
            <Loader2 size={32} className="spinner" style={{ color: 'var(--color-accent)' }} />
          </div>
        ) : (
          <div style={{ backgroundColor: 'var(--color-white)', borderRadius: '12px', border: '1px solid var(--color-border)', overflowX: 'auto', padding: '10px' }}>
            {/* ENQUIRIES TAB */}
            {activeTab === 'enquiries' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '800px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-primary)', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Lead Details</th>
                    <th style={{ padding: '12px' }}>Products & Volume</th>
                    <th style={{ padding: '12px' }}>Requirements</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.length === 0 ? (
                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--color-muted)' }}>No bulk enquiries received yet.</td></tr>
                  ) : (
                    enquiries.map((enq) => (
                      <tr key={enq._id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '12px', color: 'var(--color-muted)' }}>{new Date(enq.createdAt).toLocaleDateString()}</td>
                        <td style={{ padding: '12px' }}>
                          <strong style={{ display: 'block', color: 'var(--color-primary)' }}>{enq.name}</strong>
                          <span style={{ fontSize: '12px', color: 'var(--color-dark)', fontWeight: 500 }}>{enq.company} ({enq.designation})</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--color-muted)', marginTop: '2px' }}><MapPin size={11} /> {enq.cityState} | {enq.businessType}</span>
                          <div style={{ display: 'flex', gap: '8px', fontSize: '11px', marginTop: '4px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Phone size={10} /> {enq.whatsapp}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Mail size={10} /> {enq.email}</span>
                          </div>
                        </td>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {enq.productsNeeded.map((p) => (
                              <span key={p} style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>{p}</span>
                            ))}
                          </div>
                          <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', marginTop: '6px' }}>Volume: {enq.monthlyQuantity}</span>
                          <span style={{ display: 'block', fontSize: '11px', color: 'var(--color-muted)' }}>Pack: {enq.packagingPreference}</span>
                        </td>
                        <td style={{ padding: '12px', maxWidth: '250px', whiteSpace: 'normal', color: 'var(--color-muted)', fontSize: '12.5px' }}>{enq.requirements || 'None'}</td>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {getStatusBadge(enq.status)}
                            <select
                              value={enq.status}
                              onChange={(e) => handleUpdateStatus('enquiries', enq._id, e.target.value)}
                              style={{ fontSize: '11.5px', padding: '2px', borderRadius: '4px', border: '1px solid var(--color-border)' }}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Completed">Completed</option>
                              <option value="Junk">Junk</option>
                            </select>
                          </div>
                        </td>
                        <td style={{ padding: '12px', textAlign: 'center' }}>
                          <button onClick={() => handleDelete('enquiries', enq._id)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '4px' }}>
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {/* SAMPLES TAB */}
            {activeTab === 'samples' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '800px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-primary)', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Recipient Info</th>
                    <th style={{ padding: '12px' }}>Sample Products</th>
                    <th style={{ padding: '12px' }}>Shipping Address</th>
                    <th style={{ padding: '12px' }}>Status / Tracking</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {samples.length === 0 ? (
                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--color-muted)' }}>No sample requests received yet.</td></tr>
                  ) : (
                    samples.map((samp) => (
                      <tr key={samp._id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '12px', color: 'var(--color-muted)' }}>{new Date(samp.createdAt).toLocaleDateString()}</td>
                        <td style={{ padding: '12px' }}>
                          <strong style={{ display: 'block', color: 'var(--color-primary)' }}>{samp.name}</strong>
                          <span style={{ fontSize: '12px', color: 'var(--color-dark)' }}>{samp.company}</span>
                          <div style={{ display: 'flex', gap: '8px', fontSize: '11px', marginTop: '4px' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Phone size={11} /> {samp.phone}</span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Mail size={11} /> {samp.email}</span>
                          </div>
                        </td>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {samp.productsNeeded.map((p) => (
                              <span key={p} style={{ backgroundColor: 'var(--color-mint)', color: 'var(--color-primary)', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>{p}</span>
                            ))}
                          </div>
                        </td>
                        <td style={{ padding: '12px', maxWidth: '200px', whiteSpace: 'normal', fontSize: '12.5px' }}>
                          {samp.address}, {samp.cityState} - <span style={{ fontWeight: 600 }}>{samp.pincode}</span>
                        </td>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {getStatusBadge(samp.status)}
                            <select
                              value={samp.status}
                              onChange={(e) => handleUpdateStatus('samples', samp._id, e.target.value, samp.trackingNumber)}
                              style={{ fontSize: '11.5px', padding: '2px', borderRadius: '4px', border: '1px solid var(--color-border)' }}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Sample Sent">Sample Sent</option>
                              <option value="Completed">Completed</option>
                              <option value="Junk">Junk</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Tracking No."
                              value={samp.trackingNumber || ''}
                              onChange={(e) => handleUpdateStatus('samples', samp._id, samp.status, e.target.value)}
                              style={{ fontSize: '11px', padding: '2px 4px', border: '1px solid var(--color-border)', borderRadius: '4px', width: '120px' }}
                            />
                          </div>
                        </td>
                        <td style={{ padding: '12px', textAlign: 'center' }}>
                          <button onClick={() => handleDelete('samples', samp._id)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '4px' }}>
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {/* CONTACTS TAB */}
            {activeTab === 'contacts' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', minWidth: '800px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-primary)', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Sender details</th>
                    <th style={{ padding: '12px' }}>Subject</th>
                    <th style={{ padding: '12px' }}>Message</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr><td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--color-muted)' }}>No contact queries received yet.</td></tr>
                  ) : (
                    contacts.map((cont) => (
                      <tr key={cont._id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '12px', color: 'var(--color-muted)' }}>{new Date(cont.createdAt).toLocaleDateString()}</td>
                        <td style={{ padding: '12px' }}>
                          <strong style={{ display: 'block', color: 'var(--color-primary)' }}>{cont.name}</strong>
                          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', color: 'var(--color-muted)', marginTop: '2px' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Phone size={11} /> {cont.phone}</span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Mail size={11} /> {cont.email}</span>
                          </div>
                        </td>
                        <td style={{ padding: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>{cont.subject}</td>
                        <td style={{ padding: '12px', maxWidth: '300px', whiteSpace: 'normal', color: 'var(--color-dark)', fontSize: '12.5px' }}>{cont.message}</td>
                        <td style={{ padding: '12px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {getStatusBadge(cont.status)}
                            <select
                              value={cont.status}
                              onChange={(e) => handleUpdateStatus('contacts', cont._id, e.target.value)}
                              style={{ fontSize: '11.5px', padding: '2px', borderRadius: '4px', border: '1px solid var(--color-border)' }}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </div>
                        </td>
                        <td style={{ padding: '12px', textAlign: 'center' }}>
                          <button onClick={() => handleDelete('contacts', cont._id)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '4px' }}>
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        )}
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

export default AdminDashboard;
