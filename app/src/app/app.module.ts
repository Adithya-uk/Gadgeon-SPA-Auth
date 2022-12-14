import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import{ FormsModule , ReactiveFormsModule } from '@angular/forms';

const appRoute:Routes = [
  {path:'reg',component:RegisterComponent},
  // {path:'login',component:SigninComponent}
  {path:'',component:SigninComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
