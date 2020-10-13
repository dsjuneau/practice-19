
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the home page
router.use((req, res) =>{
  res.sendFile("index.html", { root: __dirname });
});




module.exports = router;