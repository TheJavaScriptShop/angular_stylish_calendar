import { NgModule } from '@angular/core';
import { AngularCalendarUiComponent } from './angular-calendar-ui.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AngularCalendarUiComponent,
    MonthComponent,
    DayComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDatepickerModule,
    NgbAlertModule,
    FormsModule,
    JsonPipe,
  ],
  exports: [AngularCalendarUiComponent],
})
export class AngularCalendarUiModule {}
