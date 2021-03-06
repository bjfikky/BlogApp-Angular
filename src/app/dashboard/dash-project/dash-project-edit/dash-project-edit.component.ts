import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../../_services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../_models/project';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dash-project-edit',
  templateUrl: './dash-project-edit.component.html',
  styleUrls: ['./dash-project-edit.component.css']
})
export class DashProjectEditComponent implements OnInit {
  project: Project;
  @ViewChild('projectEditForm') projectEditForm: NgForm;
  error: any;
  isUpdated: boolean = null;
  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadProject();
  }
  loadProject() {
    this.route.data.subscribe(data => {
      this.project = data.project;
    });
  }
  updateProject() {
    this.isUpdated = null;
    if (this.projectEditForm.valid) {
      this.projectService.putProject(this.project).subscribe(() => {
        console.log(this.project);
        this.isUpdated = true;
        this.projectEditForm.reset(this.projectEditForm.value);
      }, error => {
        this.error = error.error.ModelState;
        console.log('error occurred', this.error);
      });
    }
  }
}
