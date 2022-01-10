export class CardEdu{

    institucion: string = "";
    periodo: string = "";
    id: number = 0;
    

    constructor(institucion:string, periodo: string, id:number) { 

        this.institucion = institucion;
        this.periodo = periodo;
        this.id = id;

    }

}