/* -------- libs -------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* -------- components -------- */
import { RomanToDecimalConverterComponent } from './components/roman-to-decimal-converter/roman-to-decimal-converter.component';


@NgModule({
    declarations: [
        RomanToDecimalConverterComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        RomanToDecimalConverterComponent
    ]
})

export class RomanConverterModule { }