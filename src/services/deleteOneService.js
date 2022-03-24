const { deleteOneFromDB } = require('../db/access');

const deleteOne = async (nickname) => await deleteOneFromDB(nickname);

module.exports = deleteOne;
