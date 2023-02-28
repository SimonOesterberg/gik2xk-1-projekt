module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "ratingList",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      averageScore: {
        type: DataTypes.FLOAT(2),
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
