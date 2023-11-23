// Import required modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// Initialize Express app
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require("path")
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'..','client','dist')));
// Define a basic route
app.use('/api/user', userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'..','client', "dist", "index.html"));
});
// Start the server
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
