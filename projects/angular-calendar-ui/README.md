# AngularCalendarUi

## About

A calendar component for angular that can display events on a month view.

## Getting started

#### Installation

```sh
npm install angular-calendar-ui
```

#### Manual Setup

A little configuration needs to be done in order to work with our package dependencies

Make sure the following are enabled in `tsconfig.json` file

```ts
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
  }
}

```

Install ng-bootstrap. Run this command

```sh
ng add @ng-bootstrap/ng-bootstrap
```

Include boostrap and boostrap icons in the styles in angular.json file of your app:

```ts
{
  "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/bootstrap-icons/font/bootstrap-icons.css",
      "src/styles.css"
    ],
}
```

Finally import `angular-calender-ui` module and `ng-boostrap` module into your apps module:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularCalendarUiModule } from "angular-calendar-ui";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularCalendarUiModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

Inputs that are needed to show events and customize calendar are:

1. Events
2. Dimensions
3. Colors
4. Fonts
5. Icons

## Events:

Events is an array of objects where each object represents an event that consist of

- color: Background color(string)
- startDate: Starting date time of the event(ISO format)
- endDate: End date time of the event(ISO format)
- name: Name of the event(string)
- htmlDetails/details: htmlDetails- description of the event in the form of html.(string)
  details- description of the event(string)

Note: Each event should contain either `details` or `htmlDetails`

Example:

```ts
[
  {
    color: "#d1ebfe",
    startDate: "2023-01-01T02:11:58.421Z",
    endDate: "2023-01-01T03:11:58.421Z",
    name: "New Year",
    htmlDetails: "<h1>This is H1</h1>",
  },
  {
    color: "#d0eadc",
    startDate: "2023-01-18T10:11:58.421Z",
    endDate: "2023-01-18T14:11:58.421Z",
    name: "Birthday",
    details: "Its my Birthday",
  },
];
```

## Colors:

Colors is an object to customize font color and background color.

- monthYearFont: Font color of month and year(string)
- weekDaysBg: Background color of week days(string)
- otherMonthDaysFont: Font color of days of next or previous month(string)
- weekendDaysBg: Background color of weekend days(string)
- weekendDaysFont: Font color of weekend days(string)
- todayFont: Font color of today(string)
- weekDaysFont: Font color of week days(string)
- todayBg: Backgroung color of today(string)
- weekNameFont: Font color of week names(string)
- seperatorColor: Color of the line seperator(string)
- seperatorTopColor: Color of top lone seperator(string)
- todayBtnColor: Color of today button(string)

Note: If the user provides empty string `""` then default color is assigned.

```ts
colors = {
  monthYearFont: "",
  weekDaysBg: "",
  otherMonthDaysFont: "",
  weekendDaysBg: "",
  weekendDaysFont: "",
  todayFont: "",
  weekDaysFont: "",
  todayBg: "",
  weekNameFont: "",
  seperatorColor: "",
  seperatorTopColor: "",
  todayBtnColor: "",
};
```

## Fonts:

Fonts is an object to customize the size of the fonts in the calendar.

- monthYear: Font size of the month and year(string)
- weekName: Font size of week names(string)
- date: Font size of the date(string)
- event: Font size of the event(string)

Note: If the user provides empty string `""` then default font size is assigned.

```ts
fonts = {
  monthYear: "",
  weekName: "25px",
  date: "25px",
  event: "",
};
```

## Icons:

To customize next and previous button, html can be passed as input to the component.

- color: Color of the icon(string)
- prevBtn: Html for prev button(stirng)
- nextBtn: Html for next button(String)

```ts
icons = {
  color: "",
  prevBtn: '<i class="bi bi-arrow-left-square"></i>',
  nextBtn: '<i class="bi bi-arrow-right-square"></i>',
};
```

Note: If the user provides empty string `""` then default icons are assigned. we are using bootstrap icons as defualt icons.

## Dimensions:

To customize the dimensions of the calendar

- length: Lenght of the calendar(string)
- width: Width of the calendar(string)

```ts
dimensions = {
  length: "",
  width: "",
};
```
