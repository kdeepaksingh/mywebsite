import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MaterialLibModule } from '../material-lib/material-lib.module';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialLibModule
  ]
})
export class DashboardModule { }
