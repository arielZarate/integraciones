const express=require('express')
const router=express.Router();

const socket=require('./socket');
//
// Configurar una ruta para que los clientes puedan conectarse al servidor de Socket.IO
router.use('/', socket);


module.exports=router

