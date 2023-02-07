const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const User = require('./user')
const Card = require('./card')
const  sequelize  = require("./db");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(3002, () => {
    console.log('Servidor rodando na porta 3002')
})

app.get('/', async (req, res) =>{
    try {
      await sequelize.authenticate();
    
      const a = await User.findAll()
      res.json(a);
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});

app.post('/post' ,async (req,res) => {
  try {
    await sequelize.authenticate();
    const addUser = await User.create({
              name: "jhonatan",
              email: "jw.jhonatan1711@gmail.com",
              password: "12345678",
              date: "12/12/2023",
              contact: "(19)97124-2506",
              image: ""
          });
    res.json(addUser);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})

app.put('/put' ,async (req,res) => {
  try {
    await sequelize.authenticate();

    const putUser = await User.update({ name: "a" }, {
              where: {
                id: 1
              }
            });
    res.json(putUser);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})

app.delete('/delete' ,async (req,res) => {
  try {
    await sequelize.authenticate();

    const deleteUser = await User.destroy({ where:{
      idUser:1
    }})
    res.json(deleteUser);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})


app.post('/postcard' ,async (req,res) => {
  try {
    await sequelize.authenticate();

    const addCard = await Card.create({
              title: "o mar",
              date: "12/12/2023",
              description: "blablasdjasdjkhajsd",
              ratting: "1",
              fav: "1",
              image: ""
          });
    res.json(addCard);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})

app.delete('/deletecard' ,async (req,res) => {
  try {
    await sequelize.authenticate();

    const deleteCard = await Card.destroy({ where:{
      idCard:1
    }})
    res.json(deleteCard);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})


app.get('/cards', async (req, res) =>{
  try {
    await sequelize.authenticate();
  
    const getCards = await Card.findAll()
    res.json(getCards);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});

app.get('/recentcards', async (req, res) =>{
  try {
    await sequelize.authenticate();
  
    const getRecentCards = await Card.findAll({
              where: {
                  date: "2023-12-12T03:00:00.000Z"
              }
          })
    res.json(getRecentCards);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});

app.get('/favcards', async (req, res) =>{
  try {
    await sequelize.authenticate();
  
    const getFavCards = await Card.findAll({
              where: {
                  fav: 1
              }
          })
    res.json(getFavCards);
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});