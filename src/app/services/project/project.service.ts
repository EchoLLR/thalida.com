import { Injectable } from '@angular/core';
import { projects } from '../../data/projects';

@Injectable()
export class ProjectService {
  private projects = projects.slice(0);

  constructor() {}

  getProjects(): Project[] {
    return this.projects.slice(0);
  }

  getFeaturedProjects(): Project[] {
    return this.projects
              .filter((project) => project.featured)
              .slice(0);
  }

  getHiddenProjects(): Project[] {
    return this.projects
              .filter((project) => project.hidden)
              .slice(0);
  }

  getVisibleProjects(): Project[] {
    return this.projects
              .filter((project) => !project.hidden)
              .slice(0);
  }
}
