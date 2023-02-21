const router = require("express").Router();

router.get("/",(req, res) => {
    res.send("get users");
});

router.post("/",(req, res) => {
    res.send(req.body);
});

router.put("/",(req, res) => {
    res.send(req.body);
});

router.delete("/",(req, res) => {
    res.send(req.body);
});
module.exports = router;