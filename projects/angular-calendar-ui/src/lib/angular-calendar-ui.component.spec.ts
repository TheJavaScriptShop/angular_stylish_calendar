import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCalendarUiComponent } from './angular-calendar-ui.component';

describe('AngularCalendarUiComponent', () => {
  let component: AngularCalendarUiComponent;
  let fixture: ComponentFixture<AngularCalendarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCalendarUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCalendarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
