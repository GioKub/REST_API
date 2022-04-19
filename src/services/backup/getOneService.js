const { getOneFromDB } = require('../db/access');

const getOne = async (nickname) => await getOneFromDB(nickname);

module.exports = getOne;
