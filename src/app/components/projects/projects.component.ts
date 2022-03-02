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
    let newCard = {nombreProyecto:"Ingrese Titulo del Proyecto", descripcionProyecto:"Comente aquí su proyecto" };
    this.projectsService.addCampo(newCard).subscribe((newCard) => (this.cardProject.push(newCard)));
    setTimeout (() => {this.projectsService.getData().subscribe(data => { this.cardProject = data});}, 600);

  }

}
