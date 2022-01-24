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
  inputPeriodo:string = "";
  index: number = 0;

  constructor(private authService:AuthService, private servicioEdu:ServicioEduService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.servicioEdu.agregarInfoServicio(this.index,  this.inputInstitucion, this.inputPeriodo)
    this.inputInstitucion = "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.servicioEdu.eliminarInfoServicio($event.target.id);
    
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

