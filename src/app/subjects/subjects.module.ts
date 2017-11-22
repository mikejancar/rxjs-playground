import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    SubjectsComponent
  ],
  exports: [
    SubjectsComponent
  ]
})
export class SubjectsModule { }
