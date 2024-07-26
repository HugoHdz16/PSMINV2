const { Schema, model, default: mongoose } = require('mongoose'); 

const InventarioSchema = new mongoose.Schema({

    NumUnico: String,
    EID: String,
    NombreA: String,
    TipoEquipo: String,
    NoSerie: String,
    Fecha: String,
    Garantia: String,
    Marca: String,
    Modelo: String,
    Observacion: String,
    Activo: String,
    Color: String
},
{
    timestamps: true
});


module.exports = model('inventario', InventarioSchema)