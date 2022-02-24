"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor_info.init(
    {
      doctorId: DataTypes.INTEGER,
      priceId: DataTypes.STRING,
      specialtyId: DataTypes.INTEGER,
      contentHTML: DataTypes.TEXT,
      contentMarkdown: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Markdown",
    }
  );
  return Doctor_info;
};
