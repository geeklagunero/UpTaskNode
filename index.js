const express = require('express');
//importamos el archivo de las rutas
//no hay que poner el nombre del archivo porque
//al ser index.js es el archivo por default que 
//toma el modelo como principal
const routes = require('./routers');
//crear una app de express
const app = express();

app.use('/', routes());



app.listen(3000);