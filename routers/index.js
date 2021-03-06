const express = require('express');
const router = express.Router();

//importamso el controllador
const proyectosController = require("../controllers/proyectosController");

module.exports = function() {

    router.get('/', proyectosController.proyectosHome);

    router.get('/nosotros', (req, res) => {
        res.send('nosotros');
    });

    return router;
}