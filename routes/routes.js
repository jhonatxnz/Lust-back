const { Router } = require("express");
const {
  getUser, getUsers, createUser, putUser, deleteUser, login
  
} = require("../controllers/usercontroller");

const {
  getCards, getDeletedCards, getRecentCards, getFavCards, createCard, deleteCard, putDeleted, getCardById, putFav, putCard, searchCard
  
} = require("../controllers/cardcontroller");

const router = Router();

//User
router.get("/user", getUser);
router.get("/", getUsers);
router.post("/post", createUser);
router.post("/login", login);
router.put("/put", putUser);
router.delete("/delete", deleteUser);

//Card
router.get("/library", getCards);
router.get("/history", getDeletedCards);
router.get("/recentcards", getRecentCards);
router.get("/favcards", getFavCards);
router.get("/card/:idCard", getCardById);
router.get("/searchCard", searchCard);
router.put("/putfav", putFav);
router.put("/putfav", putFav);
router.post("/postcard", createCard); 
// router.delete("/card/delete/:idCard", deleteCard);
router.put("/card/delete/:idCard", putDeleted);
router.put("/putcard/:idCard", putCard);


module.exports = router;
