import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  project: Project = null;

  constructor(private projectService: ProjectService,
    public experienceService: ExperienceService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProjectInfo();
  }

  loadProjectInfo() {
    const id = this.activateRoute.snapshot.params['id'];


    this.projectService.getProjectById(id).subscribe(project => {
      this.project = project;
    })
  }

}
