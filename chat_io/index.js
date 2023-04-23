const server=require('./src/app.js');

const {PORT}=process.env;

// Iniciar el servidor y escuchar en el puerto 3000



 server.listen(PORT, () => {
  console.log(`Servidor de CHAT iniciado en el puerto ${PORT}`);
});
 