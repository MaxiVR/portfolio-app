import { Component, OnInit } from '@angular/core';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';
import { CardPerfil } from 'src/app/cardPerfil.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string="";
  apellido: string = "";
  ciudadProvincia: string = "";
  myImage: any;
  inputNombre: any= "";
  inputLocalidad: string ="";

  constructor(private servicioHeader:ServicioHeaderService) {
  
    this.myImage = this.servicioHeader.myImage;
   }

  ngOnInit(): void {
    this.servicioHeader.getPersona().subscribe (data => {
      this.nombre = data.persona.nombre;
      this.apellido = data.persona.apellido;
      this.ciudadProvincia = data.persona.ciudadProvincia;
    });
    
  }

  cambiarDatos() {
    this.servicioHeader.cambiarDatosServicio(this.inputNombre).subscribe(data => {
      console.log(data)} );
    this.servicioHeader.getPersona().subscribe (data => {
      this.nombre = data.persona.nombre;});
  }




  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.myImage = reader.result;

      reader.readAsDataURL(file);
    }
  }
}
