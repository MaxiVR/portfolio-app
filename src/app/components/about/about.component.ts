import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutMe : string = ""
  id : number = 1;

  formAbout : FormGroup;

  constructor(private servicioHeader:ServicioHeaderService) { 

    this.formAbout = new FormGroup ({
      about : new FormControl ('', [Validators.required, Validators.minLength(20)]),
    })
  }

  ngOnInit(): void {
    this.servicioHeader.getData(this.id).subscribe(data => {this.aboutMe = data.sobre_mi; console.log(data.sobre_mi)});
  }

  onSubmit(){
    this.servicioHeader.updateAbout(this.formAbout.value.about, this.id).subscribe(data => {this.aboutMe = data.sobre; console.log(data)});
    
  }

  actualizarForm (){
    this.formAbout.setValue({
      about : this.aboutMe
    }) 
  }

  get About(): any {
    return this.formAbout.get("about");
   }
}
