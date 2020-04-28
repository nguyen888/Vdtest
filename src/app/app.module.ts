import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { routingComponent, AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';



@NgModule({
  declarations: [
    AppComponent,
    
    routingComponent,
    
   
    
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
    
  ],
  providers: [LoginService,CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
