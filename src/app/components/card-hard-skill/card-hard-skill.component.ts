import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  index : number = 0;

  formHardSkill : FormGroup;

  constructor(private authService:AuthService, private hardSkillService: HardSkillService) { 

    this.formHardSkill = new FormGroup({
      lenguaje: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      porcentaje: new FormControl ('',[Validators.required, Validators.pattern("^[0-9]*$")]),
      urlImagen: new FormControl ('',[Validators.required, Validators.minLength(20)]),
    })
  }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.index);
    this.cardHardSkill[this.index].lenguaje = this.formHardSkill.value.lenguaje;
    this.cardHardSkill[this.index].porcentaje = this.formHardSkill.value.porcentaje;
    this.cardHardSkill[this.index].urlImagen = this.formHardSkill.value.urlImagen;
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
    this.formHardSkill.setValue({
      lenguaje : this.cardHardSkill[this.index].lenguaje,
      porcentaje : this.cardHardSkill[this.index].porcentaje,
      urlImagen : this.cardHardSkill[this.index].urlImagen,
    }) 
  }

  get Lenguaje (): any {
    return this.formHardSkill.get("lenguaje");
   }
   
  get Porcentaje (): any {
    return this.formHardSkill.get("porcentaje");
  } 

  get UrlImagen (): any {
    return this.formHardSkill.get("urlImagen");
  } 

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardHardSkill, event.previousIndex, event.currentIndex);
    }
  }
}
