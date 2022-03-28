import { Component, OnInit, Input } from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';
import { ServicioEduService } from 'src/app/servicios/servicio-edu.service';



@Component({
  selector: 'app-card-edu',
  templateUrl: './card-edu.component.html',
  styleUrls: ['./card-edu.component.css']
})
export class CardEduComponent implements OnInit {
  
  @Input() cardEdu : CardEdu[] = [ ]
  
  inputInstitucion:string="";
  inputInicio:string = "";
  inputFin: string = "";
  index: number = 0;
  

  constructor(private authService:AuthService, private servicioEdu:ServicioEduService) { }

  ngOnInit(): void {

  }

  guardarInfo(){
    
    this.cardEdu[this.index].nombreInstitucion = this.inputInstitucion;
    this.cardEdu[this.index].fechaInicio = this.inputInicio;
    this.cardEdu[this.index].fechaFin = this.inputFin;
    this.servicioEdu.updateEducacion(this.cardEdu[this.index], this.cardEdu[this.index].id_edu).subscribe();
  }

  eliminarInfo($event: any){
    let id_div = $event.target.id - 1;
    let id = this.cardEdu[$event.target.id - 1].id_edu;
    this.servicioEdu.deleteEducacion(id).subscribe(() => (this.cardEdu = this.cardEdu.filter(t => t.id_edu !== this.cardEdu[id_div].id_edu)))
  }

  actulizarId_Info($event: any){
    this.index = $event.target.id - 1;
    this.inputInstitucion = this.cardEdu[this.index].nombreInstitucion;
    this.inputInicio = this.cardEdu[this.index].fechaInicio;
    this.inputFin = this.cardEdu[this.index].fechaFin;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardEdu, event.previousIndex, event.currentIndex);
    }
  }
}

