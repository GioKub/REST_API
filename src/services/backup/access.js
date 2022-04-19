const mongoose = require('mongoose');
const Student = require('../../db/models/student');

const checkIfUserExists = async (nickname) => await Student.findOne({ nickname });

const getOneFromDB = async (nickname) => await Student.findOne({ nickname });

const getAllFromDB = async () => await Student.find();

const createOneInDB = async (reqBody, hashedPass, salt) => {
  const newStudent = new Student({ nickname, firtname, lastname } = reqBody);
  newStudent.password = hashedPass;
  newStudent.salt = salt;
  await newStudent.save();
  return newStudent;
};

const updateOneInDB = async (reqBody, hashedPass, salt) => {
  const newStudent = ({ nickname, firtname, lastname } = reqBody);
  newStudent.password = hashedPass;
  newStudent.salt = salt;
  await Student.updateOne({ nickname: reqBody.nickname }, { $set: newStudent });
  return newStudent;
};

const deleteOneFromDB = async (nickname) => await Student.deleteOne({ nickname });

module.exports = {
  checkIfUserExists,
  getOneFromDB,
  getAllFromDB,
  createOneInDB,
  updateOneInDB,
  deleteOneFromDB,
};
