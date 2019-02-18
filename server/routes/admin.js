const router = require('express').Router();
const devis = require('../models/devis');
const client = require('../models/client');
const project = require('../models/project');
const employee = require('../models/employee');

router.get('/client/:id', async (req, res) => {
  if (req.params.id === 'all') {
    const clientResult = await client.find().exec();
    res.send({ msg: 'OK', data: clientResult });
  } else {
    const clientResult = await client.findOne({ _id: req.params.id }).exec();
    res.send({ msg: 'OK', data: clientResult });
  }
})

router.post('/client/update/:id', async (req, res) => {
  const clientResult = await client.updateOne({ _id: req.params.id }, { $set: req.body }).exec();
  res.send({ msg: 'OK', data: clientResult });
});

router.get('/project/:id', async (req, res) => {
  if (req.params.id === 'all') {
    const projectResult = await project.find().exec();
    res.send({ msg: 'OK', data: projectResult });
  } else {
    const projectResult = await project.findOne({ _id: req.params.id }).exec();
    res.send({ msg: 'OK', data: projectResult });
  }
})

router.post('/project/update/:id', async (req, res) => {
  const projectResult = await project.updateOne({ _id: req.params.id }, { $set: req.body }).exec();
  res.send({ msg: 'OK', data: projectResult });
});

router.get('/employee/:id', async (req, res) => {
  if (req.params.id === 'all') {
    const employeeResult = await employee.find().exec();
    res.send({ msg: 'OK', data: employeeResult });
  } else {
    const employeeResult = await employee.findOne({ _id: req.params.id }).exec();
    res.send({ msg: 'OK', data: employeeResult });
  }
})

router.post('/employee', async (req, res) => {
  const employeeResult = await employee.create(req.body).catch(err => err);
  res.send({ msg: 'OK', data: employeeResult });
});

router.post('/employee/update/:id', async (req, res) => {
  const employeeResult = await employee.updateOne({ _id: req.params.id }, { $set: req.body }).exec();
  res.send({ msg: 'OK', data: employeeResult });
});

router.post('/assign/:devisId', async (req, res) => {
  let devisResult = await devis.findOne({ _id: req.params.id }).exec();
  devisResult['employees'] = req.body.employees;
  devisResult._id = '';
  const projectResult = await project.create(devisResult).catch(err => err);
  res.send(projectResult);
})

module.exports = router;
