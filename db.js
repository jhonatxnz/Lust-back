const Sequelize = require('sequelize');

const sequelize = new Sequelize('BD21686','BD21686','BD21686',{
    dialect:'mssql',
    host:'regulus.cotuca.unicamp.br',
    
})

  
module.exports =  sequelize;