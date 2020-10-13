const router = require("express").Router();
const usersController = require("../../controllers/usersController");

require("dotenv").config();

router.route("/login").post(usersController.createUser);

module.exports = router;