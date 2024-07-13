function digitsWithWords (digit){
let word = ""
for(let i=0; i<=digit.length; i ++){
    word+=Number([i]).toString()
}
console.log(word);
}
digitsWithWords("one")
