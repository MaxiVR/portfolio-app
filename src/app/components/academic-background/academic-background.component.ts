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

  constructor(private servicioEdu:ServicioEduService) { 

    this.cardEdu = this.servicioEdu.cardEdu;

  }

  ngOnInit(): void {
  }

  agregarCamposEdu(){
    
    this.servicioEdu.agregarCamposServicio();
    
  }
}
