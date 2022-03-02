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

  private apiURL = 'http://localHost:8080/persona/proyecto/'

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/todo");
  }

  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL + "new", newCampo, httpOption)
  }

  updateProyecto(cardProject: CardProject, id: number): Observable<any>{
    return this.http.patch<any>(this.apiURL + "modificar/" + id, cardProject, httpOption)
  }

  deleteProyecto(id: number): Observable<any>{
      return this.http.delete<any>(this.apiURL + "delete/" + id);
    }

}
