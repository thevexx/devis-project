const mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs')

const user = new mongoose.Schema({
  name: String,
  lastname: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

user.methods.comparePassword = function (candidatePassword, cb) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

user.pre('save', function () {
  console.log(this.password);
  this.password = bcrypt.hashSync(this.password);
  console.log(this.password);
});


module.exports = mongoose.model('user', user);
