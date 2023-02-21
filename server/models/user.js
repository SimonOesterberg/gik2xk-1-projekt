module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len:[4, 30]
            }
        },
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: true,
            validate: {
                len:[2, 30]
            }
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: true,
            validate: {
                len:[2, 30]
            }
        },
        adress: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true
            }
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {underscored: true}
    );
};