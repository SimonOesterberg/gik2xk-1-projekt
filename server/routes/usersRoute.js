const router = require("express").Router();
const userService = require("../services/userService");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  userService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/login/:username", (req, res) => {
  const username = req.params.username;

  userService.getByUsername(username).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  userService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  userService.create(user).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const user = req.body;
  const id = user.id;

  userService.update(user, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const id = req.body.id;

  userService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
