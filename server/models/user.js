module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING(30),
            allowNull: false
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
            allowNull: false
        }
    },
    {underscored: true}
    );
};