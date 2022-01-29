export class CardEdu{

    nombreInstitucion: string = "";
    periodo: string = "";
    id: number = 0;
    

    constructor(institucion:string, periodo: string, id:number) { 

        this.nombreInstitucion = institucion;
        this.periodo = periodo;
        this.id = id;

    }

}