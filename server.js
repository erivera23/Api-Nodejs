const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty'); //Paquete que nos permite subir archivos

const app = express();

const multiPartMiddleware = multipart({
    uploadDir: './public/imagenes'
}); //Middleware necesario

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


