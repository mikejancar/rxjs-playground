import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransformationComponent } from '../operators';
import { SubjectsComponent } from '../subjects';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'transformers', component: TransformationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
