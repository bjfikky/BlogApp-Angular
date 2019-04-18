import { Component, OnInit } from '@angular/core';
import {Project} from '../../../_models/project';
import {ProjectService} from '../../../_services/project.service';

@Component({
  selector: 'app-dash-projects-list',
  templateUrl: './dash-projects-list.component.html',
  styleUrls: ['./dash-projects-list.component.css']
})
export class DashProjectsListComponent implements OnInit {
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
