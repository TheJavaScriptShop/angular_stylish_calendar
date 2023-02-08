import { Component, OnInit, Input } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'lib-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() event: {
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    details: string;
    htmlDetails: string;
  };
  @Input() colors: {
    monthYearFont: string;
    weekDaysBg: string;
    otherMonthDaysFont: string;
    weekendDaysBg: string;
    weekendDaysFont: string;
    todayFont: string;
    weekDaysFont: string;
    todayBg: string;
    weekNameFont: string;
    seperatorColor: string;
    seperatorTopColor: string;
    todayBtnColor: string;
  };
  @Input() fonts: {
    monthYear: string;
    weekName: string;
    date: string;
    event: string;
  };
  constructor() {}

  getEventColor(e: {
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    details: string;
    htmlDetails: string;
  }) {
    let color = e.color === '' ? '#d0eadc' : e.color;
    return color;
  }

  isAllDayEvent(event: {
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    details: string;
    htmlDetails: string;
  }) {
    let sHour = dayjs(event.startDate).hour();
    if (sHour === 0) {
      return 'All-day: ';
    } else {
      return '';
    }
  }

  getTime(startDate: string, endDate: string) {
    let sHour = dayjs(startDate).hour();
    if (sHour === 0) {
      return 'All Day Event';
    }
    let sUnit = '';
    let sMin = dayjs(startDate).minute();
    let startTime = '';
    if (sHour < 13) {
      sUnit = ' AM';
    } else {
      sUnit = ' PM';
      sHour = sHour - 12;
    }
    startTime = sHour + ':' + sMin + sUnit;

    let eHour = dayjs(endDate).hour();
    let eMin = dayjs(endDate).minute();
    let endTime = '';
    let eUnit = '';
    if (eHour < 13) {
      eUnit = ' AM';
    } else {
      eUnit = ' PM';
      eHour = eHour - 12;
    }
    endTime = eHour + ':' + eMin + eUnit;
    return startTime + ' to ' + endTime;
  }

  weekStyles(event: {
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    details: string;
    htmlDetails: string;
  }) {
    if (this.fonts.event === '') {
      return {
        'background-color': this.getEventColor(event),
        'font-size': '0.80em',
      };
    } else {
      return {
        'font-size': this?.fonts.event,
        'background-color': this.getEventColor(event),
      };
    }
  }

  ngOnInit(): void {}
}
