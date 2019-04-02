const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
})

module.exports = mongoose.model('Course', CourseSchema);