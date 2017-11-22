import { ElementRef } from '@angular/core';

import { ContentDirective } from './content.directive';

describe('ContentDirective', () => {
  const elementRef: ElementRef = undefined;

  beforeEach(() => this.elementRef = window.document.createElement('div'));
  it('should create an instance', () => {
    const directive = new ContentDirective(this.elementRef);
    expect(directive).toBeTruthy();
  });
});
