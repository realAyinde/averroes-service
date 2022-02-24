'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Character.init({
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    about: DataTypes.STRING,
    ability: DataTypes.STRING,
    appearance: DataTypes.STRING,
    others: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};