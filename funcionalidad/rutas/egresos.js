const express = require('express');
const router = express.Router();
const controlador = require('../servicio/egresos/controlador');

router.post('/crear-egresos', controlador.crearEgresos);
router.get('/obtener-egresos', controlador.obtenerEgresos);

module.exports = router;