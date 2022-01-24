import { Component, OnInit } from '@angular/core';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';
import { CardPerfil } from 'src/app/cardPerfil.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myImage: any;
  inputNombre: string = "";
  inputLocalidad: string ="";

  cardPerfil: CardPerfil[] = []

  constructor(private servicioHeader:ServicioHeaderService) {

    this.cardPerfil = this.servicioHeader.cardPerfil;
    this.myImage = this.servicioHeader.myImage;
   }

  ngOnInit(): void {
    
  }

  cambiarDatos() {
    this.servicioHeader.cambiarDatosServicio(this.inputNombre, this.inputLocalidad);
    
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
