export interface RomanNumeral {
    symbol: string;
    value: number;
}

export interface RomanDecimal {
    roman: string;
    decimal: number;
}

export interface RomanNumeralPipe {
    [key: string]: number;
}