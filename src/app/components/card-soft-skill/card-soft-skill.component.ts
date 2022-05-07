import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardSoftSkill } from 'src/app/cardSoftSkill.model';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-card-soft-skill',
  templateUrl: './card-soft-skill.component.html',
  styleUrls: ['./card-soft-skill.component.css']
})
export class CardSoftSkillComponent implements OnInit {

  @Input() cardSoftSkill : CardSoftSkill [] = [];

  index : number = 0;

  formSoftSkill : FormGroup;

  constructor(private authService:AuthService) {

    this.formSoftSkill = new FormGroup({
      skill: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      urlImagen: new FormControl ('',[Validators.required, Validators.minLength(20)]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
   
   
  }

  eliminarInfo($event: any){
    
  }  
  actulizarId_Info($event: any){
   
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
