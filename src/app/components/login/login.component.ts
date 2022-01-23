import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private authService:AuthService ){ 

    ///Creamos el grupo de controles para el formulario de login
    this.form = new FormGroup ({
      password: new FormControl ('',[Validators.required, Validators.minLength(8)]),
      email: new FormControl ('', [Validators.required, Validators.email]),

   })
  }

  ngOnInit(): void {
  }

  get Password(): any{
    return this.form.get("password");
  }
 
  get Mail(): any {
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      this.authService.login(this.form.get('email')?.value, this.form.get('password')?.value )
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }

  logout(){
    this.authService.logout()
  }

}
