const express = require('express');
const router = express.Router();
const Flat = require('../models/flatsModel');
const authenticate = require('./authenticate');

router.post('', authenticate, async (req, res) => {
  req.body.userID = req.user._id;
  console.log('userID', req.user._id);
  try {
    const flat = await Flat.create(req.body);
    res.status(201).send({ flat });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('', async (req, res) => {
  const page = +req.query.page || 1;

  const size = +req.query.limit || 10;

  const offset = (page - 1) * size;

  const flat = await Flat.find().skip(offset).limit(size).lean().exec();
  const totalPages = Math.ceil(
    (await Flat.find().countDocuments().lean().exec()) / size
  );
  return res.status(200).send({ flat, totalPages, page });
});

router.get('/flat', async (req, res) => {
  try {
    const flat = await Flat.find().lean().exec();
    res.status(201).send({ flat });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/flat/:id', async (req, res) => {
  try {
    
    var id = req.params.id;
    const flat = await Flat.findOne({ _id: id }).lean().exec();
    res.status(201).send({ flat });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
