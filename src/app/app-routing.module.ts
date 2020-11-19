import { PieChartComponent } from './pie-chart/pie-chart.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'user',component:UserComponent},
  {path:'pie-chart',component:PieChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
