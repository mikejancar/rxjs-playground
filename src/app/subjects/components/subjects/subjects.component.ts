import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import { ObservableFactoryService } from '../../../core';

@Component({
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  baseSubject$: Subject<number>;
  behaviorSubject$: BehaviorSubject<number>;
  replaySubject$: ReplaySubject<number>;
  asyncSubject$: AsyncSubject<number>;

  constructor(
    private observableFactory: ObservableFactoryService
  ) {
    this.baseSubject$ = observableFactory.subject$;
    this.behaviorSubject$ = observableFactory.behaviorSubject$;
    this.replaySubject$ = observableFactory.replaySubject$;
    this.asyncSubject$ = observableFactory.asyncSubject$;
  }
}
