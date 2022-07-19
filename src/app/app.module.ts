import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ApptsComponent } from './components/appts/appts.component';
import { ApptItemComponent } from './components/appt-item/appt-item.component';
import { AddApptComponent } from './components/add-appt/add-appt.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes =[
  {path: '', component: ApptsComponent}, //this is the home page, containing the appts component, within appts component there are appt item and add appt component
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ApptsComponent,
    ApptItemComponent,
    AddApptComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    // helps with debugging routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
