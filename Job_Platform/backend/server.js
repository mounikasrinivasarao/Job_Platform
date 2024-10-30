// server.js (Backend)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/resumeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define Schema and Model
const resumeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  address : String,
  Skill : String,
  // Add other fields as needed
});

const Resume = mongoose.model('Resume', resumeSchema);

// Define Routes
app.post('/api/resume', async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).send(resume);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add other routes for CRUD operations
// For example:
// app.get('/api/resume', async (req, res) => {
//   try {
//     const resumes = await Resume.find();
//     res.status(200).send(resumes);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
