const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");
const ncsColor = require("ncs-color");

const constraints = {
    colorName: {
        length: {
            maximum: 30,
            tooLong: "^Color name cannot be longer than %{count} characters long!"
        }
    },
    nscValue: {
        length: {
            minimum: 5,
            maximum: 15,
            tooShort: "^NCS value has to be at least %{count} characters long!",
            tooLong: "^NCS value cannot be longer than %{count} characters long!"
        }
    },
    rgbValue: {
        length: {
            minimum: 10,
            maximum: 16,
            tooShort: "^RGB value has to be at least %{count} characters long!",
            tooLong: "^RGB value cannot be longer than %{count} characters long!"
        }
    },
    hexValue: {
        length: {
            minimum: 4,
            maximum: 9,
            tooShort: "^HEX value has to be at least %{count} characters long!",
            tooLong: "^HEX value cannot be longer than %{count} characters long!"
        }
    }
}

router.get("/",(req, res) => {
    db.color.findAll()
    .then((result)=> {
        res.send(result);
    });
});

router.post("/",(req, res) => {
    const color = req.body;
    const invalidData = validate(color, constraints);
    const colorName = color.colorName;
    const ncsValue = color.ncsValue;
    
    if (invalidData || !colorName || !ncsValue) {
        res.status(400).json(invalidData || "Color name cannot be null!" || "NCS value cannot be null!");
    } else {
        color.rgbValue = ncsColor.rgb(ncsValue);
        color.hexValue = ncsColor.hex(ncsValue);
        db.color.create(color)
        .then((result) => {
            res.send(result);
        });
    }
});

router.put("/",(req, res) => {
    const color = req.body;
    const invalidData = validate(color, constraints);
    const id = color.id;

    if (invalidData || !id) {
        res.status(400).json(invalidData || "ID is necessary when making a put request!");
    } else {
        
        if (color.ncsValue) {
            color.rgbValue = ncsColor.rgb(color.ncsValue);
            color.hexValue = ncsColor.hex(color.ncsValue);
        }
        
        db.color
        .update(color, {
            where: {id: color.id}
        })
        .then((result => {
            res.send(result);
        }));
    }

});

router.delete("/",(req, res) => {
    db.color
    .destroy({
        where: {id: req.body.id}
    })
    .then((result => {
        res.json("Color was removed!");
    }));
});

module.exports = router;