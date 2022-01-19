import { Component, OnInit, Input } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model';
import { ProjectsService } from 'src/app/servicios/projects.service'


@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() cardProject : CardProject [] = [];

  inputTitulo: string = "";
  inputComentario: string = "";
  index:number = 0;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.projectsService.agregarInfoServicio(this.index, this.inputTitulo, this.inputComentario)
    this.inputTitulo = "";
    this.inputComentario= "";
  }

  eliminarInfo($event: any){
    this.projectsService.eliminarInfo($event.target.id)
  }


  identicarDiv($event: any){
    this.index = $event.target.id - 1;
  }

}
