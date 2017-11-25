import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'rxplay-test-subject',
  templateUrl: './test-subject.component.html',
  styleUrls: ['./test-subject.component.css']
})
export class TestSubjectComponent {
  @Input() subject: Subject<any>;
  @Input() subjectType: string = '';

  subjectUnsubscribe: Subject<void> = new Subject<void>();
  subjectValue: any;

  subscribe(): void {
    this.subject
      .takeUntil(this.subjectUnsubscribe)
      .subscribe((num: any) => this.subjectValue = num);
  }

  unsubscribe(): void {
    this.subjectUnsubscribe.next();
  }
}
