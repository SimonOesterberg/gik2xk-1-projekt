const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
    total: {
        length: {
            maximum: 30,
            tooLong: "^This is very prizy, contact us at email@mail.com to make this order!"
        },
        numericality: {
            greaterThan: 0,
            notGreaterThan: "^Cannot checkout with cart totaling to less than %{count} dollars!",
            notValid: "^Total has to be a number!"
        }

    },
    amount: {
        numericality: {
            greaterThan: 0,
            lessThan: 999999,
            notGreaterThan: "^Amount has to be higher than %{count}!",
            notLessThan: "^Amount has to be lower than %{count}!",
            notValid: "^Amount has to be a number!"
        }
    }
}

router.get("/",(req, res) => {
    db.cart.findAll()
    .then((result)=> {
        res.send(result);
    });
});

router.post("/",(req, res) => {
    const cart = req.body;
    const invalidData = validate(cart, constraints);
    const amount = cart.amount;
    const total = cart.total;

    if (invalidData || !amount || !total) {
        res.status(400).json(invalidData || "Amount cannot be empty!" || "Total cannot be empty!");
    } else {
        db.cart.create(cart)
        .then((result) => {
            res.send(result);
        });
    }
});

router.put("/",(req, res) => {
    const cart = req.body;
    const invalidData = validate(cart, constraints);
    const id = cart.id;


    if (invalidData || !id ||!amount || !total) {
        res.status(400).json(invalidData || "ID is necessary when making a put request!");
    } else { 
        db.cart
        .update(cart, {
            where: {id: cart.id}
        })
        .then((result => {
            res.send(result);
        }));
    }

});

router.delete("/",(req, res) => {
    db.cart
    .destroy({
        where: {id: req.body.id}
    })
    .then((result => {
        res.json("cart was removed!");
    }));
});

module.exports = router;