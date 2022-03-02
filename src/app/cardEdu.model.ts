export class CardEdu{

    nombreInstitucion: string = "";
    fechaInicio: string = "";
    fechaFin: string = "";
    id_edu: number = 0;
    

    constructor(institucion:string, inicio: string, fin: string, id:number) { 

        this.nombreInstitucion = institucion;
        this.fechaInicio = inicio;
        this.fechaFin = fin;
        this.id_edu = id;

    }

}