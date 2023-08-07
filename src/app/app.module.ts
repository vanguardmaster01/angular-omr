import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluateOmrComponent } from './evaluate-omr/evaluate-omr.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EvaluateOmrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
