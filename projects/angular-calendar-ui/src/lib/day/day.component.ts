import { Component, OnInit, Input } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'lib-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  @Input() day: dayjs.Dayjs = dayjs();
  @Input() today: dayjs.Dayjs = dayjs();
  @Input() monthDate: dayjs.Dayjs = this.today;
  @Input() colors: {
    monthYearFont: string;
    allDayColor: string;
    otherMonthDaysFontColor: string;
    weekendDaysColor: string;
    weekendDaysFontColor: string;
    todayBackgroundColor: string;
    weekNameFont: string;
    eventFont: string;
    todayFontColor: string;
    normalDayFontColor: string;
  } = {
    monthYearFont: '',
    allDayColor: '',
    otherMonthDaysFontColor: '',
    weekendDaysColor: '',
    weekendDaysFontColor: '',
    todayBackgroundColor: '',
    weekNameFont: '',
    eventFont: '',
    todayFontColor: '',
    normalDayFontColor: '',
  };
  @Input() events: Array<{
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    details: string;
    htmlDetails: string;
  }> = [];
  @Input() fonts: {
    monthYear: string;
    weekName: string;
    date: string;
    event: string;
  } = {
    monthYear: '',
    weekName: '',
    date: '',
    event: '',
  };

  constructor() {}

  isBefore(day: dayjs.Dayjs) {
    return day.isBefore(this.monthDate.startOf('month'));
  }

  isAfter(day: dayjs.Dayjs) {
    return day.isAfter(this.monthDate.endOf('month'));
  }

  isToday(day: dayjs.Dayjs) {
    return day.isSame(this.today, 'day');
  }

  toDay(day: dayjs.Dayjs) {
    return day.date();
  }

  getDateFontColor(day: dayjs.Dayjs) {
    let otherMonthDaysFontColor =
      this.colors.otherMonthDaysFontColor === ''
        ? '#b5b5b5'
        : this.colors.otherMonthDaysFontColor;

    let weekendDaysFontColor =
      this.colors.weekendDaysFontColor === ''
        ? '#7c7c7c'
        : this.colors.weekendDaysFontColor;

    let todayFontColor =
      this.colors.todayFontColor === '' ? 'white' : this.colors.todayFontColor;

    let normalDayFontColor =
      this.colors.normalDayFontColor === ''
        ? 'black'
        : this.colors.normalDayFontColor;

    if (this.isBefore(day) || this.isAfter(day)) {
      return otherMonthDaysFontColor;
    } else if (day.day() === 0) {
      return weekendDaysFontColor;
    } else if (this.isToday(day)) {
      return todayFontColor;
    } else {
      return normalDayFontColor;
    }
  }

  getDateBgColor(day: dayjs.Dayjs) {
    let todayBackgroundColor =
      this.colors.todayBackgroundColor === ''
        ? '#ff3b30'
        : this.colors.todayBackgroundColor;
    if (this.isToday(day)) {
      return todayBackgroundColor;
    } else {
      return this.colors.allDayColor;
    }
  }

  showEvent(day: dayjs.Dayjs) {
    let allEvents = this.events.filter((e) => {
      return dayjs(e.startDate).isSame(day, 'day');
    });

    if (allEvents.length === 0) {
      return null;
    } else {
      allEvents.sort((a, b) => {
        return a.startDate < b.startDate
          ? -1
          : a.startDate > b.startDate
          ? 1
          : 0;
      });
      return allEvents;
    }
  }

  dateStyles(day: dayjs.Dayjs) {
    if (this.fonts.date === '') {
      return {
        'background-color': this.getDateBgColor(day),
        color: this.getDateFontColor(day),
      };
    } else {
      return {
        'font-size': this?.fonts.date || '1.75rem',
        'background-color': this.getDateBgColor(day),
        color: this.getDateFontColor(day),
      };
    }
  }

  ngOnInit(): void {}
}
