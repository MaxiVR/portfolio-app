import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/persona/auth/login'; 
  token : any;

  constructor(private http:HttpClient, private router:Router) { }

  login (email:string, password: string){
    this.http.post(this.url , {email: email, password: password})
    .subscribe((resp:any) => {
      this.router.navigate(['editar']);
      localStorage.setItem('auth_toke', resp.token);
      console.log(resp.token);
      
    })
  }

  logout(){
    localStorage.removeItem('auth_toke');
    console.log("Sesion Cerrada");
  }

  get logIn(): boolean{
    return (localStorage.getItem('auth_toke') !== null);
  }


}
