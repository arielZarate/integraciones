const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Middleware de CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware de Morgan para logging de peticiones HTTP
app.use(morgan('dev'));

app.use(express.json());

const upload=require('./routes/upload')
const upload2=require('./routes/multer')
const multer=require('./routes/multer2')
app.use('/upload',upload)
app.use('/multer1',upload2)
app.use('/multer2',multer)


/* app.get('/', (req, res) => res.send('Hello World!')) */



module.exports=app;