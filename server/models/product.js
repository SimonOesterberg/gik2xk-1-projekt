module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stock: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT(5),
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
