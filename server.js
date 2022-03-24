require('dotenv').config();
const express = require('express');
const { connectToDB } = require('./src/db/access');

const app = express();

const studentsRouter = require('./src/routes/students');

connectToDB();

app.use(express.json());

app.use('/students', studentsRouter);

app.listen(3000, () => {
  console.log('server started');
});
