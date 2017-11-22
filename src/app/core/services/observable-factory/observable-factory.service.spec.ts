import { TestBed, inject } from '@angular/core/testing';

import { ObservableFactoryService } from './observable-factory.service';

describe('ObservableFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableFactoryService]
    });
  });

  it('should be created', inject([ObservableFactoryService], (service: ObservableFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
