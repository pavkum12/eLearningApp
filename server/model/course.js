const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    category: {
        type: String
    },
    fileUrl: {
        type: String
    },
    imageUrl: {
        type: String
    }
})
module.exports = Course = mongoose.model('course', courseSchema)