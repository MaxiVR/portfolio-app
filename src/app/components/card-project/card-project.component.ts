import { Component, OnInit, Input } from '@angular/core';
import { CardProject } from 'src/app/cardProject.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() cardProject : CardProject [] = [];

  index:number = 0;

  formProyecto : FormGroup

  constructor(private authService:AuthService, private projectsService:ProjectsService ) {

    this.formProyecto = new FormGroup ({

      proyecto: new FormControl ('',[Validators.required, Validators.minLength(4)]),
      descripcion: new FormControl ('', [Validators.required, Validators.minLength(20)]),

    })    

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cardProject[this.index].nombreProyecto = this.formProyecto.value.proyecto;
    this.cardProject[this.index].descripcionProyecto= this.formProyecto.value.descripcion;
    this.projectsService.updateProyecto(this.cardProject[this.index], this.cardProject[this.index].id_proyecto).subscribe();
  }

  eliminarInfo($event: any){
    console.log ( $event.target.id );
    let id_div =  $event.target.id - 1;
    let id = this.cardProject[$event.target.id - 1].id_proyecto;
    console.log (id);
    this.projectsService.deleteProyecto(id)
    .subscribe(() => (this.cardProject = this.cardProject.filter(t => t.id_proyecto !== this.cardProject[id_div].id_proyecto)))
    
  }

  actulizarId_Info($event: any){
    this.index = $event.target.id - 1;
    this.formProyecto.setValue({
      proyecto: this.cardProject[this.index].nombreProyecto,
      descripcion : this.cardProject[this.index].descripcionProyecto
    }) 
  }

  get Proyecto (): any {
    return this.formProyecto.get("proyecto");
  }

   get Descripcion (): any {
    return this.formProyecto.get("descripcion");
  }
    
   

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardProject, event.previousIndex, event.currentIndex);
    }
  }

  isAdmin():boolean{
    return this.authService.logIn;
  }

}
