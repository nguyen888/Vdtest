import {NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AccountComponent } from './account/account.component';
import { VerificationComponent } from './verification/verification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
const routes: Routes=[
    {path:'',component:LoginFormComponent},
    {path:'forgotpassword',component: ForgotPasswordComponent},
    {path:'account',component:AccountComponent},
    {path:'verification',component:VerificationComponent},
    {path:'newpassword',component:NewpasswordComponent}
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponent=[
    LoginFormComponent,ForgotPasswordComponent,AccountComponent,VerificationComponent,NewpasswordComponent

]
