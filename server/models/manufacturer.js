module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "manufacturer",
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
      logoUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
    },
    { underscored: true }
  );
};
