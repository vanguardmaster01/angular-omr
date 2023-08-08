import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluateOmrComponent } from './evaluate-omr/evaluate-omr.component';
import { MarkComponent } from './mark/mark.component';
import { OmrSheetComponent } from './omr-sheet/omr-sheet.component';
import { FABBtnComponent } from './btns/fab-btn/fab-btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EvaluateOmrComponent,
    MarkComponent,
    OmrSheetComponent,
    FABBtnComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
