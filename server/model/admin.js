
const mongose = require('mongoose');
const adminSchema = new mongose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    username: {
        type: String
    }
})
module.exports = Admin = mongose.model('admin', adminSchema)