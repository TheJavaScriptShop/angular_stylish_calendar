# AngularCalendarUi

### About

A calendar component for angular that can display events on a month view.

### Getting started

#### Installtion

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

```js
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
