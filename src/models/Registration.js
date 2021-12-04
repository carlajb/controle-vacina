const {Sequelize, DataTypes, STRING, BOOLEAN} = require("sequelize");
const {database} = require("../db");



const RgVaccine = database.define("RgVaccine", {
    id: {
        type: DataTypes.BIGINT, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
    },
    expected_date:{
        type: DataTypes.STRING,
    },
    vaccinated:{
        type: DataTypes.BOOLEAN,
    }


});

RgVaccine.sync();
module.exports = RgVaccine;