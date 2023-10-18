import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  counter!: Subscription;
  customCounter!: Subscription;
  ngOnDestroy(): void {
    this.counter.unsubscribe();
  }
  ngOnInit(): void {
    this.counter = interval(2000).subscribe((count: number) => {
      console.log(count);
    });

    const customIntervalObservable = new Observable(
      (observer: Observer<number>) => {
        let count = 0;
        let limit = 6;
        setInterval(() => {
          observer.next(count);
          if (count === 5) {
            observer.complete();
          }
          if (count > limit) {
            observer.error(new Error(`Counter is greater than ${limit}`));
          }
          count++;
        }, 1600);
      }
    );

    this.customCounter = customIntervalObservable.subscribe(
      (data: number) => {
        console.log({ custom: data });
      },
      (error: Error) => {
        console.warn({ error });
      },
      () => {
        console.log('Completed!');
      }
    );
  }
}
