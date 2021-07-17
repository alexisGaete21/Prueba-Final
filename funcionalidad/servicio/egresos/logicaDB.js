const Egresos = require('./egresos.model');

const crearEgresosDB = async (egreso) => {
    let respuesta = await Egresos.create(egreso);
    return respuesta;
}

const obtenerEgresosDB = async () => {
    let respuesta = await Egresos.find();
    return respuesta;
}

module.exports = {
    crearEgresosDB,
    obtenerEgresosDB
}