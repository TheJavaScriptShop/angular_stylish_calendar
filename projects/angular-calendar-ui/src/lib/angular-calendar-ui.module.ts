import { NgModule } from '@angular/core';
import { AngularCalendarUiComponent } from './angular-calendar-ui.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';



@NgModule({
  declarations: [
    AngularCalendarUiComponent,
    MonthComponent,
    DayComponent,
    EventComponent
  ],
  imports: [
  ],
  exports: [
    AngularCalendarUiComponent
  ]
})
export class AngularCalendarUiModule { }
