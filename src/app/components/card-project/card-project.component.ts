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
  inputDescripcion: string = "";
  index:number = 0;

  constructor(private authService:AuthService, private projectsService:ProjectsService ) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.cardProject[this.index].nombreProyecto = this.inputProyecto;
    this.cardProject[this.index].descripcionProyecto= this.inputDescripcion;
    this.projectsService.updateProyecto(this.cardProject[this.index], this.cardProject[this.index].id_proyecto).subscribe();
    this.inputProyecto = "";
    this.inputDescripcion = "";
  }

  eliminarInfo($event: any){
    console.log ( $event.target.id );
    let id_div =  $event.target.id - 1;
    let id = this.cardProject[$event.target.id - 1].id_proyecto;
    console.log (id);
    this.projectsService.deleteProyecto(id)
    .subscribe(() => (this.cardProject = this.cardProject.filter(t => t.id_proyecto !== this.cardProject[id_div].id_proyecto)))
    
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
