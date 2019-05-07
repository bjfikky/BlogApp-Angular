import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../_models/project';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = `${environment.apiUrl}api/projects/`;
  token: any = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token.access_token}`
  });

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + id);
  }

  postProject(project: Project) {
    return this.http.post(this.baseUrl, project, {headers: this.headers});
  }

  putProject(project: Project) {
    return this.http.put(this.baseUrl + project.Id, project, {headers: this.headers});
  }

  deleteProject(id: number) {
    return this.http.delete(this.baseUrl + id, {headers: this.headers});
  }
}
