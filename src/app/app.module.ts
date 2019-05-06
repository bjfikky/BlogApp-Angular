import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AlertModule, CarouselModule, TabsModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {appRoutes} from './routes';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import {ProjectService} from './_services/project.service';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import {ProjectDetailResolver} from './_resolvers/project-resolvers/project-detail.resolver';
import {AuthenticationService} from './_services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from './_guards/auth.guard';
import { DashProjectComponent } from './dashboard/dash-project/dash-project.component';
import { DashOverviewComponent } from './dashboard/dash-overview/dash-overview.component';
import { DashBlogComponent } from './dashboard/dash-blog/dash-blog.component';
import { DashMessagesComponent } from './dashboard/dash-messages/dash-messages.component';
import { DashProjectsListComponent } from './dashboard/dash-project/dash-projects-list/dash-projects-list.component';
import { DashProjectAddComponent } from './dashboard/dash-project/dash-project-add/dash-project-add.component';
import { DashProjectEditComponent } from './dashboard/dash-project/dash-project-edit/dash-project-edit.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    DashboardComponent,
    DashProjectComponent,
    DashOverviewComponent,
    DashBlogComponent,
    DashMessagesComponent,
    DashProjectsListComponent,
    DashProjectAddComponent,
    DashProjectEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProjectService, AuthenticationService, ProjectDetailResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
