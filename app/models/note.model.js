const mongoose = require('mongoose');

const login = mongoose.Schema({
    user: String,
    pass: String
});

module.exports = mongoose.model('login', login);