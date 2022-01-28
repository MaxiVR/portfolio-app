import { Component, OnInit } from '@angular/core';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutMe : string = ""

  constructor(private servicioHeader:ServicioHeaderService) { }

  ngOnInit(): void {
    this.servicioHeader.getData().subscribe (data => {this.aboutMe = data.sobreMi});
  }

  cambiarParrafo(value:string){
    this.servicioHeader.updateAbout(value).subscribe(data => { console.log(data)} );
    this.ngOnInit();
  }

}
