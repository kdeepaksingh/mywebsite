import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegistrationDetailsComponent } from './user-registration-details/user-registration-details.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserRegistrationDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
