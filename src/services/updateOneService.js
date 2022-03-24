const crypto = require('../utils/crypto');
const { updateOneInDB } = require('../db/access');

const updateOne = async (reqBody, salt) => {
  const { hashedPass } = await crypto.hashPassword(reqBody.password, salt);
  return await updateOneInDB(reqBody, hashedPass, salt);
};

module.exports = updateOne;
