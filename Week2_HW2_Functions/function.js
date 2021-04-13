// exercise 5 - Write a function that returns the number of arguments passed to the function when called.
let stryArray = ["Tom", "Jerry", "Evan", "Mike", "Adam", "Loren"]

function returnArgs(array) {
    return array.length
}

console.log(returnArgs(stryArray));

// exercise 6 - Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString(a) {
    let array = a.split("")
    return array.reverse().join(" ")

}
console.log(reverseString("jag testar"));

// exercise 7 - Write a function findLongestWord that takes an array of words and returns the length of the longest one.
let LongWords = ["Strengths", "Supercalifragilisticexpialidocious", "Incomprehensibilities", "Consanguineous", "Psychotomimetic"]

function findLongestWord(LongWords) {
    for (let i = 0; i < LongWords.length; i++) {
        if (LongWords[LongWords.length - 1].length <= LongWords[i].length) { // here we compare last word to first word
            var x = LongWords[i]; // storing current word
            LongWords[i] = LongWords[LongWords.length - 1]; // 
            LongWords[LongWords.length - 1] = x; //
        }
    }
    return LongWords[LongWords.length - 1]
}
console.log(findLongestWord(LongWords));

// exercise 8 - Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
let words = ["use", "bottle", "five", "coding", "us", "software"]


function filterLongWords(x) {
    let wordLength = 5
    let temp = []
    for (let i = 0; i < x.length; i++) {
        if (x[i].length >= wordLength) {
            temp.push(x[i])
        }
    }
    return temp
}

console.log(filterLongWords(words));