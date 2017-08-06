import { CountdownComponent } from './countdown/countdown.component';
import { Component, ViewChild, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(CountdownComponent)
  private countdowns: QueryList<CountdownComponent>;

  firstCounter = 10;
  secondCounter = 30;

  ngAfterViewInit(): void {
    this.countdowns.forEach(c => c.start());
  }
}
