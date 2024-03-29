import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import dayjs from 'dayjs';

@Component({
  selector: 'lib-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  @Input() icons: {
    color: string;
    nextBtn: string;
    prevBtn: string;
  };
  @Input() dimensions: {
    height: string;
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
  today: dayjs.Dayjs = dayjs();
  monthDate: dayjs.Dayjs = this.today;
  closeResult = '';
  model: { day: string; month: string; year: string } = {
    day: '',
    month: '',
    year: '',
  };

  weekNames: Array<String> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  month: Array<dayjs.Dayjs> = [];

  setMonth() {
    console.log(this.icons);
    this.month = [];
    let monthStartDay = this.monthDate.startOf('month');
    let monthEndDay = this.monthDate.endOf('month');
    for (let i = monthStartDay; i <= monthEndDay; i = i.add(1, 'day')) {
      this.month = this.month.concat([i]);
    }

    if (monthStartDay.day() !== 0) {
      for (
        let i = monthStartDay.subtract(1, 'day');
        i >= monthStartDay.subtract(monthStartDay.day(), 'day');
        i = i.subtract(1, 'day')
      ) {
        this.month = [i].concat(this.month);
      }
    }

    if (monthEndDay.day() !== 6) {
      for (
        let i = monthEndDay.add(1, 'day');
        i <= monthEndDay.add(6 - monthEndDay.day(), 'day');
        i = i.add(1, 'day')
      ) {
        this.month = this.month.concat([i]);
      }
    }
  }

  constructor(private modalService: NgbModal) {
    this.setMonth();
  }

  toMonth() {
    let monthNames = [
      { id: 0, name: 'January' },
      { id: 1, name: 'February' },
      { id: 2, name: 'March' },
      { id: 3, name: 'April' },
      { id: 4, name: 'May' },
      { id: 5, name: 'June' },
      { id: 6, name: 'July' },
      { id: 7, name: 'August' },
      { id: 8, name: 'September' },
      { id: 9, name: 'October' },
      { id: 10, name: 'November' },
      { id: 11, name: 'December' },
    ];
    let name = monthNames.find((m) => m.id === this.monthDate.month());
    return name?.name;
  }

  toYear() {
    return this.monthDate.year();
  }

  goTo() {
    this.monthDate = dayjs(
      `${this.model.month}-${this.model.day}-${this.model.year}`,
      'MM-DD-YYYY'
    );
    console.log(this.model, this.monthDate);
    this.setMonth();
  }

  toToday() {
    this.monthDate = dayjs();
    this.setMonth();
  }

  onNext() {
    this.monthDate = this.monthDate.add(1, 'month');
    this.setMonth();
  }

  onPrev() {
    this.monthDate = this.monthDate.subtract(1, 'month');
    this.setMonth();
  }

  getBgColor(day: dayjs.Dayjs) {
    let weekendDaysColor =
      this.colors?.weekendDaysBg === ''
        ? '#f5f5f5'
        : this.colors?.weekendDaysBg;
    let allDayColor =
      this.colors?.weekDaysBg === '' ? 'white' : this.colors?.weekDaysBg;
    if (day.day() === 0) {
      return weekendDaysColor;
    } else {
      return allDayColor;
    }
  }

  monthYearStyles() {
    if (this.colors?.monthYearFont === '' && this.fonts?.monthYear === '') {
      return {};
    } else if (this.fonts?.monthYear === '') {
      return {
        color: this.colors?.monthYearFont,
      };
    } else if (this.colors?.monthYearFont === '') {
      return {
        'font-size': this?.fonts.monthYear,
      };
    } else {
      return {
        color: this.colors?.monthYearFont,
        'font-size': this?.fonts?.monthYear,
      };
    }
  }

  weekNameStyles() {
    if (this.colors?.weekNameFont === '' && this.fonts?.weekName === '') {
      return {
        'border-color':
          this.colors?.seperatorTopColor === ''
            ? '#c7c7cc'
            : this.colors?.seperatorTopColor,
      };
    } else if (this.fonts?.weekName === '') {
      return {
        color: this.colors?.weekNameFont,
        'border-color':
          this.colors?.seperatorTopColor === ''
            ? '#c7c7cc'
            : this.colors?.seperatorTopColor,
      };
    } else if (this.colors?.weekNameFont === '') {
      return {
        'font-size': this.fonts?.weekName,
        'border-color':
          this.colors?.seperatorTopColor === ''
            ? '#c7c7cc'
            : this.colors?.seperatorTopColor,
      };
    } else {
      return {
        color: this.colors?.weekNameFont,
        'font-size': this.fonts?.weekName,
        'border-color':
          this.colors?.seperatorTopColor === ''
            ? '#c7c7cc'
            : this.colors?.seperatorTopColor,
      };
    }
  }

  dayStyles(day) {
    if (this.dimensions?.height === '') {
      return {
        'border-color':
          this.colors?.seperatorColor === ''
            ? '#e5e5e5'
            : this.colors?.seperatorColor,
        'background-color': this.getBgColor(day),
      };
    } else {
      return {
        'border-color':
          this.colors?.seperatorColor === ''
            ? '#e5e5e5'
            : this.colors?.seperatorColor,
        'background-color': this.getBgColor(day),
        height: this.dimensions?.height,
      };
    }
  }

  setIconColor() {
    if (this.icons.color !== '') {
      return { color: this.icons.color };
    } else {
      return {};
    }
  }

  setTodayBtnColor() {
    return {
      color:
        this.colors?.todayBtnColor === '' ? 'red' : this.colors?.todayBtnColor,
    };
  }

  prevBtn() {
    if (this.icons?.prevBtn === '') {
      return '<i class="bi bi-arrow-left-square"></i>';
    } else {
      return this.icons?.prevBtn;
    }
  }

  nextBtn() {
    if (this.icons?.nextBtn === '') {
      return '<i class="bi bi-arrow-right-square"></i>';
    } else {
      return this.icons?.nextBtn;
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {}
}
