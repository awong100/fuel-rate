const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const reactDom = require("react-dom");

//  gets users from mongoDB ATLAS database and returns them in JSON format
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

//  handles post requests
//  create a new user and save it into the mongoDB ATLAS database
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 12)
  .then(hashedpassword=>{
    const newUser = new User({ username, password:hashedpassword });

    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json(`Error: ` + err));

    })
  
});

router.post("/login", async function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username:username})
  .then(savedUser=>{
    if(!savedUser){
      return res.status(422).json({error: "Username doesn't exist"})
    }
    bcrypt.compare(password, savedUser.password)
    .then(ifMatch=>{
      if(ifMatch){
        return res.json(savedUser)
      }
      else{
        return res.status(422).json({error: "Password is invalid"})
      }
    })
    .catch(err=>{
      console.log(err)
    })


  })
  
});


//  find one and only select username and password
router.route("/:username").get((req, res) => {
  User.findOne({ username: req.params.username }, "username password")
    .then((user) => {
      window.console.log(
        "%s is a user with password %s.",
        user.username,
        user.password
      );
      res.json(user);
    })
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted!"))
    .catch((err) => res.status(400).json(`Error: ` + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.name = req.body.name;
      user.address1 = req.body.address1;
      user.address2 = req.body.address2;
      user.city = req.body.city;
      user.state = req.body.state;
      user.zip = req.body.zip;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json(`Error: ` + err));
    })
    .catch((err) => res.status(400).json(`Error: ` + err));
});

module.exports = router;
