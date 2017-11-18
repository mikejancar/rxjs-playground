import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Scheduler } from 'rxjs/Scheduler';

@Component({
  selector: 'rxplay-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  watchMe$: Observable<number>;
  watcher: number;

  ngOnInit(): void {
    this.watchMe$ = Observable.create(function(observer: Observer<number>) {
      let index: number = 0;
      setInterval(() => observer.next(++index), 1000);
    });

    this.watchMe$.subscribe((num: number) => {
      this.watcher = num;
    });
  }
}
