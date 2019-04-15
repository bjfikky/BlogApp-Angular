import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';

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
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjectService, ProjectDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
