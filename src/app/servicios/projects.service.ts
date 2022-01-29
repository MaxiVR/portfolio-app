import { Injectable } from '@angular/core';
import { CardProject } from '../cardProject.model'; 
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
export class ProjectsService {

  private apiURL = 'http://localHost:5000/proyectos'

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL, newCampo, httpOption)
  }

  updateProyecto(cardProject: CardProject): Observable<any>{
    const url = `${this.apiURL}/${cardProject.id}`
    return this.http.put<any>(url, cardProject, httpOption)
  }

  deleteProyecto(cardProject: CardProject): Observable<any>{
      const url = `${this.apiURL}/${cardProject.id}`;
      return this.http.delete<any>(url);
    }

}
