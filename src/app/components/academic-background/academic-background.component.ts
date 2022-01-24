import { Component, OnInit} from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';
import { ServicioEduService } from 'src/app/servicios/servicio-edu.service';


@Component({
  selector: 'app-academic-background',
  templateUrl: './academic-background.component.html',
  styleUrls: ['./academic-background.component.css']
})
export class AcademicBackgroundComponent implements OnInit {

  cardEdu : CardEdu[]=[]
  id:number = 0;
  
  constructor(private servicioEdu:ServicioEduService) { }

 

  ngOnInit(): void {
  }

  agregarCampos(){
    this.id = this.cardEdu.length;
    let newCampo = new CardEdu("", "", this.id);
    this.cardEdu.push(newCampo);
  }
}
