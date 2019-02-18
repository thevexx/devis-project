const mongoose = require('mongoose');

const project = new mongoose.Schema({
  serviceType: { type: String, required: true },
  type: { type: String, required: true },
  dateLimit: String,
  dateCreation: { type: Date, default: Date.now },
  description: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'client' },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }]
});

module.exports = mongoose.model('project', project);
