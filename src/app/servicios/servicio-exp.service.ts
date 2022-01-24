import { Injectable } from '@angular/core';
import { CardExp } from '../cardExp.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioExpService {

  cardExp: CardExp[] = [
      
    new CardExp ("Empresa 1", "Julio 2011 a Agosto 2016", "Administrativo", 0),
    new CardExp ("Empresa 2", "Julio 2013 a Agosto 2016", "Administrativo", 1),
    new CardExp ("Empresa 3", "Mayo 2015 a Agosto 2014", "Administrativo", 2),
]

  constructor() { }

  agregarCampoServicio(){
    let newCampo = new CardExp("", "", "", this.cardExp.length );
    this.cardExp.push(newCampo);
  }

  agregarInfoServicio(index:number, empresa:string, puesto: string, periodo: string){
    this.cardExp[index].empresa = empresa;
    this.cardExp[index].puesto= puesto;
    this.cardExp[index].periodo= periodo;
  }

  eliminarInfoServicio(id: number){
    this.cardExp.splice(id - 1, 1);
  }


}
