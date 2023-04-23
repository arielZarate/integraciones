const { DataTypes } = require("sequelize");
const sequelize = require("../bd.js");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Upload = sequelize.define(
  "Upload",
  {
   
    name:{
      type:DataTypes.STRING,
      allowNull:false
    }
      ,
    image: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    
    age:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
    
  }
);

module.exports = Upload;

