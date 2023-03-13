const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  name: {
    length: {
      maximum: 45,
      tooLong: "^Name cannot be longer than %{count} characters long!",
    },
  },
  logoUrl: {
    length: {
      maximum: 100,
      tooLong: "^URL cannot be longer than %{count} characters long!",
    },
  },
};

router.get("/", (req, res) => {
  db.manufacturer.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const manufacturer = req.body;
  const invalidData = validate(manufacturer, constraints);
  const name = manufacturer.name;

  if (invalidData || !name) {
    res.status(400).json(invalidData || "Name cannot be null!");
  } else {
    db.manufacturer.create(manufacturer).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const manufacturer = req.body;
  const invalidData = validate(manufacturer, constraints);
  const id = manufacturer.id;

  if (invalidData || !id) {
    res
      .status(400)
      .json(invalidData || "ID is necessary when making a put request!");
  } else {
    db.manufacturer
      .update(manufacturer, {
        where: { id: manufacturer.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.manufacturer
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("manufacturer was destroyed!");
    });
});

module.exports = router;
