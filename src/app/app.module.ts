import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersComponent } from './footers/footers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLibModule } from './material-lib/material-lib.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    HttpClientModule
  // SharedRoutingModule
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
