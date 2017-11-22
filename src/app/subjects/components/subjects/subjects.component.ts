import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';

import { ObservableFactoryService } from '../../../core';

@Component({
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  subjectUnsubscribe: Subject<void> = new Subject<void>();
  subjectValue: number;

  constructor(
    private observableFactory: ObservableFactoryService
  ) { }

  subscribe(): void {
    this.observableFactory.subject$
      .takeUntil(this.subjectUnsubscribe)
      .subscribe((num: number) => this.subjectValue = num);
  }

  unsubscribe(): void {
    this.subjectUnsubscribe.next();
  }
}
