const { getAllFromDB } = require('../db/access');

const getAll = async () => await getAllFromDB();

module.exports = getAll;
