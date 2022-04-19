const express = require('express');
const basicAuth = require('../middleware/basicAuth');
const pagination = require('../middleware/pagination')
const Student = require('../db/models/student')

const router = express.Router();

const {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require('../controllers/students-controllers');

router.get('/', getAll);

router.get('/:nick', pagination(Student), getOne);

router.post('/', createOne);

router.put('/:nick', basicAuth, updateOne);

router.delete('/:nick', deleteOne);

module.exports = router;
