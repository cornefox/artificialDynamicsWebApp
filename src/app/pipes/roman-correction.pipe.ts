import { Pipe, PipeTransform } from '@angular/core';
import { RomanNumeralPipe } from '../models/roman-conversion.model';

@Pipe({
    name: 'romanCorrection'
})
export class RomanCorrectionPipe implements PipeTransform {


    public romanNumerals: RomanNumeralPipe = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    public transform(roman: string): string {
        const decimalValue = this.romanToDecimal(roman);
        return this.decimalToRoman(decimalValue);
    }

    // Función para convertir de número romano mal escrito a decimal
    private romanToDecimal(roman: string): number {
        let decimalValue = 0;
        let i = 0;

        while (i < roman.length) {
            const twoChar = roman.substr(i, 2);  // Toma 2 caracteres
            const oneChar = roman.substr(i, 1);  // Toma 1 caracter

            // Si hay un valor de 2 caracteres (por ejemplo, "IV"), lo suma
            if (this.romanNumerals[twoChar]) {
                decimalValue += this.romanNumerals[twoChar];
                i += 2;
            } else {
                // Sino, suma el valor de 1 caracter
                decimalValue += this.romanNumerals[oneChar];
                i++;
            }
        }

        return decimalValue;
    }

    // Función para convertir de decimal a número romano correctamente
    private decimalToRoman(decimal: number): string {
        let romanResult = '';

        // Recorre el mapa de valores romanos y forma el número correctamente
        for (let key in this.romanNumerals) {
            const value = this.romanNumerals[key];
            while (decimal >= value) {
                romanResult += key;
                decimal -= value;
            }
        }

        return romanResult;
    }
}