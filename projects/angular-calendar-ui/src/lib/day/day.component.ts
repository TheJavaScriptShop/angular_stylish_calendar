import { Component, OnInit, Input } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'lib-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  @Input() day: dayjs.Dayjs;
  @Input() today: dayjs.Dayjs;
  @Input() monthDate: dayjs.Dayjs;
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
  @Input() events: Array<{
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    details: string;
    htmlDetails: string;
  }>;
  @Input() fonts: {
    monthYear: string;
    weekName: string;
    date: string;
    event: string;
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
      this.colors?.otherMonthDaysFont === ''
        ? '#b5b5b5'
        : this.colors?.otherMonthDaysFont;

    let weekendDaysFontColor =
      this.colors?.weekendDaysFont === ''
        ? '#7c7c7c'
        : this.colors?.weekendDaysFont;

    let todayFontColor =
      this.colors?.todayFont === '' ? 'white' : this.colors?.todayFont;

    let normalDayFontColor =
      this.colors?.weekDaysFont === '' ? 'black' : this.colors?.weekDaysFont;

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
      this.colors?.todayBg === '' ? '#ff3b30' : this.colors?.todayBg;
    if (this.isToday(day)) {
      return todayBackgroundColor;
    } else {
      return this.colors?.weekDaysBg;
    }
  }

  showEvent(day: dayjs.Dayjs) {
    let allEvents = this.events?.filter((e) => {
      return dayjs(e.startDate).isSame(day, 'day');
    });

    if (allEvents?.length === 0) {
      return null;
    } else {
      allEvents?.sort((a, b) => {
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
    if (this.fonts?.date === '') {
      return {
        'background-color': this.getDateBgColor(day),
        color: this.getDateFontColor(day),
      };
    } else {
      return {
        'font-size': this.fonts?.date,
        'background-color': this.getDateBgColor(day),
        color: this.getDateFontColor(day),
      };
    }
  }

  ngOnInit(): void {}
}
