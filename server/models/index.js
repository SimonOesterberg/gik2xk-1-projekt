"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//color id
db.color.hasMany(db.product, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
db.product.belongsTo(db.color, {
  foreignKey: { allowNull: false },
});

// id
db.cart.hasMany(db.product, {
  foreignKey: { allowNull: true },
});
db.product.belongsTo(db.cart, {
  foreignKey: { allowNull: true },
});

//user id
db.user.hasOne(db.cart, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
db.cart.belongsTo(db.user, {
  foreignKey: { allowNull: false },
});

db.user.hasMany(db.rating, {
  foreignKey: { allowNull: false },
});
db.rating.belongsTo(db.user, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

//ratingList id
db.product.hasMany(db.rating, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
db.rating.belongsTo(db.product, {
  foreignKey: { allowNull: false },
});

//manufacturer id
db.manufacturer.hasMany(db.product, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
db.product.belongsTo(db.manufacturer, {
  foreignKey: { allowNull: false },
});

module.exports = db;
