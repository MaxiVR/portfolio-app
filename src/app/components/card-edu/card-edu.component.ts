import { Component, OnInit, Input } from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';


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

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  agregarInfo(){
    this.cardEdu[this.index].institucion = this.inputInstitucion;
    this.cardEdu[this.index].periodo= this.inputPeriodo;
    this.inputInstitucion = "";
    this.inputPeriodo = "";
  }

  eliminarInfo($event: any){
    this.cardEdu.splice($event.target.id - 1, 1)
  }

  
  sendId($event: any){
    this.index = $event.target.id - 1;
    
  }
  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardEdu, event.previousIndex, event.currentIndex);
  }
}

