import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {ProjectDetailResolver} from './_resolvers/project-resolvers/project-detail.resolver';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './_guards/auth.guard';
import {DashProjectComponent} from './dashboard/dash-project/dash-project.component';
import {DashOverviewComponent} from './dashboard/dash-overview/dash-overview.component';
import {DashBlogComponent} from './dashboard/dash-blog/dash-blog.component';
import {DashMessagesComponent} from './dashboard/dash-messages/dash-messages.component';
import {DashProjectEditComponent} from './dashboard/dash-project/dash-project-edit/dash-project-edit.component';
import {LoginComponent} from './login/login.component';

export const appRoutes: Routes = [
  // ANONYMOUS USER ROUTES
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectDetailComponent, resolve: {project: ProjectDetailResolver}},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

  // ADMIN ROUTES: '/Dashboard' and '/Dashboard/****'
  {path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'projects', component: DashProjectComponent},
      {path: 'projects/:id/edit', component: DashProjectEditComponent, resolve: {project: ProjectDetailResolver}},
      {path: 'overview', component: DashOverviewComponent},
      {path: 'blog', component: DashBlogComponent},
      {path: 'messages', component: DashMessagesComponent},
    ]
  },
  {path: 'dashboard/login', component: LoginComponent},
  // Redirect to Homepage when route does not exist
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
