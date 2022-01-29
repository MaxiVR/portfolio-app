export class CardProject {

    tituloProyecto: string = "";
    comentario: string = "";
    id: number = 0;

    constructor(titulo:string, comentario: string, id: number) { 

        this.tituloProyecto = titulo;
        this.comentario = comentario;
        this.id = id;


    }

}