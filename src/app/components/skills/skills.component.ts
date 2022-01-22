import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  ocultar : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ocultarDiv(){
    this.ocultar=!this.ocultar
  }

}
