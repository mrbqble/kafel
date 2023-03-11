const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {type: String},
    password: {type: String},
});

module.exports = model('User', User);