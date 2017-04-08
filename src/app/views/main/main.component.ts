import { Component } from '@angular/core';
import * as _ from 'lodash';

import { extras } from '../../data/extras';
import { jobs } from '../../data/jobs';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  extras: Extra[];
  jobs: Job[];
  projects: Project[];
  visibleProjects: Project[];
  featuredProject: Project;

  constructor() {
    this.extras = extras;
    this.jobs = jobs;
    this.projects = projects;
    this.visibleProjects = this.projects.filter((project) => !project.hidden);
    this.featuredProject = this.getFeaturedProject(this.projects);
  }

  getFeaturedProject(projects: Project[]) : Project {
    let foundFeaturedProject = <Project>{};
    let featuredProjects = this.projects.filter((project) => project.featured);

    if (featuredProjects.length > 0) {
      foundFeaturedProject = featuredProjects[0];
    }

    return foundFeaturedProject;
  }
}
