const querys = require('./index');
const { Router } = require('express');
const routes = new Router();

routes.get('./', (req, res) =>{
    return res.json({
        message:"Hello world"
    })
});
// routes.post('./add', querys.addUser);
// routes.put('./put', querys.putUser);
// routes.delete('./delete', querys.deleteUser);
// routes.get('./getall', querys.getCards);
// routes.get('./getfav', querys.getFavCards);
// routes.get('./getrec', querys.getRecentCards);

module.exports = routes;