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
  
  constructor(private servicioEdu:ServicioEduService) {  }

  ngOnInit(): void {
    this.servicioEdu.getData().subscribe(data => { this.cardEdu = data})
  }

  agregarCampos(){
    const newCard : CardEdu = new CardEdu ("", "", "", 0);
    this.servicioEdu.addCampo(newCard).subscribe((newCard) => (this.cardEdu.push(newCard)));
    setTimeout (() => {this.ngOnInit();}, 100);
    
  }
}
