import { Component, OnInit, Input } from '@angular/core';
import { CardEdu } from 'src/app/cardEdu.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/servicios/auth.service';
import { ServicioEduService } from 'src/app/servicios/servicio-edu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-card-edu',
  templateUrl: './card-edu.component.html',
  styleUrls: ['./card-edu.component.css']
})
export class CardEduComponent implements OnInit {
  
  @Input() cardEdu : CardEdu[] = [ ]
  
  index: number = 0;
  
  formEdu: FormGroup;

  constructor(private authService:AuthService, private servicioEdu:ServicioEduService) { 
    
    this.formEdu = new FormGroup ({
      institucion: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      fechaInicio: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      fechaFin: new FormControl ('', [Validators.required, Validators.minLength(8)])
   })

  }

  ngOnInit(): void {
  }


  eliminarInfo($event: any){
    let id_div = $event.target.id - 1;
    let id = this.cardEdu[$event.target.id - 1].id_edu;
    this.servicioEdu.deleteEducacion(id).subscribe(() => (this.cardEdu = this.cardEdu.filter(t => t.id_edu !== this.cardEdu[id_div].id_edu)))
  }

  actulizarId_Info($event: any){
    this.index = $event.target.id - 1;
    this.formEdu.setValue({
      institucion : this.cardEdu[this.index].nombreInstitucion,
      fechaInicio : this.cardEdu[this.index].fechaInicio,
      fechaFin : this.cardEdu[this.index].fechaFin
    }) 
  }

  onSubmit(){
    this.cardEdu[this.index].nombreInstitucion = this.formEdu.value.institucion;
    this.cardEdu[this.index].fechaInicio = this.formEdu.value.fechaInicio;
    this.cardEdu[this.index].fechaFin = this.formEdu.value.fechaFin;
    this.servicioEdu.updateEducacion(this.cardEdu[this.index], this.cardEdu[this.index].id_edu).subscribe();
  }

  get Institucion (): any {
    return this.formEdu.get("institucion");
   }
   
  get FechaInicio (): any {
    return this.formEdu.get("fechaInicio");
  } 

  get FechaFin (): any {
    return this.formEdu.get("fechaFin");
  } 

  drop(event: CdkDragDrop<string[]>) {
    if (this.authService.logIn){
      moveItemInArray(this.cardEdu, event.previousIndex, event.currentIndex);
    }
  }
}

