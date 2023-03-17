const router = require("express").Router();
const productService = require("../services/productService");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  productService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/manufacturer/:id", (req, res) => {
  const id = req.params.id;

  productService.getByManufacturer(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/addToCart/:id", (req, res) => {
  const product = req.body;
  const cartId = req.params.id;

  productService.addToCart(product, product.id, cartId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  productService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const product = req.body;

  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const product = req.body;
  const id = product.id;

  productService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
