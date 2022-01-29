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

  private apiURL = 'http://localHost:5000/educacion';

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL, newCampo, httpOption)
  }

  updateEducacion(cardEdu: CardEdu): Observable<any>{
    const url = `${this.apiURL}/${cardEdu.id}`
    return this.http.put<any>(url, cardEdu, httpOption)
  }

  deleteEducacion(cardEdu: CardEdu): Observable<any>{
      const url = `${this.apiURL}/${cardEdu.id}`;
      return this.http.delete<any>(url);
    }

}

