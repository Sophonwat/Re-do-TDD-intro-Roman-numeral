// Decimal to Roman Numeral converter 

function romanNumeralConverter(nInt) {

    let output = "";
    //While = loops
    //While = for unkown numbers of loops.
    while (nInt > 0) { //if nInt is greater than 0, then it will loop
        let diff = 0; //let = variables

        if (nInt >= 1000) { //if nInt is greater than or equal to 1000, then it will output M
            output += "M";
            diff = 1000;
        }
        else if (nInt >= 900) { //
            output += "CM";
            diff = 900;
        }
        else if (nInt >= 500) { //if nInt is greater than or equal to 500, then it will output D
            output += "D";
            diff = 500;
        }
        else if (nInt >= 400) { 
            output += "CD";
            diff = 400;
        }
        else if (nInt >= 100) { //if nInt is greater than or equal to 100, then it will output C
            output += "C";
            diff = 100;
        }
        else if (nInt >= 90) { //if nInt is greater than or equal to 90, then it will output XC. 
            output += "XC";
            diff = 90;
        }
        else if (nInt >= 50) { 
            output += "L";
            diff = 50;
        }
        else if (nInt >= 40) {
            output += "XL";
            diff = 40;
        }
        else if (nInt >= 10) {
            output += "X";
            diff = 10;
        }
        else if (nInt >= 9) {
            output += "IX";
            diff = 9;
        }
        else if (nInt >= 5) {
            output += "V";
            diff = 5;
        }
        else if (nInt >= 4) { // ">=" means greater than or equal to
            output += "IV";
            diff = 4;
        }
        //else if = if the first condition is false, then it will check the next condition
        else if (nInt < 4) {
            output += "I";
            diff = 1;
        }
        //substraction between nInt and diff, diff from nInt.
        nInt -= diff; 
    }

    return output; 
    //return exit from the function.

}

export default romanNumeralConverter; //export the function to be used in other files.

console.log(romanNumeralConverter(1));
console.log(romanNumeralConverter(1000));
//(1) = nInt parameter, (1000) = nInt parameter