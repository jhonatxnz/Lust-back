const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')
const sequelize = require("./db");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/", routes)

app.listen(3002, async () => {
  console.log('Servidor rodando na porta 3002')
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})