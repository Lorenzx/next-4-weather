import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDayForecastComponent } from './views/current-day-forecast/current-day-forecast.component';
import { FourDaysForecastComponent } from './views/four-days-forecast/four-days-forecast.component';

const routes: Routes = [
  { path: 'four-days', component: FourDaysForecastComponent, pathMatch: 'full' },
  { path: '**', component: CurrentDayForecastComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
