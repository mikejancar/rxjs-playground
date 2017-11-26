import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Injectable()
export class ObservableFactoryService {

  subject$: Subject<number>;
  behaviorSubject$: BehaviorSubject<number>;
  replaySubject$: ReplaySubject<number>;
  asyncSubject$: AsyncSubject<number>;

  private replayNumber: number = 0;
  private asyncNumber: number = 0;

  constructor() {
    this.createSubject();
    this.createBehaviorSubject();
    this.createReplaySubject();
    this.createAsyncSubject();
  }

  createSubject(): void {
    this.subject$ = Observable.create(function(observer: Observer<number>) {
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

  createReplaySubject(): void {
    this.replaySubject$ = new ReplaySubject();
    setInterval(() => {
      this.replaySubject$.next(++this.replayNumber);
    }, 1000);
  }

  createAsyncSubject(): void {
    this.asyncSubject$ = new AsyncSubject();
    setInterval(() => {
      this.asyncSubject$.next(++this.asyncNumber);
    }, 1000);
  }
}
