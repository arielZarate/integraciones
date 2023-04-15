const server=require('./src/app.js')
const sequelize=require('./src/bd.js')
const PORT = 3000

 async function  servidor(){
    // Verificar la conexión a la base de datos
   try {
      await sequelize.authenticate();
    server.listen(PORT,() => {
      console.log(
        `
       Connection has been established successfully on port ${PORT} 
         `
      );
    });

     await sequelize.sync({ force:false });  //sino tiene el await fallara
   } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
   }
   
    

}

//ejecuto la funcion
servidor();

