const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);