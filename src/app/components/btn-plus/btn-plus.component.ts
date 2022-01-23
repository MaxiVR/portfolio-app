import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.component.html',
  styleUrls: ['./btn-plus.component.css']
})
export class BtnPlusComponent implements OnInit {

  @Output() addCampo : EventEmitter<Event> = new EventEmitter;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  addCampos(){
    this.addCampo.emit();
  }

  isAdmin():boolean{
    return this.authService.logIn;
  }
}
