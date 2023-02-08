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

Props that are needed to show events and customize calendar are:

1. Events
2. dimensions
3. colors
4. fonts
5. icons

### Events:

Events is an array of objects where each object represents an event that consist of

- color: background color(string)
- startDate: starting date time of the event(ISO format)
- endDate: end date time of the event(ISO format)
- name: Name of the event(string)
- htmlDetails: description of the event in the form of html.(string)
  or details: description of the event(string)

note: each event should contain either `details` or `htmlDetails`

example:

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

### colors:

colors is an object to customize font color and background color.

```ts
colors = {
  monthYearFont: "",
  allDayColor: "",
  otherMonthDaysFontColor: "",
  weekendDaysColor: "",
  weekendDaysFontColor: "",
  todayFontColor: "",
  normalDayFontColor: "",
  todayBackgroundColor: "",
  weekNameFont: "",
  eventFont: "",
  seperatorColor: "",
  seperatorTopColor: "",
  todayBtnColor: "",
};
```

### fonts:

fonts
