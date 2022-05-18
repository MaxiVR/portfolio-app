import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioHeaderService {

  private apiURL = "https://api-portfolio-maxivr.herokuapp.com/persona/";
  
  
  constructor(private http:HttpClient) { }

  getData(id: number): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/" + id);
  }

  updatePerfil(nombre:string, apellido: string, ubicacion: string, fechaNac: string, email:string, urlFoto:string, id : number):Observable<any> {
    return this.http.patch<any>(this.apiURL + "modificar/" + id , 
    {'nombre':nombre, 'apellido':apellido, 'ubicacion':ubicacion, 'fechaNac':fechaNac, 'email':email, 'url_foto':urlFoto});
  }

  updateAbout(about:string, id:number):Observable<any>{
    console.log(about);
    return this.http.patch<any>(this.apiURL + "modificar/" + id, {'sobre_mi':about});
  }

}
