import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-btn-pencil',
  templateUrl: './btn-pencil.component.html',
  styleUrls: ['./btn-pencil.component.css']
})
export class BtnPencilComponent implements OnInit {

  @Input() targetModal?: string;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin():boolean{
    return this.authService.logIn;
  }

}
