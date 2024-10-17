/* -------- libs -------- */
import { Injectable } from '@angular/core';

/* -------- interfaces -------- */
import { RomanNumeral } from 'src/app/models/roman-conversion.model';

@Injectable({
    providedIn: 'root'
})
export class RomanConverterService {

    private romanNumerals: RomanNumeral[] = [
        { symbol: 'I', value: 1 },
        { symbol: 'V', value: 5 },
        { symbol: 'X', value: 10 },
        { symbol: 'L', value: 50 },
        { symbol: 'C', value: 100 },
        { symbol: 'D', value: 500 },
        { symbol: 'M', value: 1000 }
    ];

    public convert(roman: string): number {

        let decimal = 0;

        for (let i = 0; i < roman.length; i++) {

            let current = this.getRomanValue(roman[i]);
            let next = this.getRomanValue(roman[i + 1]);

            // suma o resta dependiendo del valor del siguiente símbolo
            if (current < next) {
                decimal -= current;
            } else {
                decimal += current;
            };
        }

        return decimal;
    }

    private getRomanValue(symbol: string): number {
        // Buscar el valor correspondiente al símbolo romano
        const numeral = this.romanNumerals.find(n => n.symbol === symbol);

        // Si no se encuentra el símbolo, lanzar un error en consola
        if (!numeral) {
            throw new Error(`Símbolo romano no válido: ${symbol}`);
        }

        return numeral.value;
    }

}