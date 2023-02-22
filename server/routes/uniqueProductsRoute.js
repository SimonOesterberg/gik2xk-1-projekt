const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

router.get('/:id/carts', (req, res) =>{

})


validate.extend(validate.validators.datetime, {
    parse: function(value) {
      return Date.parse(value);
    },
    format: function(value) {
      return Date.parse(value);
    }
  });

const constraints = {
    productionDate: {
        datetime: {
            notValid: "^Production date has to be a valid date!"
        }
    }
}

router.get("/",(req, res) => {
    db.uniqueProduct.findAll()
    .then((result)=> {
        res.send(result);
    });
});

router.post("/",(req, res) => {
    const uniqueProduct = req.body;
    const invalidData = validate(uniqueProduct, constraints);
    const productionDate = uniqueProduct.productionDate;
    
    if (invalidData || !productionDate) {
        res.status(400).json(invalidData || "Production date cannot be null!");
    } else {
        db.uniqueProduct.create(uniqueProduct)
        .then((result) => {
            res.send(result);
        });
    }
});

router.put("/",(req, res) => {
    const uniqueProduct = req.body;
    const invalidData = validate(uniqueProduct, constraints);
    const id = uniqueProduct.id;

    if (invalidData || !id) {
        res.status(400).json(invalidData || !"ID is necessary when making a put request!");
    } else { 
        db.uniqueProduct
        .update(uniqueProduct, {
            where: {id: uniqueProduct.id}
        })
        .then((result => {
            res.send(result);
        }));
    }

});

router.delete("/",(req, res) => {
    db.uniqueProduct
    .destroy({
        where: {id: req.body.id}
    })
    .then((result => {
        res.json("Unique product was removed!");
    }));
});

module.exports = router;