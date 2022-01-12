import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AcademicBackgroundComponent } from './components/academic-background/academic-background.component';
import { CardEduComponent } from './components/card-edu/card-edu.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CardExpComponent } from './components/card-exp/card-exp.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardProjectComponent } from './components/card-project/card-project.component';

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
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
