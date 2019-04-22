import {Component, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../../_models/project';
import {ProjectService} from '../../../_services/project.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dash-project-add',
  templateUrl: './dash-project-add.component.html',
  styleUrls: ['./dash-project-add.component.css']
})
export class DashProjectAddComponent implements OnInit {
  project: Project = {
    Description: '', Title: '', Tools: ''
  };
  error: any;
  @ViewChild('projectAddForm') projectAddFrom: NgForm;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  addProject() {
    if (this.projectAddFrom.valid) {
      this.projectService.postProject(this.project).subscribe(() => {
        console.log('success');
      }, error => {
        this.error = error.error.ModelState;
        console.log('error occurred', this.error);
      });
    }
  }
}
