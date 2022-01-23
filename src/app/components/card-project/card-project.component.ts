import { Component, OnInit, Input } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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

  agregarInfo(){
    this.cardProject[this.index].titulo = this.inputTitulo;
    this.cardProject[this.index].comentario= this.inputComentario;
    this.inputTitulo = "";
    this.inputComentario= "";
  }

  eliminarInfo($event: any){
    this.cardProject.splice($event.target.id - 1, 1)
  }

  
  sendId($event: any){
    this.index = $event.target.id - 1;
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardProject, event.previousIndex, event.currentIndex);
  }

}
