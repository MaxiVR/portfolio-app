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

  inputProyecto: string = "";
  inputComentario: string = "";
  index:number = 0;

  constructor(private authService:AuthService, private projectsService:ProjectsService ) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.cardProject[this.index].tituloProyecto = this.inputProyecto;
    this.cardProject[this.index].comentario = this.inputComentario;
    this.projectsService.updateProyecto(this.cardProject[this.index]).subscribe();
    this.inputProyecto = "";
    this.inputComentario = "";
  }

  eliminarInfo($event: any){
     let i = $event.target.id - 1;
    this.projectsService.deleteProyecto(this.cardProject[i])
    .subscribe(() => (this.cardProject = this.cardProject.filter(t => t.id !== this.cardProject[i].id)))
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
