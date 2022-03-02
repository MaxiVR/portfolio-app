import { Component, OnInit } from '@angular/core';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  myImage: any = "";
  inputNombre: string = "";
  inputApellido: string = "";
  inputLocalidad: string ="";
  id: number= 1;

  constructor(private servicioHeader:ServicioHeaderService) {  }

  ngOnInit(): void {
    this.servicioHeader.getData(this.id).subscribe (data => {
      this.inputNombre = data.nombre;
      this.inputApellido = data.apellido;
      this.inputLocalidad = data.ubicacion;
      this.myImage = data.url_foto;
    });
    
  }

  cambiarDatos() {
    this.servicioHeader.updatePerfil(this.inputNombre, this.inputApellido, this.inputLocalidad, 
      this.myImage)
    .subscribe(data => { console.log(data.persona)} );
    setTimeout (this.ngOnInit, 1000);
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
