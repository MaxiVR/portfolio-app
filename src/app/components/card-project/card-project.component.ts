import { Component, OnInit, Input } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';
import { ProjectsService } from 'src/app/servicios/projects.service';


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

  constructor(private authService:AuthService, private projectsService:ProjectsService ) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.projectsService.agregarInfoServicio(this.index, this.inputTitulo, this.inputComentario);
    this.inputTitulo = "";
    this.inputComentario= "";
  }

  eliminarInfo($event: any){
    this.projectsService.eliminarInfo($event.target.id)
  }

  
  sendId($event: any){
    this.index = $event.target.id - 1;
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardProject, event.previousIndex, event.currentIndex);
    }
  }

}
