import { Component, OnInit, Input } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model';


@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() cardProject : CardProject [] = [];

  inputTitulo: string = "";
  inputComentario: string = "";
  id: number = 0;
  index:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  agregarInfo($event: any){
    this.cardProject[this.index].titulo = this.inputTitulo;
    this.cardProject[this.index].comentario= this.inputComentario;
    this.inputTitulo = "";
    this.inputComentario= "";
  }

  eliminarInfo($event: any){
    this.cardProject.splice($event.target.id - 1, 1)
  }


  identicarDiv($event: any){
    this.index = $event.target.id - 1;
    console.log(this.index)
  }

}
