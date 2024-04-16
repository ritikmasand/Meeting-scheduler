import { NgFor, NgIf, NgSwitch } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "@syncfusion/ej2-angular-calendars";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        NgIf,
        NgFor,
        CalendarModule,
        NgSwitch
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
