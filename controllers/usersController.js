const db = require("../models");

  
// app.post("/", (req, res) => {
//     if (req.body.name && req.body.email) {
//       res.sendFile("./public/success.html", { root: __dirname });
//     } else {
//       res.sendFile("./public/failure.html", { root: __dirname });
//     }
//   });


module.exports = {
  createUser: function(req, res) {
    db.User.create(req.body.userToSave)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

  }
}