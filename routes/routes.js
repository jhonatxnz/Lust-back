const { Router } = require("express");
const {
  getUser,getUsers,createUser,putUser,deleteUser,login
  
} = require("../controllers/usercontroller");

const {
  getCards,getRecentCards,getFavCards,createCard,deleteCard
  
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
router.get("/history", getCards);
router.get("/recentcards", getRecentCards);
router.get("/favcards", getFavCards);
router.post("/postcard", createCard);
router.delete("/deletecard", deleteCard);


module.exports = router;
