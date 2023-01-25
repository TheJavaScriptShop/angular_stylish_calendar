import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-angular-calendar-ui',
  template: ` <lib-month></lib-month>`,
  styles: [],
})
export class AngularCalendarUiComponent implements OnInit {
  @Input() colors = {
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
  @Input() fonts = {
    monthYear: '',
    weekName: '',
    date: '',
    event: '',
  };
  @Input() events = {
    color: '',
    startDate: '',
    endDate: '',
    name: '',
    details: '',
    htmlDetails: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
