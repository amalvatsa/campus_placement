require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import connectDB function
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
