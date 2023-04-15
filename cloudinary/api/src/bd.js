const { Sequelize } = require('sequelize');


/* 
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=admin
DB_NAME_DATABASE=upload
*/
const {DB_HOST,DB_USER,DB_PASSWORD,DB_NAME_DATABASE}=process.env;

// Configuración de la conexión a la base de datos de PostgreSQL
// Usa las variables de entorno en la configuración de la conexión a la base de datos, por ejemplo:
const sequelize = new Sequelize(DB_NAME_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
logging: false,
  define: {
    timestamps: false
  },
  // Agregar force: true aquí
  force: true

});


module.exports=sequelize;

