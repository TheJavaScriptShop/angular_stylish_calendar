import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-angular-calendar-ui',
  template: ` <lib-month
    [colors]="colors"
    [fonts]="fonts"
    [events]="events"
    [icons]="icons"
    [dimensions]="dimensions"
  ></lib-month>`,
  styles: [],
})
export class AngularCalendarUiComponent implements OnInit {
  @Input() colors;
  @Input() fonts;
  @Input() events;
  @Input() icons;
  @Input() dimensions;
  constructor() {}

  ngOnInit(): void {}
}
