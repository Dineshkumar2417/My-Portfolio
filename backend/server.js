const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project'); 
const app = express();

app.use(cors());
app.use(express.json());

// Ensure your .env has MONGO_URI=mongodb://127.0.0.1:27017/portfolio
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Success! Connected to MongoDB"))
    .catch(err => console.log("Database connection failed:", err));

// Only the GET route remains
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ _id: -1 }); 
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});