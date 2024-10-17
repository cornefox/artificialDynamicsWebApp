/* -------- libs -------- */
import { Component } from '@angular/core';

/* -------- services -------- */
import { RomanConverterService } from '../../services/roman-converter.service';

/* -------- interfaces -------- */
import { RomanDecimal } from 'src/app/models/roman-conversion.model';

@Component({
    selector: 'app-roman-to-decimal-converter',
    templateUrl: './roman-to-decimal-converter.component.html',
    styleUrls: ['./roman-to-decimal-converter.component.css']
})
export class RomanToDecimalConverterComponent {

    public roman: string = '';
    public decimal: number | null = null;
    public romanArray: RomanDecimal[] = [];

    constructor(
        private romanConverterService: RomanConverterService,
    ) { }

    public convertRomanToDecimal(): void {
        this.decimal = this.romanConverterService.convert(this.roman);

        if (this.decimal !== null) {
            this.romanArray.push({ roman: this.roman, decimal: this.decimal });
        };

        // Limpiar el input después de enviar
        this.roman = '';
    }

    public validateWriting(event: Event): void {
        const input = event.target as HTMLInputElement;
        input.value = input.value.toUpperCase().replace(/[^IVXLCDM]/g, '');
        this.roman = input.value;
    }

}