const { DataTypes } = require("sequelize");
const sequelize = require("../bd.js");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Upload = sequelize.define(
  "Upload",
  {
    image: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    
  }
);

module.exports = Upload;

