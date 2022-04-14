import { Injectable } from '@angular/core'; 
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { formMail } from '../formContact.model'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormContactService {

  private apiURL = 'http://localHost:8080/persona/sendMail'

  constructor(private http:HttpClient) { }

  sendMail(mail : formMail): Observable<any> { 
    console.log (mail);
    let json =  JSON.stringify(mail);
    console.log(json);
    return this.http.post<any>(this.apiURL, json, httpOption);
  }

}