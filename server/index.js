const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Admin = require('./models/Admin');
const apiRoutes = require('./routes/api');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Simple Health Check
app.get('/', (req, res) => {
  res.send('VegPure India API is running...');
});

// Seed default admin user if not exists
const seedAdmin = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const defaultAdmin = new Admin({
        username: 'admin',
        password: process.env.ADMIN_PASSWORD || 'admin123'
      });
      await defaultAdmin.save();
      console.log('Default admin seeded successfully. Username: admin');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};
seedAdmin();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
