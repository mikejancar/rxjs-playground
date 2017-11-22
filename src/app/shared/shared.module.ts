import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDirective } from './directives/button/button.directive';
import { ContentDirective } from './directives/content/content.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonDirective,
    ContentDirective
  ],
  exports: [
    ButtonDirective,
    ContentDirective
  ]
})
export class SharedModule { }
