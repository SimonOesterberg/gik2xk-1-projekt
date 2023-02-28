module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      total: {
        type: DataTypes.FLOAT(30),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
