import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { TESTIMONIALSComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'galary',component:GalaryComponent},
  {path:'test',component:TESTIMONIALSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
