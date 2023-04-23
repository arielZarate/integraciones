
const socketio = require('socket.io');


// Inicializar el servidor de Socket.IO y asociarlo con el servidor HTTP
/* const io = socketio(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

// Escuchar las conexiones entrantes de los clientes
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Escuchar las solicitudes de los clientes
  socket.on('mensaje', (data) => {
    console.log(`Mensaje recibido: ${data}`);

    // Lógica para procesar la solicitud y generar una respuesta
    // ...

    // Enviar la respuesta al cliente
    socket.emit('respuesta', respuesta);
  });
}); */


const getSaludo=(req,res)=>{
  res.send({ response: 'Conexión exitosa' }).status(200);

}


module.exports={getSaludo}