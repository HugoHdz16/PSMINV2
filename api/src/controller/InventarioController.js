const inventario = require('../models/inventario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getIn = async (req, res) => {

    const Inventario = inventario.find();

    if (!Inventario) return res.status(401).send(err)

    return res.status(200).send(Inventario);

}

//Metodo para Agregar un nuevo dispositivo
exports.AddDevice = async (req, res) => {

    const { NumUnico, EID, NombreA, TipoEquipo, NoSerie, Fecha, Garantia, Marca, Modelo, Observacion, Activo, Color } = req.body;

    const newDevice = new inventario({ NumUnico, EID, NombreA, TipoEquipo, NoSerie, Fecha, Garantia, Marca, Modelo, Observacion, Activo, Color });

    await newDevice.save();

    res.status(200).send(newDevice);

}


exports.putDevice = async (req, res) => {

    try{ 
        const { NumUnico, EID, NombreA, TipoEquipo, NoSerie, Fecha, Garantia, Marca, Modelo, Observacion, Activo, Color } = req.body
        let Invetario = inventario.findById(req.params.id);

        if(!Invetario) return res.status(404).send("Device not found");

        Inventario.NumUnico = NumUnico;
        Invetario.EID = EID;
        Invetario.NombreA = NombreA;
        Invetario.TipoEquipo = TipoEquipo;
        Invetario.NoSerie = NoSerie;
        Invetario.Fecha = Fecha;
        Invetario.Garantia = Garantia;
        Invetario.Marca = Marca;
        Invetario.Modelo = Modelo;
        Invetario.Observacion = Observacion;
        Invetario.Activo = Activo;
        Invetario.Color = Color;

        Inventario = await inventario.findByIdAndUpdate({_id: req.params.id}, inventario, {new: true});

        res.json({ Inventario });

    }
    catch(err){
        console.error(err);
        res.status(500).send("Fatal error to update data");
    }
}


exports.deleteDevice = async (res, req) => {

    let Inv = await inventario.findById(req.params.id);
    if(!Inv) res.status(401).send("The device does not exist");
    await inventario.findOneAndDelete({_id: req.params.id});

    return res.status(200).send("Device successfully removed");

}


