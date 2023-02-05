var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchmema = new Schema({
    _userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "Usuario"
    },
    token: {
        type: String,
        required: true,
        ref: 'Usuario'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    },
});

module.exports = mongoose.model('Token', TokenSchmema);