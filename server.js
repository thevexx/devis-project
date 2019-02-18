const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/devisDB')
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const auth = require('./server/routes/auth')
app.use('/auth', auth)

const devis = require('./server/routes/devis')
app.use('/devis', devis)

const admin = require('./server/routes/admin')
app.use('/admin', admin)

app.listen(3000, () => {
  console.log('server is running on port 3000');
})
