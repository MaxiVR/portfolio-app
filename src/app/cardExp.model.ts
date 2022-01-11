export class CardExp{

    empresa: string = "";
    periodo: string = "";
    puesto: string = "";
    id: number = 0;
    

    constructor(empresa:string, periodo: string, puesto: string, id:number) { 

        this.empresa = empresa;
        this.puesto = puesto;
        this.periodo = periodo;
        this.id = id;

    }

}