/* -------- libs -------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

/* -------- components -------- */
import { RomanToDecimalConverterComponent } from './components/roman-to-decimal-converter/roman-to-decimal-converter.component';

/* -------- pipes -------- */
import { RomanCorrectionPipe } from '../pipes/roman-correction.pipe';


@NgModule({
    declarations: [
        RomanToDecimalConverterComponent,
        RomanCorrectionPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    exports: [
        RomanToDecimalConverterComponent
    ]
})

export class RomanConverterModule { }