import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'galary',component:GalaryComponent,redirectTo:''},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'project',component:ProjectComponent},
  {path:'contact',component:ContactComponent},
  {path:'sign',component:SignupComponent},
  {path:'**',redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
