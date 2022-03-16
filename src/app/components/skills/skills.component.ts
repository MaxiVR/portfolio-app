import { Component, OnInit } from '@angular/core';
import { CardHardSkill } from 'src/app/cardHardSkill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  cardHardSkill : CardHardSkill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarCampos(){
    const newCard = {lenguaje:"", porcentaje:10, url: ""};
    this.cardHardSkill.push(newCard);
    //this.-----.addCampo(newCard).subscribe(newCard => (this.cardHardSkill.push(newCard)));

  }

}
