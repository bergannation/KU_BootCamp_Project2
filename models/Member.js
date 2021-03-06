const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Member extends Model {}

Member.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    phone: {
      type: DataTypes.STRING,
    allowNull: false,    
    },
    physicians: {
      type: DataTypes.STRING,
    },
    bloodtype: {
      type: DataTypes.STRING,
    },
    allergies: {
      type: DataTypes.STRING,
    },
    conditions: {
      type: DataTypes.STRING,
    },
    prescriptions: {
      type: DataTypes.STRING,
    },
    profileImage: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    insuranceCard: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'member',
  }
);

module.exports = Member;
