const crypto = require('../utils/crypto');
const { createOneInDB } = require('../db/access');

const createOne = async (reqBody) => {
  const { hashedPass, salt } = await crypto.hashPassword(reqBody.password);
  return createOneInDB(reqBody, hashedPass, salt);
};

module.exports = createOne;
