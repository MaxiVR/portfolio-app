import { Component, OnInit, Input } from '@angular/core';
import { CardExp } from 'src/app/cardExp.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';


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


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.cardExp[this.index].empresa = this.inputEmpresa;
    this.cardExp[this.index].puesto= this.inputPuesto;
    this.cardExp[this.index].periodo= this.inputPeriodo;
    this.inputEmpresa = "";
    this.inputPuesto= "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.cardExp.splice($event.target.id - 1, 1)
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


