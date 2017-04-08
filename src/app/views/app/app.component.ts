import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  copyrightYear: String;

  constructor() {
    this.copyrightYear = moment().format('Y');
  }
}
