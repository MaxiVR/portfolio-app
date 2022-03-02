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

  agregarInfo(){
    
    this.cardEdu[this.index].nombreInstitucion = this.inputInstitucion;
    this.cardEdu[this.index].fechaInicio = this.inputInicio;
    this.cardEdu[this.index].fechaFin = this.inputFin;
    this.servicioEdu.updateEducacion(this.cardEdu[this.index], this.cardEdu[this.index].id_edu).subscribe();
    this.inputInstitucion = " ";
    this.inputInicio = " ";
    this.inputFin = " ";
  }

  eliminarInfo($event: any){
    console.log(this.cardEdu);
    console.log(this.cardEdu[$event.target.id - 1]);
    console.log(this.cardEdu[$event.target.id - 1].id_edu);
    let id = this.cardEdu[$event.target.id - 1].id_edu;
    /*this.servicioEdu.deleteEducacion(id)
    .subscribe(() => (this.cardEdu = this.cardEdu.splice(this.index, 1)));*/
    
    this.servicioEdu.deleteEducacion(id).subscribe(() => (this.cardEdu = this.cardEdu.filter(t => t.id_edu !== this.cardEdu[id].id_edu)))
    setTimeout (() => {this.servicioEdu.getData().subscribe(data => { this.cardEdu = data});}, 400);
  }

  sendId($event: any){
    this.index = $event.target.id - 1;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardEdu, event.previousIndex, event.currentIndex);
    }
  }
}

