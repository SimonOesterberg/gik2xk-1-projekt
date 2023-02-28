module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "uniqueProduct",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productionDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
    },
    { underscored: true }
  );
};
