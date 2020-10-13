const router = require("express").Router();
const login = require("./login");
const data = require("./data");


// routes
router.use("/login", login);
router.use("/data", data);


module.exports = router;