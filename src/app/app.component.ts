import { Component } from '@angular/core';
import * as _ from 'lodash';

import { Extra, extras } from './data/extras.data';
import { Job, jobs } from './data/jobs.data';
import { Project, projects } from './data/projects.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  copyrightYear: string;
  extras: Extra[];
  jobs: Job[];
  projects: Project[];
  visibleProjects: Project[];
  featuredProject: Project;

  constructor() {
    this.copyrightYear = 'foo';
    this.extras = extras;
    this.jobs = jobs;
    this.projects = projects;
    this.visibleProjects = _.filter(this.projects, {hidden: false});

    let featuredProjs = _.filter(this.projects, {featured: true});
    if (featuredProjs.length > 0) {
      this.featuredProject = featuredProjs[0];
    }
  }
}
