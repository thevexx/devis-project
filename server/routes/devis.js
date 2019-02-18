const router = require('express').Router();
const devis = require('../models/devis');
const client = require('../models/client');

router.post('/update/:id', async (req, res) => {
  const devisResult = await devis.updateOne({ _id: req.params.id }, { $set: req.body }).exec();
  res.send({ msg: 'OK', data: devisResult });
});

router.post('/', async (req, res) => {
  const clientResult = await client.create(req.body).catch(err => err);
  if (clientResult.errmsg) {
    return res.send({ msg: 'error', data: clientResult })
  }
  req.body.client = clientResult._id;
  const devisResult = await devis.create(req.body).catch(err => err);
  res.send({ msg: 'OK', data: devisResult });
});

router.get('/:id', async (req, res) => {
  if (req.params.id === 'all') {
    const devisResult = await devis.find().populate({path: 'client'}).exec();
    res.send({ msg: 'OK', data: devisResult });
  } else {
    const devisResult = await devis.findOne({ _id: req.params.id }).populate({path: 'client'}).exec();
    res.send({ msg: 'OK', data: devisResult });
  }
})



module.exports = router;
