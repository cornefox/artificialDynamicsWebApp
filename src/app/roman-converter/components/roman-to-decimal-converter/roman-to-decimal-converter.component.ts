import { Component } from '@angular/core';
import { RomanConverterService } from '../../services/roman-converter.service';

@Component({
    selector: 'app-roman-to-decimal-converter',
    templateUrl: './roman-to-decimal-converter.component.html',
    styleUrls: ['./roman-to-decimal-converter.component.css']
})
export class RomanToDecimalConverterComponent {

    public roman: string = '';
    public decimal: number | null = null;

    constructor(
        private romanConverterService: RomanConverterService
    ) { }

    public convertRomanToDecimal(): void {
        this.decimal = this.romanConverterService.convert(this.roman);
    }

    public validateWriting(event: Event): void {
        const input = event.target as HTMLInputElement;
        input.value = input.value = input.value.toUpperCase().replace(/[^IVXLCDM]/g, '');
        this.roman = input.value;
    }

}