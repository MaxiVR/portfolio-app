export class CardExp{

    nombreEmpresa: string = "";
    periodo: string = "";
    puesto: string = "";
    id?: number = 0;
    

    constructor(empresa:string, inicio: string, puesto: string, id:number) { 

        this.nombreEmpresa = empresa;
        this.puesto = puesto;
        this.periodo = inicio;;
        this.id = id;

    }

}