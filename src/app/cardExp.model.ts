export class CardExp{

    empresa: string = "";
    puesto: string = "";
    descripcionTrabajo: string = "";
    fechaInicio: string = "";
    fechaFin: string = "";
    id_trabajo: number = 0;
    

    constructor(empresa:string, puesto: string, descripcionTrabajo:string, fechaInicio:string, fechaFin:string,  id:number) { 

        this.empresa = empresa;
        this.puesto = puesto;
        this.descripcionTrabajo = descripcionTrabajo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.id_trabajo = id;

    }

}