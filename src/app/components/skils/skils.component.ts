import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {

  ocultar : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ocultarDiv(){
    this.ocultar=!this.ocultar
  }

}
