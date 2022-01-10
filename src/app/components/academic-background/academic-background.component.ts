import { Component, OnInit} from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';

@Component({
  selector: 'app-academic-background',
  templateUrl: './academic-background.component.html',
  styleUrls: ['./academic-background.component.css']
})
export class AcademicBackgroundComponent implements OnInit {

cardEdu : CardEdu[]=[
      new CardEdu ("Inst 1", "Marzo a Abril 2010", 0 ),
      new CardEdu ("Inst 2", "Marzo a Abril 2015", 1 ),
  ]

  id:number = 0;
  index:number = 0;
   
  constructor() { }

  ngOnInit(): void {
  }

  agregarCamposEdu(){
    this.id = this.cardEdu.length;
    let newCampo = new CardEdu("", "", this.id);
    this.cardEdu.push(newCampo);
  }
}
