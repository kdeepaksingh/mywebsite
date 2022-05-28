import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'sign-in',pathMatch:'full'},
  {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  // {path:'',loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)},
  {path:'',loadChildren:()=>import('./cms/cms.module').then(m=>m.CmsModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
