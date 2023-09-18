export interface Question{
    iIndex:Number;
    fScore:Number;
    iOutOf:Number;
}

export interface omr{
    iIndex:Number;
    fScore:Number;
    iOutOf:Number;
}

/////////// tobacco for your fathers
///////////// shoes for your family


<div class="btn">
<button mat-mini-fab color="next">
    <mat-icon>navigate_next</mat-icon>
</button>
</div>


////////// cosmetics for your sister
////////// gift for nephew
////////// don't worry about your house
////////// they are going to buy it after you come back 
////////// so they hope only you are dong well until that time


const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'test', component: EvaluateOmrComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  