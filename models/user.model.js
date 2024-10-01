const mongoose = require('mongoose');

const createSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 255,
    },
    email: {
        type: String,
        required: true,
        maxLength: 255,
    },
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 15,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users', createSchema);