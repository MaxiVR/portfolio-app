import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { CardHardSkill } from 'src/app/cardHardSkill.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { HardSkillService } from 'src/app/servicios/hard-skill.service';

@Component({
  selector: 'app-card-hard-skill',
  templateUrl: './card-hard-skill.component.html',
  styleUrls: ['./card-hard-skill.component.css']
})
export class CardHardSkillComponent implements OnInit {

  @Input() cardHardSkill : CardHardSkill [] = []

  inputLenguaje : string = "";
  inputPorcentaje : number = 0;
  inputUrl : string = "";
  index : number = 0;

  constructor(private authService:AuthService, private hardSkillService: HardSkillService) { }

  ngOnInit(): void {
  }


  guardarInfo(){
    console.log(this.index);
    this.cardHardSkill[this.index].lenguaje = this.inputLenguaje;
    this.cardHardSkill[this.index].porcentaje = this.inputPorcentaje;
    this.cardHardSkill[this.index].urlImagen = this.inputUrl;
    this.hardSkillService.updateSkill(this.cardHardSkill[this.index], this.cardHardSkill[this.index].id_hardSkill).subscribe();
   
  }

  eliminarInfo($event: any){
    let id_div =  $event.target.id - 1;
    let id = this.cardHardSkill[$event.target.id - 1].id_hardSkill;
    console.log (id);
    this.hardSkillService.deleteSkill(id)
    .subscribe(() => (this.cardHardSkill = this.cardHardSkill.filter(t => t.id_hardSkill !== this.cardHardSkill[id_div].id_hardSkill)))
  }

  actulizarId_Info($event: any){
    this.index = $event.target.id - 1;
    this.inputLenguaje = this.cardHardSkill[this.index].lenguaje;
    this.inputPorcentaje =  this.cardHardSkill[this.index].porcentaje;
    this.inputUrl = this.cardHardSkill[this.index].urlImagen;
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardHardSkill, event.previousIndex, event.currentIndex);
    }
  }
}
