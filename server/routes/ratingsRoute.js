const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  score: {
    numericality: {
      greaterThan: 0,
      lessThan: 11,
      notGreaterThan: "^Score has to be higher than %{count}!",
      notLessThan: "^Score has to be lower than %{count}!",
      notValid: "^Score has to be a number!",
    },
  },
  description: {
    length: {
      maximum: 500,
      tooLong:
        "^Rating description cannot be longer than %{count} characters long!",
    },
  },
};

router.get("/", (req, res) => {
  db.rating.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const rating = req.body;
  const invalidData = validate(rating, constraints);
  const score = rating.score;

  if (invalidData || !score) {
    res.status(400).json(invalidData || "Rating cannot be null!");
  } else {
    db.rating.create(rating).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const rating = req.body;
  const invalidData = validate(rating, constraints);
  const id = rating.id;

  if (invalidData || !id) {
    res
      .status(400)
      .json(invalidData || "ID is necessary when making a put request!");
  } else {
    db.rating
      .update(rating, {
        where: { id: rating.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.rating
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("Rating was removed!");
    });
});

module.exports = router;
