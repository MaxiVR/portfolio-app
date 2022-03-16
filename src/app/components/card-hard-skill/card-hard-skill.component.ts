import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { CardHardSkill } from 'src/app/cardHardSkill.model';
import { AuthService } from 'src/app/servicios/auth.service';

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

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  agregarInfo(){
    
  }

  sendId ($event: any){

  }

  eliminarInfo($event: any){

  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardHardSkill, event.previousIndex, event.currentIndex);
    }
  }
}
