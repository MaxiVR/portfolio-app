import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AcademicBackgroundComponent } from './components/academic-background/academic-background.component';
import { CardEduComponent } from './components/card-edu/card-edu.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CardExpComponent } from './components/card-exp/card-exp.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/skills/skills.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BtnEditComponent } from './components/btn-edit/btn-edit.component';
import { BtnPlusComponent } from './components/btn-plus/btn-plus.component';
import { BtnPencilComponent } from './components/btn-pencil/btn-pencil.component';
import { ServicioEduService } from './servicios/servicio-edu.service';
import { CardHardSkillComponent } from './components/card-hard-skill/card-hard-skill.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    AcademicBackgroundComponent,
    CardEduComponent,
    ExperienceComponent,
    CardExpComponent,
    ProjectsComponent,
    CardProjectComponent,
    FooterComponent,
    LoginComponent,
    SkillsComponent,
    Page404Component,
    HomeComponent,
    ContactComponent,
    BtnEditComponent,
    BtnPlusComponent,
    BtnPencilComponent,
    CardHardSkillComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule, 
  ],
  providers: [ServicioEduService],
  bootstrap: [AppComponent]
})
export class AppModule { }
