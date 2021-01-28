import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularDiagram} from 'diagram-library-angular'

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDiagram
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
