import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluateOmrComponent } from './evaluate-omr/evaluate-omr.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: '  test', component: EvaluateOmrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
