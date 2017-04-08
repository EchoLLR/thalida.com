import { Injectable } from '@angular/core';
import { jobs } from '../../data/jobs';

@Injectable()
export class JobService {
  private jobs = jobs.slice(0);

  constructor() {}

  getJobs(): Job[] {
    return this.jobs.slice(0);
  }
}
