const logicaDB = require('./logicaDB');

const crearEgresos = async (req,res) => {
    let egreso = req.body;

    try {
        let respuesta = await logicaDB.crearEgresosDB(egreso);
        res.status(200).json({
            'egreso': respuesta
        })
    } catch (error) {
        res.status(500).json({
            error
        })
        return;
    }
}

const obtenerEgresos = async (req,res) => {

    try {
        let respuesta = await logicaDB.obtenerEgresosDB();
        res.status(200).json({
            'egreso':respuesta
        })
    } catch (error) {
        res.status(500).json({
            error
        })
        return;
    }
}
 
module.exports = {
    crearEgresos,
    obtenerEgresos
}