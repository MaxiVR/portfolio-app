import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private authService:AuthService ) { }

  ngOnInit(): void {
  }

  isAdmin():boolean{
    return this.authService.logIn;
  }

  logout(){
    this.authService.logout();
    window.location.reload();
  }

}
