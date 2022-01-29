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

  private apiURL = 'http://localHost:5000/experiencia';

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL, newCampo, httpOption)
  }

  updateExperiencia(cardExp: CardExp): Observable<any>{
    const url = `${this.apiURL}/${cardExp.id}`
    return this.http.put<any>(url, cardExp, httpOption)
  }

  deleteExperiencia(cardExp: CardExp): Observable<any>{
      const url = `${this.apiURL}/${cardExp.id}`;
      return this.http.delete<any>(url);
    }

}
