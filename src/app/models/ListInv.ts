export class Inventario 
{
    _id?: String;
    NumUnico: String;
    EID: String;
    NombreA: String;
    TipoEquipo: String;
    NoSerie: String;
    Fecha: String;
    Garantia: String;
    Marca: String;
    Modelo: String;
    Observacion: String;
    Activo: String;
    Color: String


    constructor(    
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
        Color: String) {

            this.NumUnico = NumUnico;
            this.EID = EID
            this.NombreA = NombreA
            this.TipoEquipo = TipoEquipo
            this.NoSerie = NoSerie
            this.Fecha = Fecha
            this.Garantia = Garantia
            this.Marca = Marca
            this.Modelo = Modelo
            this.Observacion = Observacion
            this.Activo = Activo
            this.Color = Color

        }
}