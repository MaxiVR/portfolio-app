import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css']
})
export class BtnEditComponent implements OnInit {
  
  @Input() targetModal?: string;
  @Input () i:number = 0;
  @Output () add : EventEmitter<Event> = new EventEmitter;
  @Output () delete : EventEmitter<Event> = new EventEmitter;


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  addInfo($event: any){
    this.add.emit($event);
  }

  deleteInfo($event: any){
    this.delete.emit($event);
  }

  isAdmin():boolean{
    return this.authService.logIn;
  }

}
