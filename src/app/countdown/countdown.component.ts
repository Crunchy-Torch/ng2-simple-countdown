import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  time: moment.Moment;
  sub: Subscription;
  remaining: number;

  @Input()
  startTime = 60;

  ngOnInit() {
    this.reinit();
  }

  reinit() {
    const m = moment().utcOffset(0);
    m.set({ hour: 0, minute: 0, second: this.startTime, millisecond: 0 });
    this.time = moment(m);
    this.remaining = this.startTime;
  }

  start() {
    this.sub = Observable.timer(0, 1000).subscribe(() => {
      this.time.subtract(1, 'seconds');
      this.remaining--;
      if (this.remaining === 0) {
        this.stop();
      }
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

  private firstDigit(value: number): number {
    return Math.floor(value / 10);
  }

  private lastDigit(value: number): number {
    return value % 10;
  }
}
