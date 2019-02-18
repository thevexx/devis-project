const mongoose = require('mongoose');

const devis = new mongoose.Schema({
  serviceType: { type: String, required: true },
  type: { type: String, required: true },
  dateCreation: { type: Date, default: Date.now },
  dateLimit: Date,
  description: String,
  isValidCompany: {type: Boolean, default: false},
  isConfirmed: {type: Boolean, default: false},
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
});

module.exports = mongoose.model('devis', devis);
