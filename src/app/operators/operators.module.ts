import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TransformationComponent } from './components/transformation/transformation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TransformationComponent
  ],
  exports: [
    TransformationComponent
  ]
})
export class OperatorsModule { }
