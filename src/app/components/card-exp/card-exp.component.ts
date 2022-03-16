import { Component, OnInit, Input } from '@angular/core';
import { CardExp } from 'src/app/cardExp.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';
import { ServicioExpService } from 'src/app/servicios/servicio-exp.service';


@Component({
  selector: 'app-card-exp',
  templateUrl: './card-exp.component.html',
  styleUrls: ['./card-exp.component.css']
})
export class CardExpComponent implements OnInit {

  @Input() cardExp : CardExp[] = [ ];

  
  inputEmpresa: string = "";
  inputPuesto: string = "";
  inputInicio: string = "";
  inputFin: string = "";
  inputDescripcion: string = "";
  index:number = 0;


  constructor(private authService:AuthService, private servicioExp:ServicioExpService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.cardExp[this.index].empresa = this.inputEmpresa;
    this.cardExp[this.index].puesto = this.inputPuesto;
    this.cardExp[this.index].fechaInicio = this.inputInicio;
    this.cardExp[this.index].fechaFin = this.inputFin;
    this.cardExp[this.index].descripcionTrabajo = this.inputDescripcion;
    this.servicioExp.updateExperiencia(this.cardExp[this.index], this.cardExp[this.index].id_trabajo).subscribe();
    this.inputEmpresa = " ";
    this.inputPuesto = " ";
    this.inputInicio = " ";
    this.inputFin = " ";
    this.inputDescripcion = " ";
  }

  eliminarInfo($event: any){
    let id_div = $event.target.id - 1;
    let id = this.cardExp[$event.target.id - 1].id_trabajo;
    this.servicioExp.deleteExperiencia(id).subscribe(() => (this.cardExp = this.cardExp.filter(t => t.id_trabajo !== this.cardExp[id_div].id_trabajo)))
  }

  sendId($event: any){
    this.index = $event.target.id - 1;
  } 

  drop(event: CdkDragDrop<string[]>) {
    if (!this.authService.logIn){
      moveItemInArray(this.cardExp, event.previousIndex, event.currentIndex);
    }
  }
}

