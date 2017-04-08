import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { ProjectService } from '../../services/project/project.service';
import { JobService } from '../../services/job/job.service';
import { ExtraService } from '../../services/extra/extra.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {
  extras: Extra[] = [];
  jobs: Job[] = [];
  visibleProjects: Project[] = [];
  featuredProject: Project;

  constructor(
    private projectService: ProjectService,
    private jobService: JobService,
    private extraService: ExtraService
  ) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
    this.extras = this.extraService.getExtras();
    this.visibleProjects = this.projectService.getVisibleProjects();
    this.featuredProject = this.projectService.getFeaturedProjects()[0];
  }
}
