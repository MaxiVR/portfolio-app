import { Component, OnInit, Input } from '@angular/core';
import { CardExp } from 'src/app/cardExp.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';
import { ServicioExpService } from 'src/app/servicios/servicio-exp.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-exp',
  templateUrl: './card-exp.component.html',
  styleUrls: ['./card-exp.component.css']
})
export class CardExpComponent implements OnInit {

  @Input() cardExp : CardExp[] = [ ];

  index:number = 0;

  formExp : FormGroup;
  
  constructor(private authService:AuthService, private servicioExp:ServicioExpService) { 

    this.formExp= new FormGroup ({
      empresa: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      puesto: new FormControl ('',[Validators.required, Validators.minLength(5)]),
      fechaInicio: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      fechaFin: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      descripcion: new FormControl ('',[Validators.required, Validators.minLength(20)])
   })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cardExp[this.index].empresa = this.formExp.value.empresa;
    this.cardExp[this.index].puesto = this.formExp.value.puesto;
    this.cardExp[this.index].fechaInicio = this.formExp.value.fechaInicio;
    this.cardExp[this.index].fechaFin = this.formExp.value.fechaFin;
    this.cardExp[this.index].descripcionTrabajo = this.formExp.value.descripcion;
    this.servicioExp.updateExperiencia(this.cardExp[this.index], this.cardExp[this.index].id_trabajo).subscribe();
  }

  eliminarInfo($event: any){
    let id_div = $event.target.id - 1;
    let id = this.cardExp[$event.target.id - 1].id_trabajo;
    this.servicioExp.deleteExperiencia(id).subscribe(() => (this.cardExp = this.cardExp.filter(t => t.id_trabajo !== this.cardExp[id_div].id_trabajo)))
  }

  actulizarId_Info($event: any){
    this.index = $event.target.id - 1;
    this.formExp.setValue({
      institucion : this.cardExp[this.index].empresa,
      puesto : this.cardExp[this.index].puesto,
      fechaInicio : this.cardExp[this.index].fechaInicio,
      fechaFin : this.cardExp[this.index].fechaInicio,
      descripcion :  this.cardExp[this.index].descripcionTrabajo
    }) 
  } 

  get Empresa (): any {
    return this.formExp.get("empresa");
   }
  
   get Puesto (): any {
    return this.formExp.get("puesto");
   } 
   
  get FechaInicio (): any {
    return this.formExp.get("fechaInicio");
  } 

  get FechaFin (): any {
    return this.formExp.get("fechaFin");
  } 

  get Descripcion (): any {
    return this.formExp.get("descripcion");
   } 

  drop(event: CdkDragDrop<string[]>) {
    if (!this.authService.logIn){
      moveItemInArray(this.cardExp, event.previousIndex, event.currentIndex);
    }
  }
}

