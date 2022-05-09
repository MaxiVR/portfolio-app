import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardSoftSkill } from 'src/app/cardSoftSkill.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { SoftSkillService } from 'src/app/servicios/soft-skill.service';

@Component({
  selector: 'app-card-soft-skill',
  templateUrl: './card-soft-skill.component.html',
  styleUrls: ['./card-soft-skill.component.css']
})
export class CardSoftSkillComponent implements OnInit {

  @Input() cardSoftSkill : CardSoftSkill [] = [];

  index : number = 0;

  formSoftSkill : FormGroup;

  constructor(private authService:AuthService, private softSkillService:SoftSkillService) {

    this.formSoftSkill = new FormGroup({
      skill: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      urlImagen: new FormControl ('',[Validators.required, Validators.minLength(20)]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.index);
    this.cardSoftSkill[this.index].skill = this.formSoftSkill.value.skill;
    this.cardSoftSkill[this.index].urlImagen = this.formSoftSkill.value.urlImagen;
    this.softSkillService.updateSkill(this.cardSoftSkill[this.index], this.cardSoftSkill[this.index].id_softSkill).subscribe();
   
  }

  eliminarInfo($event: any){
    let id_div =  $event.target.id - 1;
    console.log (id_div);
    let id = this.cardSoftSkill[$event.target.id - 1].id_softSkill;
    console.log (this.cardSoftSkill[$event.target.id - 1]);
    this.softSkillService.deleteSkill(id).subscribe(() => (this.cardSoftSkill = this.cardSoftSkill.filter(t => t.id_softSkill !== this.cardSoftSkill[id_div].id_softSkill)))

  }  
  
  actulizarId_Info($event: any){
    this.index = $event.target.id - 1;
    this.formSoftSkill.setValue({
      skill : this.cardSoftSkill[this.index].skill,
      urlImagen : this.cardSoftSkill[this.index].urlImagen,
    })
  }

  get Skill (): any {
    return this.formSoftSkill.get("skill");
   }
   
  get UrlImagen (): any {
    return this.formSoftSkill.get("urlImagen");
  } 

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardSoftSkill, event.previousIndex, event.currentIndex);
    }
  }

}
