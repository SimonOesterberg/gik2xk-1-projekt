module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "rating",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      score: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    },
    { underscored: true }
  );
};
