const mongoose = require('mongoose');

const employee = new mongoose.Schema({
  name: String,
  lastname: String,
  email: { type: String, unique: true, required: true },
  tel: String,
  address: String,
  skills: { type: String, required: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
});

module.exports = mongoose.model('employee', employee);
