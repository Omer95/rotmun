import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date() as any);
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');
      function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days as any;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    const deadline = new Date(2018, 9, 11, 8, 59, 59, 59);
    initializeClock('clockdiv', deadline);
  }

}
