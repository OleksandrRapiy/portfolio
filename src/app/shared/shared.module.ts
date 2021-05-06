import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProjectCardComponent, ExperienceCardComponent, ContactFormComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProjectCardComponent,
    ExperienceCardComponent,
    ContactFormComponent,
    FooterComponent
  ]
})
export class SharedModule { }
