import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioHeaderService {
  
  constructor(private http:HttpClient) { }

  update(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/persona');
  }

  cambiarDatosServicio(nombre:string, apellido: string, ubicacion: string, myImage:string):Observable<any> {
    return this.http.patch<any>('http://localhost:5000/persona', 
    {"nombre":nombre, "apellido": apellido, "ciudadProvincia":ubicacion, "url_foto": myImage});
    
  }

}
