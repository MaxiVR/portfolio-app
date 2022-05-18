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

  private apiURL = "https://api-portfolio-maxivr.herokuapp.com/persona/educacion/";

  constructor(private http:HttpClient) { }

 
  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/todo");
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL + "new", newCampo, httpOption)
  }

  updateEducacion(cardEdu: CardEdu, id: number): Observable<any>{
    const url = this.apiURL + "modificar/" + id;
    return this.http.patch<any>(url, cardEdu, httpOption)
  }

  deleteEducacion(id: number): Observable<any>{
      const url = this.apiURL + "delete/" + id;
      return this.http.delete<any>(url);
    }

}

