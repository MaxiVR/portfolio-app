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
  fechaNac : string = "";
  email: string = "";
  urlFoto : string = "";
  id: number = 1;
  
  formPersona: FormGroup;

  constructor(private servicioHeader:ServicioHeaderService) {  

    this.formPersona = new FormGroup({
      
      apellido: new FormControl ('',[Validators.required, Validators.minLength(3)]),
      nombre: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      fechaNac: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      ubicacion: new FormControl ('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      urlFoto : new FormControl ('', [Validators.required, Validators.minLength(20)])

    })
  }

  ngOnInit(): void {
    this.servicioHeader.getData(this.id).subscribe (data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNac = data.fechaNac;
      this.ubicacion = data.ubicacion;
      this.email = data.email;
      this.urlFoto = data.url_foto; 
    }); 
  }

  actualizarForm (){
    this.formPersona.setValue({
      nombre : this.nombre,
      apellido : this.apellido,
      ubicacion : this.ubicacion,
      fechaNac : this.fechaNac,
      email : this.email,
      urlFoto : this.urlFoto
    }) 
  }


  onSubmit() {
    this.servicioHeader.updatePerfil(this.formPersona.value.nombre, this.formPersona.value.apellido, this.formPersona.value.ubicacion, 
      this.formPersona.value.fechaNac, this.formPersona.value.email, this.formPersona.value.urlFoto,  this.id)
    .subscribe(data => {this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ubicacion = data.ubicacion;
      this.fechaNac = data.fechaNac;
      this.email = data.email;
      this.urlFoto = data.url_foto; } );
  }

  get Apellido(): any {
    return this.formPersona.get("apellido");
  }

  get Nombre(): any {
    return this.formPersona.get("nombre");
  }

  get FechaNac(): any {
    return this.formPersona.get("fechaNac");
  }

  get Ubicacion(): any {
    return this.formPersona.get("ubicacion");
  }

  get Email(): any {
    return this.formPersona.get("email");
  }

  get UrlFoto(): any {
    return this.formPersona.get("urlFoto");
  }
  
}
