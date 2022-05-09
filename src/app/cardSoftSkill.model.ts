export class CardSoftSkill {

    id_softSkill : number;
    skill : string = "";
    urlImagen: string = "";
    constructor (id: number, skill : string, url: string){

        this.id_softSkill = id;
        this.skill = skill;
        this.urlImagen = url;
    }
}

