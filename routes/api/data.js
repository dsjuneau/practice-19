const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.route("/").get(usersController.getUsers);



// 
module.exports = router;