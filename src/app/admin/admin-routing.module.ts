import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegistrationDetailsComponent } from './user-registration-details/user-registration-details.component';

const routes: Routes = [
  {path:'login-user', component:UserDetailsComponent},
  {path:'register-user', component:UserRegistrationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
