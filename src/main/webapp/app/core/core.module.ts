import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [LoginComponent, AuthComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
