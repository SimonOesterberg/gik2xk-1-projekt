module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        type: DataTypes.STRING(100),
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
      stock: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
