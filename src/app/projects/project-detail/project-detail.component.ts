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
    this.route.data.subscribe(data => {
      this.project = data.project;
    });
  }
  GetTools(): string[]  {
    return this.project.Tools.split(',', 3);
  }
}
