
const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the home page
router.route("/").get((req, res) =>{
  res.sendFile("./index.html", { root: path.join(__dirname, "../") });
});




module.exports = router;