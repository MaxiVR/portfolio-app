import { Component, OnInit } from '@angular/core';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  myImage: any;
  inputNombre: any= "";
  inputApellido: any = "";
  inputLocalidad: string ="";

  constructor(private servicioHeader:ServicioHeaderService) {  }

  ngOnInit(): void {
    this.servicioHeader.update().subscribe (data => {
      this.inputNombre = data.nombre;
      this.inputApellido = data.apellido;
      this.inputLocalidad = data.ciudadProvincia;
      this.myImage = data.url_foto;
    });
    
  }

  cambiarDatos() {
    this.servicioHeader.cambiarDatosServicio(this.inputNombre, this.inputApellido, this.inputLocalidad, this.myImage)
    .subscribe(data => {
      console.log(data)} );
    this.ngOnInit();
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
