import { Injectable } from '@angular/core';
import { CardHardSkill } from "../cardHardSkill.model";
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
export class HardSkillService {

  private apiURL = 'http://localHost:8080/persona/hardskill/'

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + "ver/todo");
  }
  
  addCampo(newCampo:any): Observable<any>{
    return this.http.post<any>(this.apiURL + "new", newCampo, httpOption)
  }

  updateSkill(cardHardSkill: CardHardSkill, id: number): Observable<any>{
    return this.http.patch<any>(this.apiURL + "modificar/" + id, cardHardSkill, httpOption)
  }

  deleteSkill(id: number): Observable<any>{
      return this.http.delete<any>(this.apiURL + "delete/" + id);
    }

}
