import { Component, OnInit } from '@angular/core';
import { CardSoftSkill } from 'src/app/cardSoftSkill.model';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  cardSoftSkill : CardSoftSkill [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarCampos(){
    const newCard : CardSoftSkill = new CardSoftSkill (0, "", "");
    this.cardSoftSkill.push(newCard);
  }

}
