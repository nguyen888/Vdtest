import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { LoginFormComponent } from './login-form/login-form.component';
import{FormsModule} from '@angular/forms';
import { routingComponent, AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginFormComponent,
    routingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
