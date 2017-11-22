import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubjectsModule } from '../subjects/subjects.module';

import { HomeComponent } from './components/home/home.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SubjectsModule
  ],
  declarations: [
    HomeComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
