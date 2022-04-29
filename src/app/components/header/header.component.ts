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
  urlFoto : string = "";;
  id: number = 1;
  
  formPersona: FormGroup;

  constructor(private servicioHeader:ServicioHeaderService) {  

    this.formPersona = new FormGroup({
      
      apellido: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      nombre: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      ubicacion: new FormControl ('', [Validators.required, Validators.minLength(10)]),
      urlFoto : new FormControl ('', [Validators.required, Validators.minLength(20)])

    })
  }

  ngOnInit(): void {
    this.servicioHeader.getData(this.id).subscribe (data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ubicacion = data.ubicacion;
      this.urlFoto = data.url_foto; 
    }); 
  }

  actualizarForm (){
    this.formPersona.setValue({
      nombre : this.nombre,
      apellido : this.apellido,
      ubicacion : this.ubicacion,
      urlFoto : this.urlFoto
    }) 
  }


  onSubmit() {
    this.servicioHeader.updatePerfil(this.formPersona.value.nombre, this.formPersona.value.apellido, this.formPersona.value.ubicacion, 
      this.formPersona.value.urlFoto, this.id)
    .subscribe(data => {this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ubicacion = data.ubicacion;
      this.urlFoto = data.url_foto; } );
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
