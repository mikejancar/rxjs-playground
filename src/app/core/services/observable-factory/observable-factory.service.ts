import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ObservableFactoryService {

  subject$: Observable<number>;

  constructor() {
    this.subject$ = this.createSubject();
  }

  createSubject(): Observable<number> {
    return Observable.create(function(observer: Observer<number>) {
      let index: number = 0;
      setInterval(() => observer.next(++index), 1000);
    });
  }
}
