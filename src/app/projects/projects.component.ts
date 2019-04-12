import { Component, OnInit } from '@angular/core';
import {Project} from '../_models/project';
import {ProjectService} from '../_services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      console.log(this.projects);
    }, error => {
      console.log(error);
    });
  }
}
