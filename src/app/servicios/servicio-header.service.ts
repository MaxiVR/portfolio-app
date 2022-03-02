import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioHeaderService {

  private apiURL = "http://localhost:8080/persona/";
  
  
  constructor(private http:HttpClient) { }

  getData(id: number): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/" + id);
    console.log("anda");
  }

  updatePerfil(nombre:string, apellido: string, ubicacion: string, myImage:string):Observable<any> {
    return this.http.patch<any>(this.apiURL + "modificar/1" , 
    {'nombre':nombre, 'apellido':apellido, 'ubicacion':ubicacion});
  }

  updateAbout(about:string):Observable<any>{
    console.log(about);
    return this.http.patch<any>(this.apiURL + "modificar/1", {"sobre_mi":about});
  }

}
