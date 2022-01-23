import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://reqres.in/api/login'; /* apiFake para testear*/
  token : any;

  constructor(private http:HttpClient, private router:Router) { }

  login (email:string, password: string){
    this.http.post (this.url , {email: email, password: password})
    .subscribe((resp:any) => {
      this.router.navigate(['']);
      localStorage.setItem('auth_toke', resp.token);
      console.log(resp.token);
      
    })
  }

  logout(){
    localStorage.removeItem('auth_toke');
  }

  get logIn(): boolean{
    return (localStorage.getItem('auth_toke') !== null);
  }


}
