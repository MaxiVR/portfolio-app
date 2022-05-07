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
    const newCard : CardHardSkill = new CardHardSkill (0, "", 0, "");
    this.hardSkillService.addCampo(newCard).subscribe(newCard => (this.cardHardSkill.push(newCard)));
    setTimeout (() => {this.ngOnInit();}, 100);
  }

}
