export class CardSoftSkill {

    id_SoftSkill : number;
    skill : string = "";
    urlImagen: string = "";
    constructor (id: number, skill : string, url: string){

        this.id_SoftSkill = id;
        this.skill = skill;
        this.urlImagen = url;
    }
}

