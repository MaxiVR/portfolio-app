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

  constructor(private servicioExp:ServicioExpService) { 
  this.servicioExp.getData().subscribe(data => { console.log(data)
      this.cardExp = data})
  }

  ngOnInit(): void {
    
  }

  agregarCampos(){
    console.log(this.cardExp);
    const newCard = {nombreEmpresa:"", puesto:"", periodo:"" };
    this.servicioExp.addCampo(newCard).subscribe(newCard => (this.cardExp.push(newCard)));
    this.servicioExp.getData().subscribe(data => { console.log(data)
      this.cardExp = data})
  }

}
