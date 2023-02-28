const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

router.get("/:id/carts", (req, res) => {});

const constraints = {
  userName: {
    length: {
      minimum: 4,
      maximum: 30,
      tooShort: "^Username has to be at least %{count} letters long!",
      tooLong: "^Username cannot be longer than %{count} letters long!",
    },
  },
  firstName: {
    length: {
      minimum: 2,
      maximum: 30,
      tooShort: "^First name has to be at least %{count} letters long!",
      tooLong: "^First name cannot be longer than %{count} letters long!",
    },
  },
  lastName: {
    length: {
      minimum: 2,
      maximum: 30,
      tooShort: "^Last name has to be at least %{count} letters long!",
      tooLong: "^Last name cannot be longer than %{count} letters long!",
    },
  },
  email: {
    email: {
      message: "^This is not a valid email example@mail.com",
    },
  },
};

router.get("/", (req, res) => {
  db.user.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const userName = user.userName;
  const email = user.email;

  if (invalidData || !userName || !email) {
    res
      .status(400)
      .json(invalidData || "Username is required!" || "Email is required");
  } else {
    db.user.create(user).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const id = user.id;

  if (invalidData || !id) {
    res
      .status(400)
      .json(invalidData || "ID is necessary when making a put request!");
  } else {
    db.user
      .update(user, {
        where: { id: user.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.user
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("User was removed!");
    });
});

module.exports = router;
