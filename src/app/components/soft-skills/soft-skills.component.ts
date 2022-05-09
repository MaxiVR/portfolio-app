import { Component, OnInit } from '@angular/core';
import { CardSoftSkill } from 'src/app/cardSoftSkill.model';
import { SoftSkillService } from 'src/app/servicios/soft-skill.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  cardSoftSkill : CardSoftSkill [] = [];

  constructor(private softSkillService:SoftSkillService) { }

  ngOnInit(): void {
    this.softSkillService.getData().subscribe(data => this.cardSoftSkill = data)
  }

  agregarCampos(){
    const newCard : CardSoftSkill = new CardSoftSkill (0, "", "");
    this.softSkillService.addCampo(newCard).subscribe(newCard => (this.cardSoftSkill.push(newCard)));
    setTimeout (() => {this.ngOnInit();}, 100);
  }

}
