const router = require("express").Router();
let Quote = require("../models/quote.model");


// get all fuel quotes from the database
router.route("/").get((req, res) => {
  Quote.find()
    .then((quotes) => res.json(quotes))
    .catch((err) => res.status(400).json(`Error: ` + err))
});

//  get quotes that match passed id
router.route("/:id").get((req, res) => {
  Quote.find({ id: req.params.id})
    .then((quotes) => {
      // window.console.log(quotes)
      res.json(quotes)
    })
    .catch((err) => res.status(400).json(`Error: `+err))
});

router.route("/add").post((req, res) => {
  const id = req.body.id
  const date = req.body.date
  const price = req.body.price
  const gallons = req.body.gallons
  const total = req.body.total
  const address = req.body.address
  const city = req.body.city
  const state = req.body.state
  const zip = req.body.zip
  const newQuote = new Quote({id, date, price, gallons, total, address, city, state, zip})

  // console.log(`QUOTE TO BE ADDED! `)

  newQuote
    .save()
    .then(() => res.json("Quote added!"))
    .catch((err) => res.status(400).json(`Error: `+err))
})

module.exports = router;