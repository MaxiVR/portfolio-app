export class CardProject {

    nombreProyecto: string = "";
    descripcionProyecto: string = "";
    id_proyecto: number = 0;

    constructor(proyecto:string, descripcion: string, id: number) { 

        this.nombreProyecto = proyecto;
        this.descripcionProyecto = descripcion;
        this.id_proyecto = id;


    }

}