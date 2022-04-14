import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component'
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'editar', component:HomeComponent, canActivate: [AdminGuard]}, // visit home only if authenticated
  {path: 'home', component:HomeComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
