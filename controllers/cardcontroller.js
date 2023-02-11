const Card = require('../card');
const sequelize = require('../db');
const { Op } = require('sequelize')
const getCards = async (req, res) => {
    try {
        const getCards = await Card.findAll({
            where: {

                deleted: 0
            }
        }
        )
        res.json(getCards);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getDeletedCards = async (req, res) => {
    try {
        const getCards = await Card.findAll({
            where: {
                deleted: 1
            }
        }
        )
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
                date: '2020-12-12',
                deleted: 0
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
                fav: 1,
                deleted: 0
            }
        })
        res.json(getFavCards);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createCard = async (req, res) => {
    const { title, date, description, ratting, fav, deleted, image } = req.body
    if (title === '' || description === '' || ratting === '') {
        res.status(500).send({
            message: "Type correctly"
        })
    } else {
        try {
            const addCard = await Card.create({
                title: title,
                date: date,
                description: description,
                ratting: ratting,
                fav: fav,
                deleted: deleted,
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

    try {
        const deleteCard = await Card.destroy({
            where: {
                idCard: req.params.idCard
            }, attributes: ['idCard']
        })
        res.json(deleteCard);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const updatedDeleted = async (req, res) => {

    try {
        const put = await Card.update(
            {
                deleted: 1,
            }, {
            where: {
                idCard: req.params.idCard,
            }, attributes: ['idCard']
        }
        )

        res.json(put);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const putFav = async (req, res) => {
    const { idCard} = req.body
      try {
        const putCard = await Card.update(
          {
            fav: 1
          }, {
          where: {
            idCard: idCard
          }
        });
        res.json(putCard);
    
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };
  const putCard = async (req, res) => {
    const { title, description, ratting, fav, image } = req.body

    try {
        const put = await Card.update(
            {
                title:title,
                description:description,
                ratting:ratting,
                fav:fav,
                image:image
            }, {
            where: {
                idCard: req.params.idCard,
            }, attributes: ['idCard']
        }
        )

        res.json(put);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  };

const getCardById = async (req, res) => {

    try {
        const card = await Card.findAll({
            where: {
                idCard: req.params.idCard
            }, attributes: ['idCard', 'title', 'date', 'description', 'ratting', 'ratting', 'image']
        }
        )
        res.json(card);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const searchCard = async (req, res) => {
    const {title} = req.body
    try {
        const searchCard = await Card.findAll({
            where:
            {
                title: {
                    [Op.like]: `%${title}%`
                    
                },
                deleted: 0
            }
        })

        res.json(searchCard);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




module.exports = {
    getCards, getDeletedCards, getRecentCards, getFavCards, createCard, deleteCard, updatedDeleted, getCardById, putFav, putCard, searchCard
}