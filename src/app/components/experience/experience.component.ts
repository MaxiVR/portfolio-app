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

  constructor(private servicioExp:ServicioExpService) { }

  ngOnInit(): void {
     this.servicioExp.getData().subscribe(data => { this.cardExp = data})
  }

  agregarCampos(){
    const newCard : CardExp = new CardExp ("", "", "", "", "", 0);
    this.servicioExp.addCampo(newCard).subscribe(newCard => (this.cardExp.push(newCard)));
    setTimeout (() => {this.ngOnInit();}, 100);
  }

}
