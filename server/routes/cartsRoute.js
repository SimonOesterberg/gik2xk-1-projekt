const router = require("express").Router();
const cartService = require("../services/cartService");

router.get("/:id", (req, res) => {

})

router.get("/:id/getUniqueProducts", (req, res) => {
    
});

router.post("/:id/addUniqueProduct", (req, res) => {
    
});


router.get("/",(req, res) => {
    cartService.getAll().then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post("/",(req, res) => {
    const cart = req.body;
    cartService.create(cart).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.put("/",(req, res) => {
    const cart = req.body;
    const id = cart.id;

    cartService.update(cart, id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.delete("/",(req, res) => {
    const id = req.body.id;

    cartService.destroy(id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

module.exports = router;