import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* -------- modules -------- */
import { RomanConverterModule } from './roman-converter/roman-converter.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RomanConverterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
