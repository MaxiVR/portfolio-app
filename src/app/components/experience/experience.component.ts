import { Component, OnInit } from '@angular/core';
import { CardExp } from 'src/app/cardExp.model';
import { ServicioExpService } from 'src/app/servicios/servicio-exp.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  cardExp: CardExp[] = [];

  id:number = 0;

  constructor(private servicioExp:ServicioExpService) { 
    this.cardExp = this.servicioExp.cardExp;
  }

  ngOnInit(): void {
  }

  agregarCampos(){
    this.id = this.cardExp.length;
    let newCampo = new CardExp("", "", "", this.id);
    this.cardExp.push(newCampo);
  }

}
