import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:53974/api/projects/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  getProject(id): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + id);
  }

  postPoroject(project: Project) {
    return this.http.post(this.baseUrl, project);
  }
}
