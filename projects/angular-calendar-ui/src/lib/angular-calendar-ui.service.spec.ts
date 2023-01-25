import { TestBed } from '@angular/core/testing';

import { AngularCalendarUiService } from './angular-calendar-ui.service';

describe('AngularCalendarUiService', () => {
  let service: AngularCalendarUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCalendarUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
