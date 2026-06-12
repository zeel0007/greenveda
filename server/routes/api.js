const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Enquiry = require('../models/Enquiry');
const Contact = require('../models/Contact');
const SampleRequest = require('../models/SampleRequest');
const Admin = require('../models/Admin');

// Middleware to verify JWT token
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select('-password');
      if (!req.admin) {
        return res.status(401).json({ message: 'Not authorized, admin not found' });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// ------------------------------------------------------------------
// PUBLIC ROUTES (FORM SUBMISSIONS)
// ------------------------------------------------------------------

// Submit B2B Enquiry
router.post('/enquiries', async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.status(201).json({ success: true, message: 'Enquiry submitted successfully!', data: newEnquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Submit Contact Form
router.post('/contacts', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: 'Contact message sent successfully!', data: newContact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Submit Sample Request
router.post('/samples', async (req, res) => {
  try {
    const newSample = await SampleRequest.create(req.body);
    res.status(201).json({ success: true, message: 'Sample request submitted successfully!', data: newSample });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// ------------------------------------------------------------------
// ADMIN AUTH ROUTES
// ------------------------------------------------------------------

// Admin Login
router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (admin && (await admin.matchPassword(password))) {
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
      res.json({
        _id: admin._id,
        username: admin.username,
        token
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Admin Info (to check if token is valid)
router.get('/admin/me', protect, async (req, res) => {
  res.json(req.admin);
});

// ------------------------------------------------------------------
// PROTECTED ADMIN ROUTES (DASHBOARD LEADS)
// ------------------------------------------------------------------

// Get all Enquiries
router.get('/admin/enquiries', protect, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Enquiry Status
router.put('/admin/enquiries/:id', protect, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (enquiry) {
      enquiry.status = req.body.status || enquiry.status;
      const updatedEnquiry = await enquiry.save();
      res.json(updatedEnquiry);
    } else {
      res.status(404).json({ message: 'Enquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Enquiry
router.delete('/admin/enquiries/:id', protect, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (enquiry) {
      res.json({ message: 'Enquiry removed' });
    } else {
      res.status(404).json({ message: 'Enquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all Contacts
router.get('/admin/contacts', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Contact Status
router.put('/admin/contacts/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      contact.status = req.body.status || contact.status;
      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Contact
router.delete('/admin/contacts/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (contact) {
      res.json({ message: 'Contact removed' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all Sample Requests
router.get('/admin/samples', protect, async (req, res) => {
  try {
    const samples = await SampleRequest.find().sort({ createdAt: -1 });
    res.json(samples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Sample Request Status
router.put('/admin/samples/:id', protect, async (req, res) => {
  try {
    const sample = await SampleRequest.findById(req.params.id);
    if (sample) {
      sample.status = req.body.status || sample.status;
      sample.trackingNumber = req.body.trackingNumber || sample.trackingNumber;
      const updatedSample = await sample.save();
      res.json(updatedSample);
    } else {
      res.status(404).json({ message: 'Sample request not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Sample Request
router.delete('/admin/samples/:id', protect, async (req, res) => {
  try {
    const sample = await SampleRequest.findByIdAndDelete(req.params.id);
    if (sample) {
      res.json({ message: 'Sample request removed' });
    } else {
      res.status(404).json({ message: 'Sample request not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
