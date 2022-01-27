import { Injectable } from '@angular/core';
import { CardPerfil } from '../cardPerfil.model';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioHeaderService {
  
  
    
  myImage: any = "https://img.freepik.com/vector-gratis/dibujos-animados-cara-hombre-joven_18591-59097.jpg?size=338&ext=jpg"
  
  constructor(private http:HttpClient) { }

  getPersona(): Observable<any> {
    return this.http.get<any>('assets/data/persona.json');
  }

  cambiarDatosServicio(nombre:string):Observable<any> {
    return this.http.put<any>('assets/data/persona.json', nombre);
    
  }

/*
  cambiarDatosServicio(nombre:string, lugar: string) {
    this.cardPerfil[0].nombre = nombre;
    this.cardPerfil[0].ubicacion = lugar;
  }*/

  
}
