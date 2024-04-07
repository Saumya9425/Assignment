const {DataTypes} = require('sequelize')
const sequelize = require('../database/connect')

const User = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    profilePhoto:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

module.exports = User;

