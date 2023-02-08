const User = require('../user')

const getUser = async (req, res) => {
  try {
    const users = await User.findByPk(1)
    res.json(users);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

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
      message:"Type correctly"
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
  const { name, email, password, contact, image } = req.body
  if(name === '' || email === '' || password === ''|| contact === '' ){
    res.status(500).send({
      message:"Fill in all fields"
    })
  }else{
    try {
      const putUser = await User.update(
        {
          name: name,
          email: email,
          password: password,
          contact: contact,
          image: image
        }, {
        where: {
          idUser: 1
        }
      });
      res.json(putUser);
  
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.body
  try {
    const deleteUser = await User.destroy({
      where: {
        idUser: '1'
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
  getUser, getUsers, createUser, putUser, deleteUser, login
}