module.exports = (sequelize, DataTypes) => {
    return sequelize.define("color", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        colorName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        rgbValue: {
            type: DataTypes.STRING(16),
            allowNull: false,
            validate: {
                len:[10, 16]
            }
        }
    },
    {underscored: true}
    );
};