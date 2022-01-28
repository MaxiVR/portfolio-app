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

  
  inputEmpresa:string = "";
  inputPuesto: string = "";
  inputPeriodo: string = "";
  index:number = 0;


  constructor(private authService:AuthService, private servicioExp:ServicioExpService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.cardExp[this.index].nombreEmpresa = this.inputEmpresa;
    this.cardExp[this.index].puesto = this.inputPuesto;
    this.cardExp[this.index].periodo = this.inputPeriodo;
    this.servicioExp.updateExperiencia(this.cardExp[this.index]).subscribe();
    this.inputEmpresa = "";
    this.inputPuesto= "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.index = $event.target.id - 1;
    this.servicioExp.deleteExperiencia(this.cardExp[this.index])
    .subscribe(() => (this.cardExp = this.cardExp.splice(this.index, 1)));
    this.servicioExp.getData().subscribe(data => { console.log(data)
      this.cardExp = data})
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

