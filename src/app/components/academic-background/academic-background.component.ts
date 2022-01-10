import { Component, OnInit } from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';

@Component({
  selector: 'app-academic-background',
  templateUrl: './academic-background.component.html',
  styleUrls: ['./academic-background.component.css']
})
export class AcademicBackgroundComponent implements OnInit {

  cardEdu : CardEdu[]=[

    new CardEdu ("Inst 1", "Marzo a Abril 2010", 0 ),
    new CardEdu ("Inst 2", "Marzo a Abril 2015", 1 ),

  ]

  inputInstitucion:string="";
  inputPeriodo:string = "";
  id:number = 0;
  index:number = 0;
   
  constructor() { }

  ngOnInit(): void {
  }

  agregarCamposEdu(){
    this.id = this.cardEdu.length;
    let newCampo = new CardEdu("", "", this.id);
    this.cardEdu.push(newCampo);
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

