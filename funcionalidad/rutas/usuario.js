const express = require('express');
const router = express.Router();
const controlador = require('../servicio/usuario/controlador');

router.post('/crear-usuario', controlador.crearUsuario);
router.get('/obtener-usuarios', controlador.obtenerUsuario);

module.exports = router;