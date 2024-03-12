import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { AddrecpComponent } from './addrecp/addrecp.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{path:"",component:LandingPageComponent},{path:"login",component:LoginComponent},{path:"dashboard",component:DashboardComponent},{path:"single/:id",component:SingleViewComponent},{path:"add-recp",component:AddrecpComponent},{path:"edit/:id",component:EditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
