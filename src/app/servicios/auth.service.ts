import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://api-portfolio-maxivr.herokuapp.com/persona/auth/login'; 
  token : any;
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient, private router:Router) { 
    console.log("El servicio auth está corriendo");
    this.currentUserSubject = new BehaviorSubject<any> (JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  login (email:string, password: string):Observable<any>{
    /**this.http.post(this.url , {email: email, password: password})
    .subscribe((resp:any) => {
      this.router.navigate(['editar']);
      localStorage.setItem('auth_toke', resp.token);
      console.log(resp.token);
    }, err => {
      // Entra aquí si el servicio entrega un código http de error
      alert("Usuario o contraseña inconrecta");
  } )**/
    return this.http.post(this.url, {email: email, password: password}).pipe(map(data =>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;}))
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    console.log("Sesion Cerrada");
  }

  get logIn(): boolean{
    return (sessionStorage.getItem('currentUser') !== null);
  }


}
