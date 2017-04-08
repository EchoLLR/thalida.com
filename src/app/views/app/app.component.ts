import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  copyrightYear: String = '';

  constructor() {}

  ngOnInit(): void {
    this.copyrightYear = moment().format('Y');
  }
}
