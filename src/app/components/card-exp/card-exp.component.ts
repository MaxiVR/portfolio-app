import { Component, OnInit, Input } from '@angular/core';
import { CardExp } from 'src/app/cardExp.model';
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


  constructor(private servicioExp:ServicioExpService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.servicioExp.agregarInfoServicio(this.index, this.inputEmpresa, this.inputPuesto, this.inputPeriodo)
    this.inputEmpresa = "";
    this.inputPuesto= "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.servicioExp.eliminarInfoServicio($event.target.id);
  }

  
  identicarDiv($event: any){
    this.index = $event.target.id - 1;

  }
}


function empresa(index: number, empresa: any) {
  throw new Error('Function not implemented.');
}

