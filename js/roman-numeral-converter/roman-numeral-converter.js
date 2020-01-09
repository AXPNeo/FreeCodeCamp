function convertToRoman(num) {
    var numeralPairs = [
        {decimal: 1000,
         roman: "M"},
        {decimal: 500, 
         roman: "D"},
        {decimal: 100, 
         roman: "C"},
        {decimal: 50, 
         roman: "L"},
        {decimal: 10, 
         roman: "X"},
        {decimal: 5, 
         roman: "V"},
        {decimal: 1, 
         roman: "I"} 
    ];
    var romanArr = [];
    for(var i = 0; i < numeralPairs.length; i++){
        // If looking at a power of 10, test if witin a step of the next largest number.
        // Addresses IV, XL, CD
        if(Number.isInteger(Math.log10(numeralPairs[i].decimal)) && i > 0){
            if(num + numeralPairs[i].decimal >= numeralPairs[i-1].decimal){
                romanArr.push(numeralPairs[i].roman);
                romanArr.push(numeralPairs[i-1].roman);
                num -= numeralPairs[i-1].decimal - numeralPairs[i].decimal
            }
        }
        // If looking at a 5 test if within the next power of 10 of the previous power of 10.
        // Addresses IX, XC, CM
        else if(!Number.isInteger(Math.log10(numeralPairs[i].decimal)) && i > 0){
            if(num + numeralPairs[i+1].decimal >= numeralPairs[i-1].decimal){
                romanArr.push(numeralPairs[i+1].roman);
                romanArr.push(numeralPairs[i-1].roman);
                num -= numeralPairs[i-1].decimal - numeralPairs[i+1].decimal
            }
        }
        // Generic fill
        while(num >= numeralPairs[i].decimal){
            romanArr.push(numeralPairs[i].roman);
            num -= numeralPairs[i].decimal;
        }

    }

    var romanNum = romanArr.join("");
    console.log(romanNum);
    return romanNum;
}

console.log(convertToRoman(999)); //=>CMXCIX