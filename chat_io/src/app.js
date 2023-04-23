// Importar las librerías necesarias
const express = require('express');
const http = require('http');

const socketIO = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Inicializar la aplicación de Express
const app = express();
app.name="CHAT_IO"

// Configurar middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Crear un servidor HTTP y asociarlo con la aplicación de Express
const server = http.createServer(app);
// Inicializar el servidor de Socket.IO y asociarlo con el servidor HTTP
const io = socketIO(server);


/* const io = socketio(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});
 */



app.post('/sms', (req, res) => {
  const mensaje = req.body.mensaje;

  // Enviar mensaje a través de Socket.IO
  io.emit('mensaje', mensaje);

  res.send('Mensaje enviado');
});


app.post('/',(req,res)=>{
    
io.on('connection', (socket) => {
  console.log('Un nuevo cliente se ha conectado');
});
})
// Escuchar conexiones entrantes de clientes



//rutes
/* const routes=require('./routes/index');
app.use('/socket',routes)
 */

// catch 404 and forward to error handler middleware
app.use(function (req, res, next) {
  res.redirect("https://http.cat/404");
});





module.exports=app;