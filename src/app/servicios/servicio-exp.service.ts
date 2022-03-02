import { Injectable } from '@angular/core';
import { CardExp } from '../cardExp.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServicioExpService {

  private apiURL = 'http://localHost:8080/persona/trabajo/';

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/todo");
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL + "new", newCampo, httpOption)
  }

  updateExperiencia(cardExp: CardExp,  id: number): Observable<any>{
    return this.http.patch<any>(this.apiURL + "modificar/" + id, cardExp, httpOption)
  }

  deleteExperiencia(id: number): Observable<any>{
      const url = this.apiURL + "delete/" + id;
      return this.http.delete<any>(url);
    }

}
