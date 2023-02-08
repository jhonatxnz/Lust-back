const User = require('../user')

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, date, contact, image } = req.body
  if(name === '' || email === '' || password === '' ||date === '' ||contact === '' ){
    res.status(500).send({
      message:"Digite corretamente"
    })
  }else{
    try {
      const addUser = await User.create({
        name: name,
        email: email,
        password: password,
        date: date,
        contact: contact,
        image: image
      });
      res.json(addUser);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
  
};

const putUser = async (req, res) => {
  const { name, email, password, contact } = req.body
  try {
    const putUser = await User.update(
      {
        name: name,
        email: email,
        password: password,
        contact: contact,

      }, {
      where: {
        id: 1
      }
    });
    res.json(putUser);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.body
  try {
    const deleteUser = await User.destroy({
      where: {
        idUser: idUser
      }
    })
    res.json(deleteUser);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const login =  async (req, res) => {
  const {email,password} = req.body;

  try {
    const users = await User.findAll({
      where: {
        email: email,
        password: password
      }
    }
    )
    
    console.log(users.length)

    if(users.length === 0){
      res.status(404).send({
        message:"User not found"
      })
    }
    else{
      res.json(users);
    }

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getUsers, createUser, putUser, deleteUser, login
}