import { Injectable } from '@angular/core';
import { CardEdu } from '../cardEdu.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioEduService {

  
cardEdu : CardEdu[]=[
  new CardEdu ("Inst 1", "Marzo a Abril 2010", 0 ),
  new CardEdu ("Inst 2", "Marzo a Abril 2015", 1 ),
  ]

  id:number = 0;

  constructor() { }

  
  agregarCamposEduServicio(){
    this.id = this.cardEdu.length;
    let newCampo = new CardEdu("", "", this.id);
    this.cardEdu.push(newCampo);
  }

  agregarInfoServicio(index:number, institucion:string, periodo: string){
    this.cardEdu[index].institucion = institucion;
    this.cardEdu[index].periodo= periodo;
  }
}
