export class CardHardSkill {

    id_hardSkill : number;
    lenguaje : string = "";
    porcentaje : number = 0;
    url: string = "";
    constructor (id: number, lenguaje : string, porcentaje: number, url: string){

        this.id_hardSkill = id;
        this.lenguaje = lenguaje;
        this.porcentaje = porcentaje;
        this.url = url;
    }
}

