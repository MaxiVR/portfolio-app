import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor(private authService: AuthService, private router: Router) {

    ///Creamos el grupo de controles para el formulario de login
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),

    })
  }

  ngOnInit(): void {
  }

  get Password(): any {
    return this.form.get("password");
  }

  get Mail(): any {
    return this.form.get("email");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }


  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      this.authService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(
      data => {
        console.log("DATA: " + JSON.stringify(data));
        this.router.navigate(['editar']);
      }, 
      () => alert("error")
      );
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
    }
  }

  isAdmin(): boolean {
    return this.authService.logIn;
  }

  logout() {
    this.authService.logout()
  }

  irPortfolio() {
    this.router.navigate(['home']);
  }

}
