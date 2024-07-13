// function digitsWithWords(digit) {
//     let res = 0

//     switch (digit) {
//         case "one":
//             res = 1; break;
//         case "two":
//             res = 2; break;
//         case "three":
//             res = 3; break;
//         case "four":
//             res = 4; break;
//         case "five":
//             res = 5; break;
//         case "six":
//             res = 6; break;
//         case "seven":
//             res = 7; break;
//         case "eight":
//             res = 8; break;
//         case "nine":
//             res = 9; break;
//         case "zero":
//             res = 0; break;
//     }


//     console.log(res);
// }
// digitsWithWords('zero');
// digitsWithWords('two');
// digitsWithWords('zero');

function digitsWithWords (digit){
let word = ""

for(let i=0; i<=digit.length; i ++){
    word+=Number([i]).toString()

}

console.log(word);
    
}
digitsWithWords("one")