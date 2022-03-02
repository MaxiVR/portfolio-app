import { Injectable } from '@angular/core';
import { CardEdu } from '../cardEdu.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ServicioEduService {

  edu : CardEdu[] = [ ];

  private apiURL = "http://localhost:8080/persona/";

  constructor(private http:HttpClient) { }

  data() {
    this.getData().subscribe(data => { this.edu = data});
    
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + "educacion/ver/todo");
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL + "educacion/new", newCampo, httpOption)
  }

  updateEducacion(cardEdu: CardEdu, id: number): Observable<any>{
    const url = this.apiURL + "educacion/modificar/" + id;
    return this.http.patch<any>(url, cardEdu, httpOption)
  }

  deleteEducacion(id: number): Observable<any>{
      const url = this.apiURL + "educacion/delete/" + id;
      return this.http.delete<any>(url);
    }

}

