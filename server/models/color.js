module.exports = (sequelize, DataTypes) => {
    return sequelize.define("colors", {
        colorID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
};