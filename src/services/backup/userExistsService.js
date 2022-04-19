const { checkIfUserExists } = require('../db/access');

const userExists = async (nickname) => checkIfUserExists(nickname);

module.exports = userExists;
