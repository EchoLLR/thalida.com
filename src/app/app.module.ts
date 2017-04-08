import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RoutingModule } from './app-routing.module';

import { PanelComponent } from './components/panel/panel.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { AppComponent } from './views/app/app.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PanelComponent,
    HighlightComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
