const util = require('util'); const crypto = require('../utils/crypto');
const userExistsService = require('../services/userExistsService');

async function authentication(req, res, next) {
  const existingStudent = await userExistsService(req.params.nick);

  if (existingStudent === null) res.status(400).json("user with such nickname doesn't exist");

  const authheader = req.headers.authorization;

  if (!authheader) {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }

  const auth = new Buffer.from(
    authheader.split(' ')[1],
    'base64',
  ).toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  // password gets hashed first and then compared
  const { hashedPass } = await crypto.hashPassword(pass, existingStudent.salt);
  if (user === existingStudent.nickname && hashedPass === existingStudent.password) {
    req.salt = existingStudent.salt;
    next();
  } else {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
}

module.exports = authentication;
