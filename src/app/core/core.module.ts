import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableFactoryService } from './services/observable-factory/observable-factory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ObservableFactoryService
  ]
})
export class CoreModule { }
