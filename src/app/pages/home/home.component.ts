import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AboutMe } from 'src/app/models/about-me.model';
import { Experience } from 'src/app/models/experience.model';
import { Project } from 'src/app/models/project.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];
  experiences: Experience[] = [];
  aboutMe: AboutMe = null;

  constructor(
    private projectService: ProjectService,
    public experienceService: ExperienceService
  ) { }

  ngOnInit(): void {
    this.loadAboutMeInfo();
    this.loadExperience();
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe((x: Project[]) => {
      this.projects = x;      
    })
  }

  loadExperience() {
    this.experienceService.getExperiences().subscribe((x: Experience[]) => {
      this.experiences = x;
    })
  }


  loadAboutMeInfo() {
    this.aboutMe = this.experienceService.AboutMeInfo;
  }

  scrollToForm() {
    window.scrollTo(0,document.body.scrollHeight);
  }
}
