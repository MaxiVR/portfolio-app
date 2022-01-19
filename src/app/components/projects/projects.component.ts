import { Component, OnInit } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model'
import { ProjectsService } from 'src/app/servicios/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  cardProject: CardProject[] = [];

  constructor(private projectsService:ProjectsService) { 

    this.cardProject = this.projectsService.cardProject;
  }

  ngOnInit(): void {
  }


  agregarCamposProject(){
    this.projectsService.agregarCampoServicio("Titulo del Proyecto", "Comenta tu proyecto", this.cardProject.length);
    
  }

}
