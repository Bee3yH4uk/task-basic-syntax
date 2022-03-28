export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let roman_numerals = {
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
        I: 1,
    };
    while (str) {
        for (let roman_numeral in roman_numerals) {
            if (str.startsWith(roman_numeral)) {
                str = str.substring(roman_numeral.length);
                result += roman_numerals[roman_numeral];
                break;
            }
        }
    }
    return result;
}
