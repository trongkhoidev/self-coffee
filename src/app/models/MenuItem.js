const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuItem = new Schema({
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    price: { type: Number, required: true },
    slug: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MenuItem', MenuItem);
