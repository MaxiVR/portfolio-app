import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioHeaderService } from 'src/app/servicios/servicio-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  nombre : string = "";
  apellido : string = "";
  ubicacion : string = "";
  urlImagen : string = "";;
  id: number = 1;
  
  formPersona: FormGroup;

  constructor(private servicioHeader:ServicioHeaderService) {  

    this.formPersona = new FormGroup({
      
      apellido: new FormControl ('',[Validators.required, Validators.minLength(4)]),
      nombre: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      ubicacion: new FormControl ('', [Validators.required, Validators.minLength(10)]),
      urlFoto : new FormControl ('', [Validators.required, Validators.minLength(20)])

    })
  }

  ngOnInit(): void {
    this.servicioHeader.getData(this.id).subscribe (data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ubicacion = data.ubicacion;
      this.urlImagen = data.url_foto;
    });
    
  }

  onSubmit() {
    this.servicioHeader.updatePerfil(this.nombre, this.apellido, this.ubicacion, 
      this.urlImagen, this.id)
    .subscribe(data => { console.log(data.persona)} );
    setTimeout (this.ngOnInit, 1000);
  }

  get Apellido(): any {
    return this.formPersona.get("apellido");
  }

  get Nombre(): any {
    return this.formPersona.get("nombre");
  }

  get Ubicacion(): any {
    return this.formPersona.get("ubicacion");
  }

  get UrlFoto(): any {
    return this.formPersona.get("urlFoto");
  }
  
}
