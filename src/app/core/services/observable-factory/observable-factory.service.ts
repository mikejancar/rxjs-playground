import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ObservableFactoryService {

  subject$: Subject<number>;
  behaviorSubject$: BehaviorSubject<number>;

  constructor() {
    this.subject$ = this.createSubject();
    this.createBehaviorSubject();
  }

  createSubject(): Subject<number> {
    return Observable.create(function(observer: Observer<number>) {
      let index: number = 0;
      setInterval(() => observer.next(++index), 1000);
    });
  }

  createBehaviorSubject(): void {
    this.behaviorSubject$ = new BehaviorSubject(0);
    setInterval(() => {
      let num: number = this.behaviorSubject$.getValue();
      this.behaviorSubject$.next(++num);
    }, 1000);
  }
}
