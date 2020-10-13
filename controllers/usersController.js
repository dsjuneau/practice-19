const db = require("../models");

  



module.exports = {
  createUser: function(req, res) {
    db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

  },
  getUsers: function(req,res){
    db.User.find().then(dbmod => res.json(dbmod)).catch(err=>res.status(422).json(err));
  }
}