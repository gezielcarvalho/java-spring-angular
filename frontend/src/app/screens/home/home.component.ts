import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
        let limit = 12;
        setInterval(() => {
          observer.next(count);
          if (count === 10) {
            observer.complete();
          }
          if (count > limit) {
            observer.error(new Error(`Counter is greater than ${limit}`));
          }
          count++;
        }, 1700);
      }
    );

    this.customCounter = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data % 2 === 0;
        }),
        map((data: number) => {
          return `Round: ${data + 1}`;
        })
      )
      .subscribe(
        (data) => {
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
