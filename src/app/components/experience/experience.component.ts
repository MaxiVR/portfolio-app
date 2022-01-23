import { Component, OnInit } from '@angular/core';
import { CardExp } from 'src/app/cardExp.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  cardExp: CardExp[] = [
      
      new CardExp ("Empresa 1", "Julio 2011 a Agosto 2016", "Administrativo", 0),
      new CardExp ("Empresa 2", "Julio 2013 a Agosto 2016", "Administrativo", 1),
      new CardExp ("Empresa 3", "Mayo 2015 a Agosto 2014", "Administrativo", 2),
  ]

  id:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  agregarCampos(){
    this.id = this.cardExp.length;
    let newCampo = new CardExp("", "", "", this.id);
    this.cardExp.push(newCampo);
  }

}
