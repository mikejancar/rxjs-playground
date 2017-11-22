import { ElementRef } from '@angular/core';

import { ButtonDirective } from './button.directive';

describe('ButtonDirective', () => {
  const elementRef: ElementRef = undefined;

  beforeEach(() => this.elementRef = window.document.createElement('div'));

  it('should create an instance', () => {
    const directive = new ButtonDirective(this.elementRef);
    expect(directive).toBeTruthy();
  });
});
