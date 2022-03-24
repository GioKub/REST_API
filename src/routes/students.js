const express = require('express');
const basicAuth = require('../middleware/basicAuth');

const router = express.Router();

const {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require('../controllers/students');

router.get('/', getAll);

router.get('/:nick', getOne);

router.post('/', createOne);

router.put('/:nick', basicAuth, updateOne);

router.delete('/:nick', deleteOne);

module.exports = router;
