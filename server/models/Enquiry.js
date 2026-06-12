const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    cityState: { type: String, required: true },
    businessType: { type: String, required: true },
    productsNeeded: [{ type: String }],
    monthlyQuantity: { type: String, required: true },
    packagingPreference: { type: String, required: true },
    howHeard: { type: String },
    requirements: { type: String },
    status: { type: String, enum: ['New', 'Contacted', 'Sample Sent', 'Closed'], default: 'New' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', EnquirySchema);
