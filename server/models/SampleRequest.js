const mongoose = require('mongoose');

const SampleRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    productsNeeded: [{ type: String }],
    address: { type: String, required: true },
    cityState: { type: String, required: true },
    pincode: { type: String, required: true },
    status: { type: String, enum: ['Requested', 'Approved', 'Shipped', 'Delivered', 'Cancelled'], default: 'Requested' },
    trackingNumber: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('SampleRequest', SampleRequestSchema);
