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
    this.servicioExp.agregarInfoServicio(this.index, this.inputEmpresa, this.inputPuesto, this.inputPeriodo);
    this.inputEmpresa = "";
    this.inputPuesto= "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.servicioExp.eliminarInfoServicio($event.target.id);
  }

  sendId($event: any){
    this.index = $event.target.id - 1;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardExp, event.previousIndex, event.currentIndex);
    }
  }
}


function empresa(index: number, empresa: any) {
  throw new Error('Function not implemented.');
}

