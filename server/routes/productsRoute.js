const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  name: {
    length: {
      minimum: 1,
      maximum: 30,
      tooShort: "^Product name has to be longer than %{count} letter",
      tooLong: "^Product name is too long, please enter a shorter name",
    },
  },
  category: {
    length: {
      minimum: 1,
      maximum: 30,
      tooShort: "^Category name is too short",
      tooLong: "^Category name is too long, please enter a shorter name",
    },
  },
};

router.get("/", (req, res) => {
  db.product.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const product = req.body;
  const invalidData = validate(product, constraints);
  const name = product.name;
  const category = product.category;

  if (invalidData || !name || !category) {
    res
      .status(400)
      .json(
        invalidData || "Name cannot be empty" || "Category cannot be empty"
      );
  } else {
    db.product.create(product).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const product = req.body;
  const invalidData = validate(product, constraints);
  const id = product.id;

  if (invalidData || !id) {
    res
      .status(400)
      .json(invalidData || "ID is necessary when making a put request!");
  } else {
    db.product
      .update(product, {
        where: { id: product.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.product
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("product was removed!");
    });
});

module.exports = router;
