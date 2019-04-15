import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Project} from '../../_models/project';
import {Injectable} from '@angular/core';
import {ProjectService} from '../../_services/project.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';


@Injectable()
export class ProjectDetailResolver implements Resolve<Project> {
  constructor(private projectService: ProjectService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.projectService.getProject(route.params.id).pipe(
      catchError(error => {
        this.router.navigate(['/projects']);
        return of(null);
      })
    );
  }
}
