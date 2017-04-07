import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Extra, extras } from './data/extras.data';
import { Job, jobs } from './data/jobs.data';
import { Project, projects } from './data/projects.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  copyrightYear: String;
  extras: Extra[];
  jobs: Job[];
  projects: Project[];
  visibleProjects: Project[];
  featuredProject: Project;

  constructor() {
    this.copyrightYear = moment().format('Y');
    this.extras = extras;
    this.jobs = jobs;
    this.projects = projects;
    this.visibleProjects = _.filter(this.projects, {hidden: false});
    this.featuredProject = this.getFeaturedProject(this.projects);
  }

  getFeaturedProject(projects: Project[]) : Project {
    let foundFeaturedProject = <Project>{};
    let featuredProjs = _.filter(projects, {featured: true});

    if (featuredProjs.length > 0) {
      foundFeaturedProject = featuredProjs[0];
    }

    return foundFeaturedProject;
  }
}
