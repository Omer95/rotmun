import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConferenceComponent } from './conference/conference.component';
import { CommitteesComponent } from './committees/committees.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'team', component: TeamComponent},
 { path: 'register', component: RegisterComponent },
 { path: 'files', component: ConferenceComponent},
 { path: 'committees', component: CommitteesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
