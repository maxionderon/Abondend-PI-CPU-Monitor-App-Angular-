import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuTemperatureListComponent } from './components/cpu-temperature-list/cpu-temperature-list.component';


const routes: Routes = [
  { path: "", component: CpuTemperatureListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
