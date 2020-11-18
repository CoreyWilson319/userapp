'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  patients.init({
    height: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patients',
  });
  return patients;
};