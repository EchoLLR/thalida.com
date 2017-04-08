import { Injectable } from '@angular/core';
import { extras } from '../../data/extras';

@Injectable()
export class ExtraService {
  private extras = extras.slice(0);

  constructor() {}

  getExtras(): Extra[] {
    return this.extras.slice(0);
  }
}
