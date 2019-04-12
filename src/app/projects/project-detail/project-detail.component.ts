import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../_services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../_models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.projectService.getProject(this.route.snapshot.params['id']).subscribe((project: Project) => {
      this.project = project;
    }, error => {
      console.log('error retrieving project');
    });
  }
}
