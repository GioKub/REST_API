const Studet = require('../db/models/student')
const crypto = require('../utils/crypto');


class UserService {
    constructor() {}

    createOne = async  (reqBody) => {
        const { hashedPass, salt } = await crypto.hashPassword(reqBody.password);
        return createOneInDB(reqBody, hashedPass, salt);
      };

    deleteOne = async (nickname) => await deleteOneFromDB(nickname);

    getAll = async () => await Student.find();;

    getOne = async (nickname) => {
        const newStudent = ({ nickname, firtname, lastname } = reqBody);
        newStudent.password = hashedPass;
        newStudent.salt = salt;
        await Student.updateOne({ nickname: reqBody.nickname }, { $set: newStudent });
        return newStudent;
    }

    updateOne = async (reqBody, salt) => {
        const { hashedPass } = await crypto.hashPassword(reqBody.password, salt);
        return await updateOneInDB(reqBody, hashedPass, salt);
      };

    userExists = async (nickname) => await Student.findOne({ nickname });; 
    
  }
  
  module.exports = UserService;