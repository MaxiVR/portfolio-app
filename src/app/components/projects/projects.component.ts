import { Component, OnInit } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model'
import { ProjectsService } from 'src/app/servicios/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  cardProject: CardProject[] = [ ];

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getData().subscribe (data => {this.cardProject = data});
  }


  agregarCampos(){
    let newCard = {tituloProyecto:"Ingrese Titulo del Proyecto", comentario:"Comente aquí su proyecto" };
    this.projectsService.addCampo(newCard).subscribe((newCard) => (this.cardProject.push(newCard)));
    this.ngOnInit();
  }

}
