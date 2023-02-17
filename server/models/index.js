'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//color id
db.color.hasMany(db.product);
db.product.belongsTo(db.color);

//product id
db.product.hasMany(db.uniqueProduct);
db.uniqueProduct.belongsTo(db.product);

db.product.hasOne(db.ratingList);
db.ratingList.belongsTo(db.product);

//uniqueProduct id
db.cart.hasMany(db.uniqueProduct);
db.uniqueProduct.belongsTo(db.cart);

//user id
db.user.hasOne(db.cart);
db.cart.belongsTo(db.user);

db.user.hasMany(db.rating);
db.rating.belongsTo(db.user);

//ratingList id
db.ratingList.hasMany(db.rating);
db.rating.belongsTo(db.ratingList);

module.exports = db;
