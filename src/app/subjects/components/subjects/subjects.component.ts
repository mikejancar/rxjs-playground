import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { ObservableFactoryService } from '../../../core';

@Component({
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  baseSubject$: Subject<number>;
  behaviorSubject$: BehaviorSubject<number>;

  constructor(
    private observableFactory: ObservableFactoryService
  ) {
    this.baseSubject$ = observableFactory.subject$;
    this.behaviorSubject$ = observableFactory.behaviorSubject$;
  }
}
