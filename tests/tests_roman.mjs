import test from './test.mjs'
import romanNumeralConverter from '../romanNumeral.mjs'

const tester = test("Roman Numeral Tests");

tester.dosNotThrowError(() => { romanNumeralConverter(1) }, "Roman numeral converter is defined");

tester.isEqual(romanNumeralConverter(1), "I", "Converting 1 to Roman");
tester.isEqual(romanNumeralConverter(2), "II", "Converting 2 to Roman");
tester.isEqual(romanNumeralConverter(3), "III", "Converting 3 to Roman");
tester.isEqual(romanNumeralConverter(4), "IV", "Converting 4 to Roman");
tester.isEqual(romanNumeralConverter(5), "V", "Converting 5 to Roman");
    tester.isEqual(romanNumeralConverter(7), "VIII", "Converting 7 to Roman"); //For testing if the function can convert 7 to a wrong Roman numeral.
tester.isEqual(romanNumeralConverter(8), "VIII", "Converting 8 to Roman"); 
tester.isEqual(romanNumeralConverter(9), "IX", "Converting 9 to Roman");
tester.isEqual(romanNumeralConverter(10), "X", "Converting 10 to Roman");
    tester.isEqual(romanNumeralConverter(13), "XIII", "Converting 13 to Roman"); //Testing if the function can convert 13 to Roman numeral.
tester.isEqual(romanNumeralConverter(40), "XL", "Converting 40 to Roman");
    tester.isEqual(romanNumeralConverter(47), "XLVII", "Converting 47 to Roman"); //Testing if the function can convert 47 to Roman numeral.
tester.isEqual(romanNumeralConverter(50), "L", "Converting 50 to Roman");
    tester.isEqual(romanNumeralConverter(59), "LIX", "Converting 59 to Roman"); //Testing if the function can convert 59 to Roman numeral.
tester.isEqual(romanNumeralConverter(90), "XC", "Converting 90 to Roman");
tester.isEqual(romanNumeralConverter(100), "C", "Converting 100 to Roman");
tester.isEqual(romanNumeralConverter(400), "CD", "Converting 400 to Roman");
    tester.isEqual(romanNumeralConverter(437), "CDXXXVII", "Converting 437 to Roman"); //Testing if the function can convert 437 to Roman numeral.
tester.isEqual(romanNumeralConverter(500), "D", "Converting 500 to Roman");
tester.isEqual(romanNumeralConverter(900), "CM", "Converting 900 to Roman");
    tester.isEqual(romanNumeralConverter(969), "CMLXIX", "Converting 969 to Roman"); //Testing if the function can convert 969 to Roman numeral.
tester.isEqual(romanNumeralConverter(1000), "M", "Converting 1000 to Roman");
tester.isEqual(romanNumeralConverter(2000), "MM", "Converting 1000 to Roman"); //Testing if the function can convert 2000 to Roman numeral. It look like the convert is only at 1000.