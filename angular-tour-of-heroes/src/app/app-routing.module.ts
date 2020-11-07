import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FinalprojectComponent } from './finalproject/finalproject.component'
import { CloudmanagementComponent } from './cloudmanagement/cloudmanagement.component'

const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'users', component: FinalprojectComponent },
  { path: 'cloudmanagement', component: CloudmanagementComponent }
];
//FinalProjectComponent
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}