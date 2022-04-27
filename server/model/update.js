const mongoose = require('mongoose')

const updateSchema = new mongoose.Schema({
    noti: {
        type: String,
        required: true
    },
})
module.exports = Update = mongoose.model('update', updateSchema)