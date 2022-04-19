const userExistsService = require('../services/userExistsService');
const updateOneService = require('../services/updateOneService');
const getOneService = require('../services/getOneService');
const getAllService = require('../services/getAllService');
const createOneService = require('../services/createOneService');

// Getting one
const getOne = async (req, res) => {
  try {
    // checks if user exists with entered nickname
    const existingStudent = await getOneService(req.params.nick);
    if (existingStudent !== null) {
      res.status(200).json(existingStudent);
    } else {
      res.status(400).json({ message: "user with such nickname doesn't exist" });
    }
  } catch (err) {
    // 400 Bad Request
    res.status(400).json({ message: err.message });
  }
};

// Getting all
const getAll = async (req, res) => {
  try {
    const students = await getAllService();
    res.json(students);
  } catch (err) {
    // 500 Internal Server Error
    console.error(err.message);
    return res.json({ message: 'something went wrong' });
  }
};

// Creating one
const createOne = async (req, res) => {
  try {
    // checks if user exists with enter nickanme
    const existingStudent = await userExistsService(req.body.nickname);
    if (existingStudent !== null) {
      // 400 Bad request
      res.status(400).json('user with such nickname already exists');
    } else {
      const newStudent = await createOneService(req.body);
      res.status(200).json({ message: newStudent });
    }
  } catch (err) {
    // 400 Bad Request
    res.status(400).json({ message: err.message });
  }
};

// Updating One
const updateOne = async (req, res) => {
  try {
    // req.salt
    const newStudent = await updateOneService(req.body, req.salt);

    res.status(200).json({ message: newStudent });
  } catch (err) {
    // 400 Bad Request
    res.status(400).json({ message: err.message });
  }
};

// Deleting One
const deleteOne = async (req, res) => {
  try {
    await
    res.json({ message: 'Student Deleted' });
  } catch (err) {
    // 500 Internal Server Error
    console.error(err.message);
    return res.json({ message: 'something went wrong' });
  }
};

module.exports = {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne,
};
