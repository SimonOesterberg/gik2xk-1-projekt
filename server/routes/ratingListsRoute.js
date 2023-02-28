const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  averageScore: {
    numericality: {
      greaterThan: 0,
      lessThan: 11,
      notGreaterThan: "^Average score has to be higher than %{count}!",
      notLessThan: "^Average score has to be lower than %{count}!",
      notValid: "^Average score has to be a number!",
    },
  },
};

router.get("/", (req, res) => {
  db.ratingList.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const ratingList = req.body;
  const invalidData = validate(ratingList, constraints);
  const averageScore = ratingList.averageScore;

  if (invalidData || !averageScore) {
    res.status(400).json(invalidData || "Average score cannot be null!");
  } else {
    db.ratingList.create(ratingList).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const ratingList = req.body;
  const invalidData = validate(ratingList, constraints);
  const id = ratingList.id;

  if (invalidData || !id) {
    res
      .status(400)
      .json(invalidData || !"ID is necessary when making a put request!");
  } else {
    db.ratingList
      .update(ratingList, {
        where: { id: ratingList.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.ratingList
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("Rating list was removed!");
    });
});

module.exports = router;
