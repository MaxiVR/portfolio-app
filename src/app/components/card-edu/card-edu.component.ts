import { Component, OnInit, Input } from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';

@Component({
  selector: 'app-card-edu',
  templateUrl: './card-edu.component.html',
  styleUrls: ['./card-edu.component.css']
})
export class CardEduComponent implements OnInit {
  @Input() cardEdu : CardEdu[]=[ ]

  inputInstitucion:string="";
  inputPeriodo:string = "";
  id:number = 0;
  index:number = 0;
   
  constructor() { }

  ngOnInit(): void {
  }

  agregarInfo($event: any){
    this.cardEdu[this.index].institucion = this.inputInstitucion;
    this.cardEdu[this.index].periodo= this.inputPeriodo;
    this.inputInstitucion = "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.cardEdu.splice($event.target.id - 1, 1)
  }

  
  identicarDiv($event: any){
    this.index = $event.target.id - 1;
  }
}

