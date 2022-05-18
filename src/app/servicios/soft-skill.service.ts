import { Injectable } from '@angular/core';
import { CardSoftSkill } from "../cardSoftSkill.model";
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
export class SoftSkillService {

  private apiURL = 'https://api-portfolio-maxivr.herokuapp.com/persona/softskill/'

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/todo");
  }
  
  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL + "new", newCampo, httpOption)
  }

  updateSkill(cardSoftSkill: CardSoftSkill, id: number): Observable<any>{
    return this.http.patch<any>(this.apiURL + "modificar/" + id, cardSoftSkill, httpOption)
  }

  deleteSkill(id: number): Observable<any>{
      return this.http.delete<any>(this.apiURL + "delete/" + id);
    }

}
