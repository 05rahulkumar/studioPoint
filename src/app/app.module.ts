import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { GalaryComponent } from './galary/galary.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { TESTIMONIALSComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
//import { GalaryBladeComponent } from './galary-blade/galary-blade.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { SignupComponent } from './signup/signup.component';
 import {MatToolbarModule} from '@angular/material/toolbar';
import { DesgnComponent } from './desgn/desgn.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalaryComponent,
    TESTIMONIALSComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ProjectComponent,
    ContactComponent,
     SignupComponent,
     DesgnComponent,
 
    //GalaryBladeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCardModule,MatGridListModule,MatListModule,MatIconModule,MatTabsModule,MatToolbarModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
