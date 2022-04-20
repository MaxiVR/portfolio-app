import { Component, OnInit } from '@angular/core';
import { CardHardSkill } from 'src/app/cardHardSkill.model';
import { HardSkillService } from 'src/app/servicios/hard-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  cardHardSkill : CardHardSkill[] = [];

  constructor(private hardSkillService: HardSkillService) { }

  ngOnInit(): void {
    this.hardSkillService.getData().subscribe(data => this.cardHardSkill = data)
  }

  agregarCampos(){
    let newCard = {lenguaje:"", porcentaje:0, url: ""};
    this.hardSkillService.addCampo(newCard).subscribe(newCard => (this.cardHardSkill.push(newCard)));
    setTimeout (() => {this.hardSkillService.getData().subscribe(data => { this.cardHardSkill = data});}, 600);
  }

}
