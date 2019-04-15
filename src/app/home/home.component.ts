import { Component, OnInit } from '@angular/core';
import {Project} from '../_models/project';
import {ProjectService} from '../_services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadFeaturedProjects();
  }

  loadFeaturedProjects() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      const threeProjects: Project[] = [];
      threeProjects.push(projects.pop());
      threeProjects.push(projects.pop());
      threeProjects.push(projects.pop());
      this.featuredProjects = threeProjects;
    });
  }
}
