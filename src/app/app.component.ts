import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cal-dayjs';
  icons = {
    color: '',
    prevBtn: '<i class="bi bi-arrow-left-square"></i>',
    nextBtn: '<i class="bi bi-arrow-right-square"></i>',
  };
  colors = {
    monthYearFont: '',
    allDayColor: '',
    otherMonthDaysFontColor: '',
    weekendDaysColor: '',
    weekendDaysFontColor: '',
    todayFontColor: '',
    normalDayFontColor: '',
    todayBackgroundColor: '',
    weekNameFont: '',
    eventFont: '',
    seperatorColor: '',
    seperatorTopColor: '',
    todayBtnColor: '',
  };

  dimensions = {
    // height: '100px',
  };

  fonts = {
    monthYear: '',
    weekName: '',
    date: '',
    event: '',
  };
  events = [
    {
      color: '#d1ebfe',
      startDate: '2023-01-01T02:11:58.421Z',
      endDate: '2023-01-01T03:11:58.421Z',
      name: 'New Year',
      htmlDetails:
        '<h1>This is H1</h1><p>jdgeuwctreukynilewjufiocyfiouewofcyroinfeow;funcoqpef</p>',
    },

    {
      color: '#d1ebfe',
      startDate: '2023-01-26T18:30:00.000Z',
      endDate: '2023-01-26T18:30:00.000Z',
      name: 'Republic Day',
      details: 'Its my Birthday',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-18T12:11:58.421Z',
      endDate: '2023-01-18T14:11:58.421Z',
      name: 'Party',
      htmlDetails:
        '<h1>This is H1</h1><p>jdgeuwctreukynilewjufiocyfiouewofcyroinfeow;funcoqpef</p>',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-18T10:11:58.421Z',
      endDate: '2023-01-18T14:11:58.421Z',
      name: 'Birthday',
      details: 'Its my Birthday',
    },

    {
      color: '#d0eadc',
      startDate: '2023-01-23T10:11:58.421Z',
      endDate: '2023-01-23T10:11:58.421Z',
      name: 'Meeting',
      details: 'Its my Birthday',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-12T14:11:58.421Z',
      endDate: '2023-01-12T16:11:58.421Z',
      name: 'Party',
      htmlDetails: '<h1>This is H1</h1>',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-20T18:30:00.000Z',
      endDate: '2023-01-20T18:30:00.000Z',
      name: 'Party',
      details: 'Its my Birthday',
    },
  ];

  ngOnInit(): void {}
}
