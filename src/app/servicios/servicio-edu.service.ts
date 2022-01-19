import { Injectable } from '@angular/core';
import { CardEdu } from '../cardEdu.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioEduService {

  
cardEdu : CardEdu[]=[
  new CardEdu ("Inst 1", "Marzo a Abril 2010", 0 ),
  new CardEdu ("Inst 2", "Marzo a Abril 2015", 1 ),
  new CardEdu ("Inst 3", "Marzo a Abril 2018", 2 ),
  ]

  constructor() { }

  
  agregarCamposServicio(){
    let newCampo = new CardEdu("", "", this.cardEdu.length );
    this.cardEdu.push(newCampo);
  }

  agregarInfoServicio(index:number, institucion:string, periodo: string){
    this.cardEdu[index].institucion = institucion;
    this.cardEdu[index].periodo= periodo;
  }

  eliminarInfoServicio(id: number){
    this.cardEdu.splice(id - 1, 1);
  }

  
}
