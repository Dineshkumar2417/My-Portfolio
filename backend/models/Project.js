const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [String],
    link: { type: String, default: "#" },
    image: { type: String, default: "https://via.placeholder.com/400x200" } // New field
});

module.exports = mongoose.model('Project', ProjectSchema);