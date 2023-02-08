const Sequelize = require('sequelize');
const db = require('./db');

const Card = db.define('card', {
    idCard: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ratting: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    fav: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    }
});

//Criar a tabela
Card.sync();

module.exports = Card;