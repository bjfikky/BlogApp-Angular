import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../_services/project.service';
import {DashProjectsListComponent} from './dash-projects-list/dash-projects-list.component';

@Component({
  selector: 'app-dash-project-list',
  templateUrl: './dash-project.component.html',
  styleUrls: ['./dash-project.component.css']
})
export class DashProjectComponent implements OnInit {
  @ViewChild(DashProjectsListComponent) projectList;
  constructor() { }

  ngOnInit() {
  }
  loadProjects() {
    this.projectList.loadProjects();
  }
}
