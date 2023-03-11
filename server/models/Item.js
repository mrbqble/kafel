const { Schema, model } = require('mongoose');

const Item = new Schema({
    name: {type: String},
    size: {type: String},
    thick: {type: Number},
    cost: {type: Number},
    producer: {type: String},
    img: {type: String}
});

module.exports = model('Item', Item);