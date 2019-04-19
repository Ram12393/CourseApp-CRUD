const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    current_education: {
        type: String,
        required: true
    },
    course_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
        // [

        // {type: mongoose.Schema.Types.ObjectId,
        // ref: 'Course'}
        // ],
    },
    address: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Student', studentSchema);