import { Injectable } from '@angular/core';
import { CardPerfil } from '../cardPerfil.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioHeaderService {
  
  myImage: any = "https://img.freepik.com/vector-gratis/dibujos-animados-cara-hombre-joven_18591-59097.jpg?size=338&ext=jpg"
  
  cardPerfil : CardPerfil[] = [

    new CardPerfil ("Maximiliano Vazquez", "La Plata, Bs As - Argentina")
   ]

  constructor() { }

  cambiarDatosServicio(nombre:string, lugar: string) {
    this.cardPerfil[0].nombre = nombre;
    this.cardPerfil[0].ubicacion = lugar;
  }
}
