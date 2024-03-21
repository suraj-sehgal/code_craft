'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Submission.init({
    username: DataTypes.STRING,
    language: DataTypes.STRING,
    stdin: DataTypes.TEXT,
    sourceCode: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Submission',
    timestamps: true,
  });
  return Submission;
};