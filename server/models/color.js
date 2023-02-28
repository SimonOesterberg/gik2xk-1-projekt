module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "color",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      colorName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      ncsValue: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          len: [5, 15],
        },
      },
      rgbValue: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
          len: [10, 16],
        },
      },
      hexValue: {
        type: DataTypes.STRING(9),
        allowNull: false,
        validate: {
          len: [4, 9],
        },
      },
    },
    { underscored: true }
  );
};
