import {NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
const routes: Routes=[
    
    {path:'forgotpassword',component: ForgotPasswordComponent},
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponent=[LoginFormComponent,ForgotPasswordComponent]
