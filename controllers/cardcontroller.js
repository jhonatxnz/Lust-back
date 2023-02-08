const Card = require('../card');
const sequelize = require('../db');
const { Op } = require('sequelize')
const getCards = async (req, res) => {
    try {
        const getCards = await Card.findAll()
        res.json(getCards);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const getRecentCards = async (req, res) => {
    try {
        const getRecentCards = await Card.findAll({
            where: {
                date:'2020-12-12'
                  
            }
        })
        res.json(getRecentCards);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getFavCards = async (req, res) => {
    try {
        const getFavCards = await Card.findAll({
            where: {
                fav: 1
            }
        })
        res.json(getFavCards);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createCard = async (req, res) => {
    const { title, date, description, ratting, fav, image} = req.body
    if(title === '' || description === '' ||ratting === ''){
        res.status(500).send({
            message:"Type correctly"
          })
    }else{
        try {
            const addCard = await Card.create({
                title: title,
                date: date,
                description: description,
                ratting: ratting,
                fav: fav,
                image: image
            });
            res.json(addCard);
    
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
};

const deleteCard = async (req, res) => {
    const { idCard } = req.body
    try {
        const deleteCard = await Card.destroy({
            where: {
                idCard: idCard
            }
        })
        res.json(deleteCard);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = {
    getCards, getRecentCards, getFavCards, createCard, deleteCard
}